import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import yogaImg from "../images/yoga.jpg";
import homeopathyImg from "../images/homeopathy.jpg";
import naturopathyImg from "../images/naturopathy.jpg";
import vedicheritageImg from "../images/vedicheritage.jpg";
import appliedyogaImg from "../images/appliedyoga.jpg";
import ayurvedaImg from "../images/ayurveda.jpg";
import othertherapiesImg from "../images/other therapies.jpg";
import stressImg from "../images/stress management.jpg";

const images = [
  yogaImg,
  homeopathyImg,
  naturopathyImg,
  vedicheritageImg,
  appliedyogaImg,
  ayurvedaImg,
  othertherapiesImg,
  stressImg,
];

const Photo = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clean up the interval if the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div>
        <div className="w-[300px] h-[338px] rounded-2xl overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
