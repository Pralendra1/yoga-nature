import React from "react";

const Component1 = ({ title, description, image }) => {
  return (
    <div className="px-2 md:px-10 lg:px-20 p-5 bg-offwhite text-subheading ">
      <div className="bg-heading p-5 m-5 rounded-2xl font-lora ">
        <h1 className="text-2xl mb-4 ml-2">{title}</h1>
        <img src={image} alt="" />
        <div className="border border-subheading my-4"></div>
        <p className="text-l font-montserrat">{description}</p>
      </div>
    </div>
  );
};

export default Component1;
