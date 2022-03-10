import { HashLink } from "react-router-hash-link";
import MenuItems from "../../../../data/MenuItems.json";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom";

const MenuDesktop = () => {
  const location = useLocation();

  return (
    <ul className="nav-menu-desktop d-none d-lg-grid">
      {MenuItems.map((item, index) => {
        if (location.pathname === "/") {
          return (
            <ScrollLink to={item.url} offset={-70} duration={500}>
              <li key={index} className="nav-links">
                {item.title}
              </li>
            </ScrollLink>
          );
        } else {
          return (
            <HashLink to={`/#${item.url}`}>
              <li key={index} className="nav-links">
                {item.title}
              </li>
            </HashLink>
          );
        }
      })}
    </ul>
  );
};

export default MenuDesktop;
