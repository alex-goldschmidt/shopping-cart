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
        Shopping Cart: {props.quantityProp}
      </button>
      <div className="backdrop">
        <div className={isActive ? "PropContainer" : null}>
          <p style={{ color: "Red" }}>
            {props.RedProp} ({props.RedCount})
          </p>
          <p style={{ color: "Olive" }}>
            {props.OliveProp} ({props.OliveCount})
          </p>
          <p style={{ color: "Green" }}>
            {props.GreenProp} ({props.GreenCount})
          </p>
          <p style={{ color: "Blue" }}>
            {props.BlueProp} ({props.BlueCount})
          </p>
          <p style={{ color: "Indigo" }}>
            {props.IndigoProp} ({props.IndigoCount})
          </p>
          <p style={{ color: "Violet" }}>
            {props.VioletProp} ({props.VioletCount})
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
