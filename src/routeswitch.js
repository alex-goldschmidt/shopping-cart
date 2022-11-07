import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./components/homepage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/components/homepage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
