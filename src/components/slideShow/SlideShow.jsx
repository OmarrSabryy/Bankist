import React, { useState } from "react";
import classes from "./slideShow.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const SlideShow = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const lastSlide = props.children.length - 1;
  const prevSlideHandler = () => {
    if (currentSlide === 0) setCurrentSlide(lastSlide);
    else setCurrentSlide((prevSlide) => (prevSlide -= 1));
  };
  const nextSlideHandler = () => {
    if (currentSlide === lastSlide) setCurrentSlide(0);
    else setCurrentSlide((prevSlide) => (prevSlide += 1));
  };
  const goSlideHandler = (event) => {
    const targetSlide = parseInt(event.target.id);
    if (targetSlide !== "") setCurrentSlide(targetSlide);
  };
  const slides = props.children.map((slide, index) => (
    <div
      key={index}
      className={classes.slide}
      style={{
        transform: `translateX(${(index - currentSlide) * 110}%)`,
      }}
    >
      {slide}
    </div>
  ));
  const dots = props.children.map((_, index) => (
    <div
      style={{
        background: `${index === currentSlide ? "#444444" : "#666666c2"}`,
      }}
      key={index}
      id={index + "s"}
      onClick={goSlideHandler}
      className={classes["bankist__slideShow-controls_dot"]}
    ></div>
  ));
  return (
    <div className={classes["bankist__slideShow"]}>
      <div className={classes["bankist__slideShow-actions"]}>
        <div className={classes["bankist__slideShow-actions_arrowLeft"]}>
          <AiOutlineArrowLeft
            onClick={prevSlideHandler}
            size={26}
            color="#444444"
            cursor="pointer"
          />
        </div>
        <div className={classes["bankist__slideShow-actions_slides"]}>
          {slides}
        </div>
        <div className={classes["bankist__slideShow-actions_arrowRight"]}>
          <AiOutlineArrowRight
            onClick={nextSlideHandler}
            size={26}
            color="#444444"
            cursor="pointer"
          />
        </div>
      </div>
      <div className={classes["bankist__slideShow-controls"]}>{dots}</div>
    </div>
  );
};

export default SlideShow;
