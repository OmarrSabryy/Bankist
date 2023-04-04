import React from "react";
import classes from "./features.module.css";
import { Feature } from "../../components";
import Digital from "../../assets/digital.jpg";
import Grow from "../../assets/grow.jpg";
const Features = () => {
  return (
    <div className={`${classes["bankist__features"]} section`}>
      <div className={classes["bankist__features-heading"]}>
        <h3>Features</h3>
        <h1>Everything you need in a modern bank and more.</h1>
      </div>
      <div className={classes["bankist__features-feature"]}>
        <div className={classes["bankist__features-feature_image"]}>
          <img src={Digital} alt="feature1" />
        </div>
        <div className={classes["bankist__features-feature_desc"]}>
          <Feature
            title="100% digital bank"
            text="all services are exclusively online"
          />
        </div>
      </div>
      <div className={classes["bankist__features-feature"]}>
        <div className={classes["bankist__features-feature_desc"]}>
          <Feature
            title="Watch your money grow"
            text="the best investment ever 100% guranteed"
          />
        </div>
        <div className={classes["bankist__features-feature_image"]}>
          <img src={Grow} alt="feature2" />
        </div>
      </div>
    </div>
  );
};

export default Features;
