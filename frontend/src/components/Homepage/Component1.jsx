import React from "react";
import overlayimage from "../images/overlayimage1.jpg";
import { FaCheck } from "react-icons/fa";

const Component1 = () => {
  return (
    <div className="h-full p-4 md:p-16 lg:p-20 lg:py-10 flex flex-col-reverse lg:flex-row">
      <div className="m-4 flex justify-center items-center p-4">
        <img
          src={overlayimage}
          alt=""
          className="h-auto w-[300px]  sm:w-[300px] md:w-[450px] lg:w-[900px] xl:w-[810px]  p-1 "
        />
      </div>
      <div className="my-4 justify-center items-center p-4">
        <h1 className="text-xl uppercase m-3 font-playfair">who we are</h1>
        <h1 className="text-xl m-3 text-subheading font-lora">
          The natural way to achieving balance and optimal health
        </h1>
        <h1 className="text-l m-3 font-opensans">
          When we see “Strength in Problems” We Stop Resisting Stress and Use it
          is as an Impetus for Eustress or a Positive Stress.. When we learn to
          evoke the ‘Stay and Play' rather than the ‘Fight or Flight' response -
          One can live Optimal Healthy Life!.. That’s the Beginning of the First
          Chapter of Your Book of Life!!!
        </h1>
        <div className="mb-4">
          <div className="m-2 text-l flex font-opensans">
            <FaCheck className="m-1 text-mar" />
            <h1 className="ml-2">Expert Instructors</h1>
          </div>
          <div className="m-2 text-l flex font-opensans">
            <FaCheck className="m-1 text-mar" />
            <h1 className="ml-2">Traditional and Modern Techniques</h1>
          </div>
          <div className="m-2 text-l flex font-opensans">
            <FaCheck className="m-1 text-mar" />
            <h1 className="ml-2">Personalized Yoga Programs</h1>
          </div>
          <div className="m-2 text-l flex font-opensans">
            <FaCheck className="m-1 text-mar" />
            <h1 className="ml-2">Flexible Scheduling and 24/7 Support</h1>
          </div>
        </div>
        <button className="btn btn-outline text-mar border border-mar hover:bg-mar hover:border-none hover:text-white font-montserrat ml-2 text-xs">
          Learn More About Us
        </button>
      </div>
    </div>
  );
};

export default Component1;
