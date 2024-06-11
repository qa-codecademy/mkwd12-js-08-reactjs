import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import CartPage from "./Pages/CartPage/CartPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import { LinkData } from "./models/core.model";
import productsJSON from "./data/products.json";
import { useState } from "react";
import { Product } from "./models/product.model";

function App() {
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

  const linkDataArr: LinkData[] = [
    {
      path: "/products",
      text: "Products",
    },
    {
      path: "/cart",
      text: "Cart",
    },
  ];

  return (
    <div>
      <Header title="🛒 E-Store App" linkDataArr={linkDataArr} />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route
            path="/products"
            element={<ProductsPage products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartProducts={getProductsInCart()}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProductDetailsPage products={products} addToCart={addToCart} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
