import React from "react";
import bannerImg from "../images/banner.jpg";
const Component5 = () => {
  return (
    <div
      className="relative w-full h-96 bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-xl md:text-3xl xl:text-4xl mb-3 md:mb-6 italic">
          Know Yoga Know Your Life
        </h1>
        <p className="text-lg md:text-3xl xl:text-3xl mb-5 md:mb-6 max-w-2xl  ">
          Holistic Living Through Yoga Nature
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="text-sm lg:text-l rounded-3xl px-6 py-2 border border-white text-white  hover:bg-white hover:text-black">
            Consultation On Call
          </button>
          <button className="text-sm lg:text-l rounded-3xl px-6 py-2 border border-white text-white  hover:bg-white hover:text-black">
            Book An Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Component5;
