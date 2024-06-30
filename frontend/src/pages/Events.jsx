import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Component1 from "../components/Eventspage/Component1";
import Component2 from "../components/Eventspage/Component2";

const Events = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="">
      <div data-aos="fade-up">
        <Component1 /> {/* banner image element  */}
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <Component2 /> {/* text element */}
      </div>
    </div>
  );
};

export default Events;
