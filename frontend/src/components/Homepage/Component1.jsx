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
          className="w-[300px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[390px] md:h-[400px] lg:w-[800px] lg:h-[300px] xl:w-[800px] xl:h-[320px]"
        />
      </div>
      <div className="m-4 justify-center items-center p-4">
        <h1 className="text-xl uppercase m-3">who we are</h1>
        <h1 className="text-xl m-3 text-purple-500">
          The natural way to achieving balance and optimal health
        </h1>
        <h1 className="text-l m-3">
          When we see “Strength in Problems” We Stop Resisting Stress and Use it
          is as an Impetus for Eustress or a Positive Stress.. When we learn to
          evoke the ‘Stay and Play' rather than the ‘Fight or Flight' response -
          One can live Optimal Healthy Life!.. That’s the Beginning of the First
          Chapter of Your Book of Life!!!
        </h1>
        <div>
          <div className="m-2 text-l flex">
            <FaCheck className="m-1 text-green-400" />
            <h1 className="ml-2">Expert Instructors</h1>
          </div>
          <div className="m-2 text-l flex">
            <FaCheck className="m-1 text-green-400" />
            <h1 className="ml-2">Traditional and Modern Techniques</h1>
          </div>
          <div className="m-2 text-l flex">
            <FaCheck className="m-1 text-green-400" />
            <h1 className="ml-2">Personalized Yoga Programs</h1>
          </div>
          <div className="m-2 text-l flex">
            <FaCheck className="m-1 text-green-400" />
            <h1 className="ml-2">Flexible Scheduling and 24/7 Support</h1>
          </div>
        </div>
        <button className="btn btn-outline border border-purple-500 hover:bg-purple-500 hover:border-none text-l ml-3 my-1">
          Learn More About Us
        </button>
      </div>
    </div>
  );
};

export default Component1;
