//import { useState } from "react";
import "../styles/cart.css";
import ShoppingPage from "../components/shopping";
import { useState } from "react";

const Cart = () => {
  return (
    <div className="CartContainer">
      <h1>Shopping Cart</h1>
      <div className="ChosenItemsContainer">
        <div className="dummy">dummy</div>
        <div className="dummy">dummy</div>
        <div className="dummy">dummy</div>
        <div className="dummy">dummy</div>
        <div className="dummy">dummy</div>
        <div className="dummy">dummy</div>
      </div>
    </div>
  );
};

export default Cart;
