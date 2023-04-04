import React, { useState } from "react";
import classes from "./navbar.module.css";
import Logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Menu = () => (
  <>
    <li>
      <a href="#features">Features</a>
    </li>
    <li>
      <a href="#operations">Operations</a>
    </li>
    <li>
      <a href="#testimonials">Testimonials</a>
    </li>
    <li>
      <button>Open Account</button>
    </li>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className={classes["bankist__navbar"]}>
      <div className={classes["bankist__navbar-image"]}>
        <img src={Logo} alt="logo" />
      </div>
      <ul className={classes["bankist__navbar-links"]}>
        <Menu />
      </ul>
      <div className={classes["bankist__navbar-dropdown"]}>
        {toggleMenu ? (
          <AiOutlineClose
            size={23}
            color="#444444"
            onClick={toggleMenuHandler}
          />
        ) : (
          <GiHamburgerMenu
            size={23}
            color="#444444"
            onClick={toggleMenuHandler}
          />
        )}
        {toggleMenu && (
          <ul
            className={`${classes["bankist__navbar-dropdown_links"]} slide-top`}
          >
            <Menu />
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
