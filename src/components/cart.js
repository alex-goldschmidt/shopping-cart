import { useState } from "react";
import "../styles/cart.css";

const Cart = (props) => {
  const [isActive, setActive] = useState(false);
  const toggleModal = (e) => {
    e.stopPropagation();
    setActive(!isActive);
  };

  return (
    <div className="container">
      <button className="showCart" onClick={toggleModal}>
        Shopping Cart:
      </button>
      <div className="backdrop">
        <div className={isActive ? "PropContainer" : null}>
          <p style={{ color: "Red" }}>{props.RedProp}</p>
          <p style={{ color: "Olive" }}>{props.OliveProp}</p>
          <p style={{ color: "Green" }}>{props.GreenProp}</p>
          <p style={{ color: "Blue" }}>{props.BlueProp}</p>
          <p style={{ color: "Indigo" }}>{props.IndigoProp}</p>
          <p style={{ color: "Violet" }}>{props.VioletProp}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
