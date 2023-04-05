import React from "react";
import classes from "./testimonial.module.css";
import { RiDoubleQuotesL } from "react-icons/ri";
const Testimonial = (props) => {
  return (
    <div className={classes["bankist__testimonial"]}>
      <RiDoubleQuotesL className={classes["bankist__testimonial-qoute"]} />
      <h2>{props.title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident
        accusantium natus. Ab quos praesentium a, animi vel sapiente itaque
        atque suscipit nihil, ut inventore, unde aliquid! Sit, consectetur
        nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
        earum deleniti! Cumque perferendis enim rerum quae hic eaque architecto
        deserunt dolorum ad officia vero nostrum, corporis dolore mollitia, sunt
        assumenda.
      </p>
      <div className={classes["bankist__testimonial-author"]}>
        <div className={classes["bankist__testimonial-author_image"]}>
          <img src={props.image} alt="" />
        </div>
        <div className={classes["bankist__testimonial-author_desc"]}>
          <h3>{props.author}</h3>
          <p>{props.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
