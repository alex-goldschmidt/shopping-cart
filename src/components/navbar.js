import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="outline">
      <div className="content">
        <a className="leftside" href="#/">
          <div className="heading-style-h6">Color Shop</div>
        </a>

        <div className="RightSide">
          <Link to="/">
            <a className="link" href="#/">
              Home
            </a>
          </Link>
          <Link to="/components/shopping">
            <Link />
            <a className="link" href="#/">
              Shop
            </a>
          </Link>
          <a className="link" href="#/">
            Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
