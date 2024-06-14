import React from "react";

const ServiceCard = ({ children, imgSrc, ...props }) => {
  return (
    <div
      {...props}
      className="relative overflow-hidden shadow-lg group min-w-[300px] h-full"
    >
      <img
        src={imgSrc}
        alt=""
        className="w-full h-96 object-cover transition-transform group-hover:scale-110 duration-500"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="p-6 text-white">{children}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
