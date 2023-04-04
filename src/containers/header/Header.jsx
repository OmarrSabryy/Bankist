import React from "react";
import classes from "./header.module.css";
import Welcome from "../../assets/hero.png";

const Header = () => {
  return (
    <div className={`${classes["bankis__header"]} section`}>
      <div className={classes["bankis__header-heading"]}>
        <h1>When banking meets minimalist</h1>
        <h3>A simpler banking experience for a simpler life</h3>
        <a href="#features">Learn more ⬇</a>
      </div>
      <div className={classes["bankis__header-image"]}>
        <img src={Welcome} alt="header" />
      </div>
    </div>
  );
};

export default Header;
