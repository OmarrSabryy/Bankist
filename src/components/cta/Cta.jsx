import React from "react";
import classes from "./cta.module.css";
const Cta = () => {
  return (
    <div className={classes["bankist__cta"]}>
      <h1>
        The best day to join Bankist was one year ago. The second best is today!
      </h1>
      <button>Open your free account today!</button>
    </div>
  );
};

export default Cta;
