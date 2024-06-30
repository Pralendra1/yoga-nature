import React from "react";
import mainImg from "../images/Mainimg.jpg";
import gif from "../images/gif.gif";

const Main = () => {
  return (
    <div className="relative w-full h-auto">
      <img src={mainImg} alt="Example" className="w-full h-auto" />
      <div className="absolute inset-0 bg-accent opacity-40"></div>{" "}
      {/* Dark overlay */}
      <img
        src={gif}
        alt=""
        className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[150px] m-0.5 sm:h-[180px] md:m-1 lg:m-2 lg:h-[300px] md:h-[220px]" // Apply filter to remove background
      />
    </div>
  );
};

export default Main;
