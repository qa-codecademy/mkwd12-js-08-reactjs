import { ReactNode, createContext, useEffect, useState } from "react";
import { Product } from "../models/product.model";
import { Spinner } from "../Components/Spinner/Spinner";
import { httpService } from "../services/http.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProductContextInterface {
  products: Product[];
  addToCart: (selectedProduct: Product) => void;
  removeFromCart: (selectedProduct: Product) => void;
  getProductsInCart: () => Product[];
  addProductQuantity: (selectedProduct: Product) => void;
  removeProductQuantity: (selectedProduct: Product) => void;
  fetchProducts: () => Promise<void>;
  resetCart: () => void;
}

export const ProductsContext = createContext<ProductContextInterface>({
  products: [],
  addToCart() {},
  removeFromCart() {},
  getProductsInCart() {
    return [];
  },
  addProductQuantity() {},
  removeProductQuantity() {},
  async fetchProducts() {},
  resetCart() {},
});

function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = (selectedProduct: Product) => {
    setProducts(prevProducts => {
      return prevProducts.map(product =>
        product.id === selectedProduct.id
          ? { ...product, inCart: true, quantity: 1 }
          : product
      );
    });
    toast.success("Product added to cart");
  };

  const removeFromCart = (selectedProduct: Product) => {
    setProducts(prevProducts => {
      return prevProducts.map(product =>
        product.id === selectedProduct.id
          ? { ...product, inCart: false }
          : product
      );
    });
    toast.info("Product removed from cart");
  };

  const addProductQuantity = (selectedProduct: Product) => {
    setProducts(prevProducts => {
      return prevProducts.map(product =>
        product.id === selectedProduct.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    });
  };

  const removeProductQuantity = (selectedProduct: Product) => {
    if (selectedProduct.quantity === 1) return;

    setProducts(prevProducts => {
      return prevProducts.map(product =>
        product.id === selectedProduct.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
    });
  };

  const getProductsInCart = () => products.filter(product => product.inCart);

  const fetchProducts = async () => {
    setIsLoading(true);

    try {
      const { data } = await httpService.get("/products");
      const products = data as Product[];

      setProducts(
        products.map(product => ({
          ...product,
          inCart: false,
          quantity: 0,
        }))
      );
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const resetCart = () => {
    setProducts(prevProducts =>
      prevProducts.map(product => ({ ...product, inCart: false, quantity: 0 }))
    );
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <ToastContainer position="bottom-right" />
      <ProductsContext.Provider
        value={{
          products,
          addToCart,
          removeFromCart,
          getProductsInCart,
          addProductQuantity,
          removeProductQuantity,
          fetchProducts,
          resetCart,
        }}
      >
        {children}
      </ProductsContext.Provider>
    </>
  );
}

export default ProductsProvider;
