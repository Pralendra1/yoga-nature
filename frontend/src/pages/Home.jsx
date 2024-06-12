import React from "react";
import Yoga from "../components/Homepage/Yoga";
import Events from "../components/Homepage/Events";
import Main from "../components/Homepage/Main";
import Footer from "../components/Homepage/Footer";

const Home = () => {
  return (
    <div className="m-0 p-0">
      <Main />
      <Yoga />
      <Events />
      <Footer />
    </div>
  );
};

export default Home;
