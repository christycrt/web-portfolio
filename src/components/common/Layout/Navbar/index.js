import { Link } from "react-router-dom";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

const Navbar = () => {
  return (
    <nav className="navbar-item">
      <div className="container navbar-wrapper">
        <Link to="/">
          <p className="logo">CRT.</p>
        </Link>
        <MenuDesktop />
        <MenuMobile />
      </div>
    </nav>
  );
};

export default Navbar;
