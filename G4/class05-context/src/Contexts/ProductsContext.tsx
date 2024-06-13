import { ReactNode, createContext, useState } from "react";
import { Product } from "../models/product.model";
import productsJSON from "../data/products.json";

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
  const [products, setProducts] = useState<Product[]>(productsJSON);

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

  const getProductsInCart = () => products.filter(product => product.inCart);

  const removeFromCart = (selectedProduct: Product) => {
    setProducts(prevProducts => {
      return prevProducts.map(product =>
        product.id === selectedProduct.id
          ? { ...product, inCart: false }
          : product
      );
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products, addToCart, removeFromCart, getProductsInCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
