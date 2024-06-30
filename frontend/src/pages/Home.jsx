import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Yoga from "../components/Homepage/Yoga";
import Main from "../components/Homepage/Main";
import Component1 from "../components/Homepage/Component1";
import Component2 from "../components/Homepage/Component2";
import Component3 from "../components/Homepage/Component3";
import Component4 from "../components/Homepage/Component4";
import Component4Text from "../components/Homepage/Component4Text";
import Component5 from "../components/Homepage/Component5";
import Component6Text from "../components/Homepage/Component6Text";
import Tslider from "../components/Homepage/Component6";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="m-0 p-0">
      <div data-aos="fade-up">
        <Main />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <Yoga /> {/* main yoga services component */}
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <Component2 /> {/* text slider component */}
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        <Component1 /> {/* who we are component */}
      </div>
      <div data-aos="fade-up" data-aos-delay="800">
        <Component3 /> {/* Simple Banner component */}
      </div>
      <div data-aos="fade-up" data-aos-delay="1000">
        <Component4Text /> {/* Service offered text component */}
      </div>
      <div data-aos="fade-up" data-aos-delay="1200">
        <Component4 /> {/* Hover card component */}
      </div>
      <div data-aos="fade-up" data-aos-delay="1400">
        <Component5 /> {/* Call on component */}
      </div>
      <div data-aos="fade-up" data-aos-delay="1600">
        <Component6Text />
      </div>
      <div data-aos="fade-up" data-aos-delay="1800">
        <Tslider />
      </div>
    </div>
  );
};

export default Home;
