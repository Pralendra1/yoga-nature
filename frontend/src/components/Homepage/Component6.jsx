import React from "react";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
import slider4 from "../images/slider4.jpg";
const cardData = [
  {
    title: "Yoga teacher training program",
    description:
      "Unlock inner harmony with our transformative yoga program. Join us to discover the ancient art of yoga, tailored for all levels.",
    imgSrc: slider1,
  },
  {
    title: "Study groups",
    description:
      "Experience holistic well-being through personalized Ayurvedic treatments and therapies in our wellness center.",
    imgSrc: slider2,
  },
  {
    title: "Continuing education credits programs",
    description:
      "Experience holistic well-being through personalized Ayurvedic treatments and therapies in our wellness center.",
    imgSrc: slider3,
  },
  {
    title: "Ayurveda study group",
    description:
      "Experience holistic well-being through personalized Ayurvedic treatments and therapies in our wellness center.",
    imgSrc: slider4,
  },
];

function Component6() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 xl:gap-10 m-8 bg-offwhite">
        {cardData.map((card, index) => (
          <div
            className="card bg-offwhite drop-shadow-2xl flex flex-col h-full min-w-[200px] "
            key={index}
          >
            <figure style={{ height: "200px", overflow: "hidden" }}>
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex-grow p-5">
              <h2 className="card-title text-l font-lora">{card.title}</h2>
              <p className="text-sm font-montserrat">{card.description}</p>
              <div className="card-actions justify-end">
                <button className="btn text-subheading hover:bg-mar hover:border-none hover:text-accent px-4 py-2 rounded-md shadow-md transition-colors duration-300 font-opensans">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Component6;
