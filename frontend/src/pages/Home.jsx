import React from "react";
import Yoga from "../components/Homepage/Yoga";
import Main from "../components/Homepage/Main";
import Footer from "../components/Homepage/Footer";
import Component1 from "../components/Homepage/Component1";
import Component2 from "../components/Homepage/Component2";
import Component3 from "../components/Homepage/Component3";
import Component4 from "../components/Homepage/Component4";
import Component4Text from "../components/Homepage/Component4Text";
const Home = () => {
  return (
    <div className="m-0 p-0">
      <Main />
      <Yoga /> {/* main yoga services component */}
      <Component2 /> {/* text slider component */}
      <Component1 /> {/* who we are component */}
      <Component3 /> {/* Simple Banner component */}
      <Component4Text /> {/* Service offered text component */}
      <Component4 /> {/* Hover card component */}
      <Footer />
    </div>
  );
};

export default Home;
