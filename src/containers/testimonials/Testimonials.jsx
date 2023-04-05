import React from "react";
import { Testimonial, SlideShow } from "../../components";
import author01 from "../../assets/user-1.jpg";
// const slides = [<Testimonial/>,<Testimonial/>]
const Testimonials = () => {
  return (
    <div>
      <SlideShow>
        <Testimonial
          title="Best financial decision ever!"
          image={author01}
          author="Aarav Lynn"
          address="San Francisco, USA"
        />
        <Testimonial
          title="Best financial decision ever!"
          image={author01}
          author="Aarav Lynn"
          address="San Francisco, USA"
        />
      </SlideShow>
    </div>
  );
};

export default Testimonials;
