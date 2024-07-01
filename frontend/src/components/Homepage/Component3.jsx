import React from "react";
import imageSrc from "../images/component3.jpg";

const Component3 = () => {
  return (
    <div className="relative w-auto h-[300px] md:h-[400px] italic mx-3 sm:mx-5 md:mx-10 ">
      <img
        src={imageSrc}
        alt="Background"
        className="w-full h-full object-cover "
      />
      <div className="absolute inset-0 bg-heading bg-opacity-70 flex flex-col font-semibold justify-center">
        <h1 className="text-mar text-l md:text-xl m-8 mt-6 sm:mt-12 mb-0 font-montserrat">
          Unlock the secrets to living well with Yoga
        </h1>
        <p className="text-mar text-l md:text-xl m-8 mt-2 font-montserrat">
          " Embrace a holistic journey that balances mind, body, and spirit.
          Discover inner peace, enhance flexibility, and boost overall
          well-being through mindful practices, breathing techniques, and
          meditative exercises. Start today! "
        </p>
      </div>
    </div>
  );
};

export default Component3;
