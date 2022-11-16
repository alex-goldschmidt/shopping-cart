import "../styles/shopping.css";
import Cart from "../components/cart";
import { useState } from "react";

let nextColor = 0;
const ShoppingPage = (props) => {
  const [Red, setRed] = useState("");
  const [RedArray, setRedArray] = useState([]);

  const [Olive, setOlive] = useState("");
  const [OliveArray, setOliveArray] = useState([]);

  const [Green, setGreen] = useState("");
  const [GreenArray, setGreenArray] = useState([]);

  const [Blue, setBlue] = useState("");
  const [BlueArray, setBlueArray] = useState([]);

  const [Indigo, setIndigo] = useState("");
  const [IndigoArray, setIndigoArray] = useState([]);

  const [Violet, setViolet] = useState("");
  const [VioletArray, setVioletArray] = useState([]);

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
  let [quantityCount, setQuantityCount] = useState(0);

  return (
    <div className="Container">
      <Cart
        quantityProp={quantityCount}
        RedProp={Red}
        RedCount={RedArray.length}
        OliveProp={Olive}
        OliveCount={OliveArray.length}
        GreenProp={Green}
        GreenCount={GreenArray.length}
        BlueProp={Blue}
        BlueCount={BlueArray.length}
        IndigoProp={Indigo}
        IndigoCount={IndigoArray.length}
        VioletProp={Violet}
        VioletCount={VioletArray.length}
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
                setQuantityCount(quantityCount + 1);
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
              <span
                onClick={() => {
                  HandleRedIncrement();
                  setQuantityCount(quantityCount + 1);
                  setRedArray([...RedArray, { id: nextColor++, name: Red }]);
                  console.log(RedArray);
                }}
                className="more"
              >
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
                setQuantityCount(quantityCount + 1);
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
              <span
                onClick={() => {
                  HandleOliveIncrement();
                  setQuantityCount(quantityCount + 1);
                  setOliveArray([
                    ...OliveArray,
                    { id: nextColor++, name: Olive },
                  ]);
                  console.log(OliveArray);
                }}
                className="more"
              >
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
                setQuantityCount(quantityCount + 1);
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
              <span
                onClick={() => {
                  HandleGreenIncrement();
                  setQuantityCount(quantityCount + 1);
                  setGreenArray([
                    ...GreenArray,
                    { id: nextColor++, name: Green },
                  ]);
                  console.log(GreenArray);
                }}
                className="more"
              >
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
                setQuantityCount(quantityCount + 1);
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
              <span
                onClick={() => {
                  HandleBlueIncrement();
                  setQuantityCount(quantityCount + 1);
                  setBlueArray([...BlueArray, { id: nextColor++, name: Blue }]);
                  console.log(BlueArray);
                }}
                className="more"
              >
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
                setQuantityCount(quantityCount + 1);
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
              <span
                onClick={() => {
                  HandleIndigoIncrement();
                  setQuantityCount(quantityCount + 1);
                  setIndigoArray([
                    ...IndigoArray,
                    { id: nextColor++, name: Indigo },
                  ]);
                  console.log(IndigoArray);
                }}
                className="more"
              >
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
                setQuantityCount(quantityCount + 1);
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
              <span
                onClick={() => {
                  HandleVioletIncrement();
                  setQuantityCount(quantityCount + 1);
                  setVioletArray([
                    ...VioletArray,
                    { id: nextColor++, name: Violet },
                  ]);
                  console.log(VioletArray);
                }}
                className="more"
              >
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
