import "../styles/shopping.css";
import { useState } from "react";
import Cart from "../components/cart";

let nextColor = 0;
const ShoppingPage = () => {
  const [Red, setRed] = useState("");
  const [RedArray, setRedArray] = useState([Red]);

  const [Olive, setOlive] = useState("");
  const [OliveArray, setOliveArray] = useState([Olive]);

  const [Green, setGreen] = useState("");
  const [GreenArray, setGreenArray] = useState([Green]);

  const [Blue, setBlue] = useState("");
  const [BlueArray, setBlueArray] = useState([Blue]);

  const [Indigo, setIndigo] = useState("");
  const [IndigoArray, setIndigoArray] = useState([Indigo]);

  const [Violet, setViolet] = useState("");
  const [VioletArray, setVioletArray] = useState([Violet]);

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
      <Cart
        RedProp={Red}
        OliveProp={Olive}
        GreenProp={Green}
        BlueProp={Blue}
        IndigoProp={Indigo}
        VioletProp={Violet}
      />
      <div className="ColorsContainer">
        <div className="RedContainer">
          <div className="card" style={{ backgroundColor: "Red" }}>
            Red
          </div>

          <div className="Modify">
            <button
              className="AddRedToCartButton"
              onClick={() => {
                setRed("Red");
                setRedArray([...RedArray, { id: nextColor++, name: Red }]);
                console.log(RedArray);
              }}
            >
              Add To Cart
            </button>
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
            <button
              className="AddOliveToCartButton"
              onClick={() => {
                setOlive("Olive");
                setOliveArray([
                  ...OliveArray,
                  { id: nextColor++, name: Olive },
                ]);
                console.log(OliveArray);
              }}
            >
              Add To Cart
            </button>
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
            <button
              className="AddGreenToCartButton"
              onClick={() => {
                setGreen("Green");
                setGreenArray([
                  ...GreenArray,
                  { id: nextColor++, name: Green },
                ]);
                console.log(GreenArray);
              }}
            >
              Add To Cart
            </button>
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
            <button
              className="AddBlueToCartButton"
              onClick={() => {
                setBlue("Blue");
                setBlueArray([...BlueArray, { id: nextColor++, name: Blue }]);
                console.log(BlueArray);
              }}
            >
              Add To Cart
            </button>
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
            <button
              className="AddIndigoToCartButton"
              onClick={() => {
                setIndigo("Indigo");
                setIndigoArray([
                  ...IndigoArray,
                  { id: nextColor++, name: Indigo },
                ]);
                console.log(IndigoArray);
              }}
            >
              Add To Cart
            </button>
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
            <button
              className="AddVioletToCartButton"
              onClick={() => {
                setViolet("Violet");
                setVioletArray([
                  ...VioletArray,
                  { id: nextColor++, name: Violet },
                ]);
                console.log(VioletArray);
              }}
            >
              Add To Cart
            </button>
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
