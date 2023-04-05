import React from "react";
import classes from "./operation.module.css";
const Operation = (props) => {
  return (
    <div className={classes["bankist__operation"]}>
      <div
        className={classes["bankist__operation-circle"]}
        style={{ background: props.color }}
      ></div>
      <h2>{props.title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        magni. Porro, nesciunt minus ipsa, suscipit doloribus temporibus
        architecto, consectetur amet ab quas error officiis quia. Dolorem soluta
        dolorum dignissimos atque?
      </p>
    </div>
  );
};

export default Operation;
