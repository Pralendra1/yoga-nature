import React, { useState } from "react";
import imageSrc from "../images/component2.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const data = [
  "Yoga is the journey of the self, through the self, to the self. - The Bhagavad Gita",
  "Inhale the future, exhale the past.",
  "Yoga is not about touching your toes, it’s about what you learn on the way down.",
  "The nature of yoga is to shine the light of awareness into the darkest corners of the body.",
  "Yoga does not just change the way we see things, it transforms the person who sees.",
];

const Component2 = () => {
  const [index, setIndex] = useState(0);

  function change(addOrSub) {
    if (addOrSub === "add") {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }
    if (addOrSub === "sub") {
      setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    }
  }

  return (
    <div className="relative h-full max-w-[900px] mx-auto mb-0 xs:mb-10 font-montserrat">
      <img
        src={imageSrc}
        alt="Overlay"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-5 text-white text-center italic">
        <h1 className="text-xs sm:text-l md:text-xl lg:text-2xl p-6">
          "{data[index]}"
        </h1>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-4">
        <button
          onClick={() => change("add")}
          className="px-4 py-2 text-2xl text-white"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => change("sub")}
          className="px-4 py-2 text-2xl text-white"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Component2;
