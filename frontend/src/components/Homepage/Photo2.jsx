import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import event1 from "../images/event1.jpg";
import event2 from "../images/event2.jpg";
import event3 from "../images/event3.jpg";
import event4 from "../images/event4.jpg";
import event5 from "../images/event5.jpg";
import event6 from "../images/event6.jpg";

const images = [event1, event2, event3, event4, event5, event6];

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
        <div className="w-[380px] h-[400px] overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
