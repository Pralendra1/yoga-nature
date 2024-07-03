import React from "react";
import overlayimage from "../images/yogaimages/eventswedo.jpg";
import { HiFire } from "react-icons/hi";

const Component4 = () => {
  return (
    <div className="h-full p-4 md:p-16 lg:p-20 lg:py-10 flex flex-col-reverse lg:flex-row">
      <div className="m-4 flex justify-center items-center p-4">
        <img
          src={overlayimage}
          alt=""
          className="h-auto w-[300px]  sm:w-[400px] md:w-[350px] lg:w-[900px] xl:w-[1000px]  p-1 "
        />
      </div>
      <div className="my-4 justify-center items-center p-4">
        <h1 className="text-xl uppercase m-3 font-playfair">
          what events we conduct
        </h1>
        <h1 className="text-xl m-3 text-subheading font-lora">
          Experience the extraordinary with our events
        </h1>
        <h1 className="text-l m-3 font-opensans">
          We organize a diverse array of events to engage our community and
          attract new members. Our signature event, the International Day of
          Yoga, celebrated every June 21st, brings together yoga enthusiasts to
          promote global awareness and harmony through yoga. We also host
          immersive Yoga Retreats in serene locations, offering participants a
          chance to deepen their practice and find inner peace.
        </h1>
        <div>
          <div className="m-2 text-l flex font-opensans">
            <HiFire className="m-1 text-mar" />
            <h1 className="ml-2">International Day for Yoga</h1>
          </div>
          <div className="m-2 text-l flex font-opensans">
            <HiFire className="m-1 text-mar" />
            <h1 className="ml-2">Yoga Workshops</h1>
          </div>
          <div className="m-2 text-l flex font-opensans">
            <HiFire className="m-1 text-mar" />
            <h1 className="ml-2">1 on 1 consultancy</h1>
          </div>
          <div className="m-2 text-l flex font-opensans">
            <HiFire className="m-1 text-mar" />
            <h1 className="ml-2">Yoga festivals</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component4;
