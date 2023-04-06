import React from "react";
import { Testimonial, SlideShow } from "../../components";
import author01 from "../../assets/user-1.jpg";
import author02 from "../../assets/user-2.jpg";
import author03 from "../../assets/user-3.jpg";
import classes from "./testimonials.module.css";
// const slides = [<Testimonial/>,<Testimonial/>]
const Testimonials = () => {
  return (
    <div
      className={`${classes["bankist__testimonials"]} section`}
      id="testimonials"
    >
      <div className={classes["bankist__testimonials-heading"]}>
        <h3>NOT SURE YET?</h3>
        <h1>Millions of Bankists are already making their lifes simpler.</h1>
      </div>
      <SlideShow>
        <Testimonial
          title="Best financial decision ever!"
          image={author01}
          author="Aarav Lynn"
          address="San Francisco, USA"
        />
        <Testimonial
          title="The last step to becoming a complete minimalist"
          image={author02}
          author="Miyah Miles"
          address="London, UK"
        />
        <Testimonial
          title="Finally free from old-school banks"
          image={author03}
          author="Francisco Gomes"
          address="Lisbon, Portugal"
        />
      </SlideShow>
    </div>
  );
};

export default Testimonials;
