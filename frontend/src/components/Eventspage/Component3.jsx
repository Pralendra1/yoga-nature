import React from "react";
import { PiPersonSimpleTaiChi } from "react-icons/pi";
const Component3 = ({ title, description }) => {
  return (
    <div className=" flex flex-col justify-start gap-1 bg-accent rounded-xl p-4">
      <PiPersonSimpleTaiChi className="text-mar" />
      <h1 className="font-playfair text-l text-mar">{title}</h1>
      <p className="font-opensans text-sm text-subheading">{description}</p>
    </div>
  );
};

export default Component3;
