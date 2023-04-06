import React from "react";
import { Cta } from "../../components";
import classes from "./footer.module.css";
import logo from "../../assets/icon.png";
const Footer = () => {
  return (
    <div className={`${classes["bankist__footer"]} section`}>
      <Cta />
      <div className={classes["bankist__footer-nav"]}>
        <ul className={classes["bankist__footer-nav_links"]}>
          <li>About</li>
          <li>Pricing</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <div className={classes["bankist__footer-nav_image"]}>
          <img src={logo} alt="logo" />
        </div>
        <p>
          © Copyright by <span>Jonas Schmedtmann</span>. Use for learning or
          your portfolio. Don't use to teach. Don't claim as your own product.
        </p>
      </div>
    </div>
  );
};

export default Footer;
