import React from "react";
import bannerImg from "../images/1events.jpg";

const Component1 = () => {
  return (
    <div className="relative">
      <img
        src={bannerImg}
        alt=""
        className="h-80 w-auto sm:h-auto sm:w-full filter object-cover blur-[0.5px]"
      />
      <div className="absolute inset-0 flex flex-col items-end justify-center mr-20 z-10 text-accent">
        <h1 className="relative text-xl sm:text-3xl lg:text-4xl font-semibold font-playfair">
          EVENTS
          <span className="absolute right-[-30px] w-[2px] h-full bg-accent"></span>
          <span className="absolute right-[-20px] w-[2px] h-full bg-accent"></span>
        </h1>
        <h1 className="relative text-l sm:text-xl lg:text-2xl font-lora">
          Turning Moments into Memories
          <span className="absolute right-[-20px] w-[2px] h-full bg-accent"></span>
          <span className="absolute right-[-30px] w-[2px] h-full bg-accent"></span>
        </h1>
      </div>
    </div>
  );
};

export default Component1;
