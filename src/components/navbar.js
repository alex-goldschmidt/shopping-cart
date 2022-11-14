import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="outline">
      <div className="content">
        <div className="leftside">Color Shop</div>

        <div className="RightSide">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/components/shopping">
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
