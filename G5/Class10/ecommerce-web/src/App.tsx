import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./components/Products";
import { Provider } from "react-redux";
import store from "./store/index";
import { Cart } from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div>Home component</div>} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />

          <Route
            path="*"
            element={<h1 style={{ color: "red" }}>Not Found 404</h1>}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
