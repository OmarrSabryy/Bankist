import React from "react";
import classes from "./slideShow.module.css";
const SlideShow = (props) => {
  return (
    <div className={classes["bankist__slideShow"]}>
      <div className={classes["bankist__slideShow-actions"]}>
        <div className={classes["bankist__slideShow-actions_arrowLeft"]}>◀</div>
        <div className={classes["bankist__slideShow-actions_slides"]}>
          {props.children}
        </div>
        <div className={classes["bankist__slideShow-actions_arrowRight"]}>
          ▶
        </div>
      </div>
      <div className={classes["bankist__slideShow-controls"]}>...</div>
    </div>
  );
};

export default SlideShow;
