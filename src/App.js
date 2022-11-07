import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/components/homepage">
        <button type="button">Go to homepage </button>
      </Link>
    </div>
  );
}

export default App;
