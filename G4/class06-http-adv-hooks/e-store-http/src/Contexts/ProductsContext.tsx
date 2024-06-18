import { ReactNode, createContext, useEffect, useState } from "react";
import { Product } from "../models/product.model";
import { Spinner } from "../Components/Spinner/Spinner";

interface ProductContextInterface {
  products: Product[];
  addToCart: (selectedProduct: Product) => void;
  removeFromCart: (selectedProduct: Product) => void;
  getProductsInCart: () => Product[];
}

export const ProductsContext = createContext<ProductContextInterface>({
  products: [],
  addToCart() {},
  removeFromCart() {},
  getProductsInCart() {
    return [];
  },
});

function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = (selectedProduct: Product) => {
    setProducts(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === selectedProduct.id) {
          product.inCart = true;
          return product;
        } else {
          return product;
        }
      });
    });
  };

  const removeFromCart = (selectedProduct: Product) => {
    setProducts(prevProducts => {
      return prevProducts.map(product =>
        product.id === selectedProduct.id
          ? { ...product, inCart: false }
          : product
      );
    });
  };

  const getProductsInCart = () => products.filter(product => product.inCart);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/api/products")
      .then(res => res.json())
      .then((products: Product[]) => {
        setProducts(
          products.map(product => ({
            ...product,
            inCart: false,
            quantity: 0,
          }))
        );

        setIsLoading(false);

        console.log(products);
      });
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <ProductsContext.Provider
        value={{ products, addToCart, removeFromCart, getProductsInCart }}
      >
        {children}
      </ProductsContext.Provider>
    </>
  );
}

export default ProductsProvider;
