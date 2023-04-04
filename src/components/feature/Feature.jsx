import React from "react";
import classes from "./feature.module.css";
const Feature = (props) => {
  return (
    <div className={classes["bankist__feature"]}>
      <div className={classes["bankist__feature-circle"]}></div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default Feature;
