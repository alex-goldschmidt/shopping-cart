import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ShoppingPage from "./components/shopping";
import Navbar from "./components/navbar";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/components/shopping" element={<ShoppingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
