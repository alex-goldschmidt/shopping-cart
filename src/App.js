import "./styles/App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Home Page </h1>
      <Link to="/components/shopping">
        <button className="ShoppingPageButton" type="button">
          Go to Shopping Page
        </button>
      </Link>
    </div>
  );
}

export default App;
