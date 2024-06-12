import React from "react";
import Navbar from "./Navbar";
import mainImg from "../images/Mainimg.jpg"; // If you created a separate image component

const Main = () => {
  return (
    <div className="relative w-full h-auto">
      <Navbar />
      <img src={mainImg} alt="Example" className="w-full h-auto" />
    </div>
  );
};

export default Main;
