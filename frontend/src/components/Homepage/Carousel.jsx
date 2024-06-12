import { useEffect, useState } from "react";
import yogaImg from "../images/yoga.jpg";
import homeopathyImg from "../images/homeopathy.jpg";
import naturopathyImg from "../images/naturopathy.jpg";
import vedicheritageImg from "../images/vedicheritage.jpg";
import appliedyogaImg from "../images/appliedyoga.jpg";
import ayurvedaImg from "../images/ayurveda.jpg";
import othertherapiesImg from "../images/other therapies.jpg";
import stressImg from "../images/stress management.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const images = [
    { img: yogaImg, text: "Yoga" },
    { img: homeopathyImg, text: "Homeopathy" },
    { img: naturopathyImg, text: "Naturopathy" },
    { img: vedicheritageImg, text: "Vedic Heritage" },
    { img: appliedyogaImg, text: "Applied Yoga" },
    { img: ayurvedaImg, text: "Ayurveda" },
    { img: othertherapiesImg, text: "Other Therapies" },
    { img: stressImg, text: "Stress Management" },
  ];

  const handleMouseEnter = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-96 overflow-hidden relative text-center font-custom">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-item w-full flex-shrink-0 relative"
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <img
              src={image.img}
              className="w-full cursor-pointer"
              alt={`Carousel item ${index}`}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
              <p className="text-white text-2xl italic">{image.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
