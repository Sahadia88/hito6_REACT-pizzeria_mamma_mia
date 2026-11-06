import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { formatNumber } from "../utils/formatNumber";

const Navbar = () => {
  const { total } = useContext(CartContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div className="d-flex align-items-center gap-2">
        <span className="navbar-brand mb-0 me-2">Pizzería Mamma Mía!</span>

        <Link to="/" className="btn btn-outline-light btn-sm">
          Home
        </Link>

        <Link to="/login" className="btn btn-outline-light btn-sm">
          Login
        </Link>

        <Link to="/register" className="btn btn-outline-light btn-sm">
          Register
        </Link>

        <Link to="/profile" className="btn btn-outline-light btn-sm">
          Profile
        </Link>
      </div>

      <div>
        <Link to="/cart" className="btn btn-outline-info btn-sm">
          Total: ${formatNumber(total)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
