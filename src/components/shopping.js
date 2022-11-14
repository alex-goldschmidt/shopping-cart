import "../styles/shopping.css";
import { useState } from "react";
import Cart from "../components/cart";

const ShoppingPage = (props) => {
  const [RedQuantity, setRedQuantity] = useState(0);
  const HandleRedIncrement = () => {
    setRedQuantity(RedQuantity + 1);
  };
  const [OliveQuantity, setOliveQuantity] = useState(0);
  const HandleOliveIncrement = () => {
    setOliveQuantity(OliveQuantity + 1);
  };
  const [GreenQuantity, setGreenQuantity] = useState(0);
  const HandleGreenIncrement = () => {
    setGreenQuantity(GreenQuantity + 1);
  };
  const [BlueQuantity, setBlueQuantity] = useState(0);
  const HandleBlueIncrement = () => {
    setBlueQuantity(BlueQuantity + 1);
  };
  const [IndigoQuantity, setIndigoQuantity] = useState(0);
  const HandleIndigoIncrement = () => {
    setIndigoQuantity(IndigoQuantity + 1);
  };
  const [VioletQuantity, setVioletQuantity] = useState(0);
  const HandleVioletIncrement = () => {
    setVioletQuantity(VioletQuantity + 1);
  };

  return (
    <div className="Container">
      <Cart />
      <div className="ColorsContainer">
        <div className="RedContainer">
          <div className="card" style={{ backgroundColor: "Red" }}>
            Red
          </div>

          <div className="Modify">
            <button className="AddRedToCartButton">Add To Cart</button>
            <div>
              <span
                className="SubtractRed"
                onClick={() => setRedQuantity(RedQuantity - 1)}
              >
                -
              </span>
              {RedQuantity}
              <span onClick={HandleRedIncrement} className="more">
                +
              </span>
            </div>
          </div>
        </div>

        <div className="OliveContainer">
          <div className="card" style={{ backgroundColor: "Olive" }}>
            Olive
          </div>
          <div className="Modify">
            <button className="AddOliveToCartButton">Add To Cart</button>
            <div>
              <span
                className="SubtractOlive"
                onClick={() => setOliveQuantity(OliveQuantity - 1)}
              >
                -
              </span>
              {OliveQuantity}
              <span onClick={HandleOliveIncrement} className="more">
                +
              </span>
            </div>
          </div>
        </div>

        <div className="GreenContainer">
          <div className="card" style={{ backgroundColor: "Green" }}>
            Green
          </div>
          <div className="Modify">
            <button className="AddGreenToCartButton">Add To Cart</button>
            <div>
              <span
                className="SubtractGreen"
                onClick={() => setGreenQuantity(GreenQuantity - 1)}
              >
                -
              </span>
              {GreenQuantity}
              <span onClick={HandleGreenIncrement} className="more">
                +
              </span>
            </div>
          </div>
        </div>

        <div className="BlueContainer">
          <div className="card" style={{ backgroundColor: "Blue" }}>
            Blue
          </div>
          <div className="Modify">
            <button className="AddBlueToCartButton">Add To Cart</button>
            <div>
              <span
                className="SubtractBlue"
                onClick={() => setBlueQuantity(BlueQuantity - 1)}
              >
                -
              </span>
              {BlueQuantity}
              <span onClick={HandleBlueIncrement} className="more">
                +
              </span>
            </div>
          </div>
        </div>

        <div className="IndigoContainer">
          <div className="card" style={{ backgroundColor: "Indigo" }}>
            Indigo
          </div>
          <div className="Modify">
            <button className="AddIndigoToCartButton">Add To Cart</button>
            <div>
              <span
                className="SubtractIndigo"
                onClick={() => setIndigoQuantity(IndigoQuantity - 1)}
              >
                -
              </span>
              {IndigoQuantity}
              <span onClick={HandleIndigoIncrement} className="more">
                +
              </span>
            </div>
          </div>
        </div>

        <div className="VioletContainer">
          <div className="card" style={{ backgroundColor: "Violet" }}>
            Violet
          </div>
          <div className="Modify">
            <button className="AddVioletToCartButton">Add To Cart</button>
            <div>
              <span
                className="SubtractViolet"
                onClick={() => setVioletQuantity(VioletQuantity - 1)}
              >
                -
              </span>
              {VioletQuantity}
              <span onClick={HandleVioletIncrement} className="more">
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
