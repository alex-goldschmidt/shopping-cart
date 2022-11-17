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
    if (RedQuantity === 0) return;
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

  const removeRedFromCart = (index) => {
    setRedArray((prevState) => {
      const redIndexes = [...prevState]; //Create new array based on current {color} items in array
      redIndexes.splice(index, 1); // remove {color} item by index
      if (RedQuantity === 0) setRed(""); // when no {color} in the cart, remove the word "${color}" from cart
      return redIndexes;
    });
  };

  const removeOliveFromCart = (index) => {
    setOliveArray((prevState) => {
      const oliveIndexes = [...prevState];
      oliveIndexes.splice(index, 1);
      if (OliveQuantity === 0) setOlive("");
      return oliveIndexes;
    });
  };

  const removeGreenFromCart = (index) => {
    setGreenArray((prevState) => {
      const greenIndexes = [...prevState];
      greenIndexes.splice(index, 1);
      if (GreenQuantity === 0) setGreen("");
      return greenIndexes;
    });
  };

  const removeBlueFromCart = (index) => {
    setBlueArray((prevState) => {
      const blueIndexes = [...prevState];
      blueIndexes.splice(index, 1);
      if (BlueQuantity === 0) setBlue("");
      return blueIndexes;
    });
  };

  const removeIndigoFromCart = (index) => {
    setIndigoArray((prevState) => {
      const indigoIndexes = [...prevState];
      indigoIndexes.splice(index, 1);
      if (IndigoQuantity === 0) setIndigo("");
      return indigoIndexes;
    });
  };

  const removeVioletFromCart = (index) => {
    setVioletArray((prevState) => {
      const violetIndexes = [...prevState];
      violetIndexes.splice(index, 1);
      if (VioletQuantity === 0) setViolet("");
      return violetIndexes;
    });
  };

  const [quantityCount, setQuantityCount] = useState(0);

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
                setQuantityCount(quantityCount + 1);
                HandleRedIncrement();
              }}
            >
              Add To Cart
            </button>
            <div>
              <span
                className="SubtractRed"
                onClick={() => {
                  setRedQuantity(Math.max(RedQuantity - 1, 0));
                  setQuantityCount(Math.max(quantityCount - 1, 0));
                  removeRedFromCart();
                }}
              >
                -
              </span>
              {RedQuantity}
              <span
                onClick={() => {
                  HandleRedIncrement();
                  setQuantityCount(quantityCount + 1);
                  setRedArray([...RedArray, { id: nextColor++, name: Red }]);
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
                setQuantityCount(quantityCount + 1);
                HandleOliveIncrement();
              }}
            >
              Add To Cart
            </button>
            <div>
              <span
                className="SubtractOlive"
                onClick={() => {
                  setOliveQuantity(Math.max(OliveQuantity - 1, 0));
                  setQuantityCount(Math.max(quantityCount - 1, 0));
                  removeOliveFromCart();
                }}
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
                setQuantityCount(quantityCount + 1);
                HandleGreenIncrement();
              }}
            >
              Add To Cart
            </button>
            <div>
              <span
                className="SubtractGreen"
                onClick={() => {
                  setGreenQuantity(Math.max(GreenQuantity - 1, 0));
                  setQuantityCount(Math.max(quantityCount - 1, 0));
                  removeGreenFromCart();
                }}
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
                setQuantityCount(quantityCount + 1);
                HandleBlueIncrement();
              }}
            >
              Add To Cart
            </button>
            <div>
              <span
                className="SubtractBlue"
                onClick={() => {
                  setBlueQuantity(Math.max(BlueQuantity - 1, 0));
                  setQuantityCount(Math.max(quantityCount - 1, 0));
                  removeBlueFromCart();
                }}
              >
                -
              </span>
              {BlueQuantity}
              <span
                onClick={() => {
                  HandleBlueIncrement();
                  setQuantityCount(quantityCount + 1);
                  setBlueArray([...BlueArray, { id: nextColor++, name: Blue }]);
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
                setQuantityCount(quantityCount + 1);
                HandleIndigoIncrement();
              }}
            >
              Add To Cart
            </button>
            <div>
              <span
                className="SubtractIndigo"
                onClick={() => {
                  setIndigoQuantity(Math.max(IndigoQuantity - 1, 0));
                  setQuantityCount(Math.max(quantityCount - 1, 0));
                  removeIndigoFromCart();
                }}
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
                setQuantityCount(quantityCount + 1);
                HandleVioletIncrement();
              }}
            >
              Add To Cart
            </button>
            <div>
              <span
                className="SubtractViolet"
                onClick={() => {
                  setVioletQuantity(Math.max(VioletQuantity - 1, 0));
                  setQuantityCount(Math.max(quantityCount - 1, 0));
                  removeVioletFromCart();
                }}
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
