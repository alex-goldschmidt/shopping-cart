import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/components/shopping">
        <button type="button">Go to Shopping Page </button>
      </Link>
    </div>
  );
}

export default App;
