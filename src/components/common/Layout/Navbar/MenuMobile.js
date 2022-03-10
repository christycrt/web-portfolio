import { FaBars, FaTimes } from "react-icons/fa";

import { HashLink } from "react-router-hash-link";
import MenuItems from "../../../../data/MenuItems.json";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const MenuMobile = () => {
  const location = useLocation();

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="menu-icon d-lg-none" onClick={handleClick}>
        {click ? (
          <FaTimes className="close-icon" />
        ) : (
          <FaBars className="humburger-menu" />
        )}
      </div>
      <ul
        className={click ? "nav-menu active d-lg-none" : "nav-menu d-lg-none"}
      >
        {MenuItems.map((item, index) => {
          if (location.pathname === "/") {
            return (
              <ScrollLink
                to={item.url}
                offset={-70}
                duration={500}
                onClick={() => setClick(false)}
              >
                <li key={index} className="nav-links-mobile">
                  {item.title}
                </li>
              </ScrollLink>
            );
          } else {
            return (
              <HashLink to={`/#${item.url}`} onClick={() => setClick(false)}>
                <li key={index} className="nav-links-mobile">
                  {item.title}
                </li>
              </HashLink>
            );
          }
        })}
      </ul>
    </>
  );
};

export default MenuMobile;
