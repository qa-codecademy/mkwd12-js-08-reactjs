import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import CartPage from "./Pages/CartPage/CartPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import { AddProductPage } from "./Pages/AddProductPage/AddProductPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import { ToastContainer } from "react-toastify";
import { useAppDispatch, useAppSelector } from "./utils/hooks";
import { selectProductsInCart } from "./state/selectors";
import { Spinner } from "./Components/Spinner/Spinner";
import { useEffect } from "react";
import { fetchProducts } from "./state/slices/products.slice";

function App() {
  const dispatch = useAppDispatch();

  const cartProducts = useAppSelector(selectProductsInCart);

  const isProductsLoading = useAppSelector(state => state.products.isLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {isProductsLoading && <Spinner />}
      <ToastContainer position="bottom-right" />
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/add-product" element={<AddProductPage />} />
            <Route
              path="/checkout"
              element={
                cartProducts.length ? (
                  <CheckoutPage />
                ) : (
                  <Navigate to="/products" />
                )
              }
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

//For new vscode slow terminal add this line to your settings.json file
//"terminal.integrated.shellIntegration.enabled": false
