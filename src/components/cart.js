import { useState } from "react";
import "../styles/cart.css";

const Cart = () => {
  const [isActive, setActive] = useState(false);
  const toggleModal = (e) => {
    e.stopPropagation();
    setActive(!isActive);
  };

  return (
    <div className="container">
      <button className="showCart" onClick={toggleModal}>
        Shopping Cart
      </button>
      <div className={isActive ? "backdrop" : null}>
        <div className={isActive ? "modal" : null}></div>
      </div>
    </div>
  );
};

export default Cart;
