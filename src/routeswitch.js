import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ShoppingPage from "./components/shopping";
import Navbar from "./components/navbar";
import Cart from "./components/cart";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/components/shopping" element={<ShoppingPage />} />
        <Route path="/components/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
