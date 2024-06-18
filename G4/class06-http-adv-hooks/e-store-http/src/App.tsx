import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import CartPage from "./Pages/CartPage/CartPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";

function App() {
  return (
    <div>
      <Header title="🛒 E-Store App" />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

//For new vscode slow terminal add this line to your settings.json file
//"terminal.integrated.shellIntegration.enabled": false
