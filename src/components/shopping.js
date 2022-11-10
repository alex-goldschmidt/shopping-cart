import "../styles/shopping.css";
import { useState } from "react";

const ShoppingPage = () => {
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
      <h1 className="PageGreeting">Shop for Colors</h1>
      <div className="ColorsContainer">
        <div className="RedContainer">
          <div
            className="card"
            style={{ backgroundColor: "Red" }}
            data-value="red"
          ></div>

          <div className="AddButtonAndModify">
            <button className="AddToCart">Add To Cart</button>
            <div className="ModifyRedCount">
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
          <div
            className="card"
            style={{ backgroundColor: "Olive" }}
            data-value="olive"
          ></div>
          <div className="AddButtonAndModify">
            <button className="AddToCart">Add To Cart</button>
            <div className="ModifyOliveCount">
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
          <div
            className="card"
            style={{ backgroundColor: "Green" }}
            data-value="green"
          ></div>
          <div className="AddButtonAndModify">
            <button className="AddToCart">Add To Cart</button>
            <div className="ModifyGreenCount">
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
          <div
            className="card"
            style={{ backgroundColor: "Blue" }}
            data-value="blue"
          ></div>
          <div className="AddButtonAndModify">
            <button className="AddToCart">Add To Cart</button>
            <div className="ModifyBlueCount">
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
          <div
            className="card"
            style={{ backgroundColor: "Indigo" }}
            data-value="indigo"
          ></div>
          <div className="AddButtonAndModify">
            <button className="AddToCart">Add To Cart</button>
            <div className="ModifyIndigoCount">
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
          <div
            className="card"
            style={{ backgroundColor: "Violet" }}
            data-value="Indigo"
          ></div>
          <div className="AddButtonAndModify">
            <button className="AddToCart">Add To Cart</button>
            <div className="ModifyVioletCount">
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
