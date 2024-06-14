import React from "react";
import yogaImg from "../images/yoga.jpg";
import ayurvedaImg from "../images/ayurveda.jpg";
import naturopathyImg from "../images/naturopathy.jpg";
import homeopathyImg from "../images/homeopathy.jpg";
import appliedYogaImg from "../images/appliedyoga.jpg";
import vedicHeritageImg from "../images/vedicheritage.jpg";
import stressManagementImg from "../images/stress management.jpg";
import otherTherapiesImg from "../images/other therapies.jpg";
import Component4Card from "./Component4Card";

const cardData = [
  {
    title: "Yoga",
    description:
      "Yoga enhances flexibility, strength, and balance, reduces stress, promotes relaxation, improves mental clarity, and supports overall well-being.",
    imgSrc: yogaImg,
  },
  {
    title: "Ayurveda",
    description:
      "Experience the benefits of meditation in our serene studio. Join us to find inner peace and calmness through guided sessions.",
    imgSrc: ayurvedaImg,
  },
  {
    title: "Naturopathy",
    description:
      "Discover holistic well-being through personalized Ayurvedic treatments and therapies in our wellness center.",
    imgSrc: naturopathyImg,
  },
  {
    title: "Homeopathy",
    description:
      "Learn about healthy eating and nutritional advice tailored to your individual needs. Achieve your wellness goals with us.",
    imgSrc: homeopathyImg,
  },
  // {
  //   title: "Applied Yoga",
  //   description:
  //     "Learn about healthy eating and nutritional advice tailored to your individual needs. Achieve your wellness goals with us.",
  //   imgSrc: appliedYogaImg,
  // },
  // {
  //   title: "Vedic Heritage",
  //   description:
  //     "Learn about healthy eating and nutritional advice tailored to your individual needs. Achieve your wellness goals with us.",
  //   imgSrc: vedicHeritageImg,
  // },
  // {
  //   title: "Stress Management",
  //   description:
  //     "Learn about healthy eating and nutritional advice tailored to your individual needs. Achieve your wellness goals with us.",
  //   imgSrc: stressManagementImg,
  // },
  // {
  //   title: "Other Therapies",
  //   description:
  //     "Learn about healthy eating and nutritional advice tailored to your individual needs. Achieve your wellness goals with us.",
  //   imgSrc: otherTherapiesImg,
  // },
];

const Component4 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 m-4 md:m-8">
      {cardData.map((card, index) => (
        <Component4Card imgSrc={card.imgSrc} key={index}>
          <h3 className="text-l   ` md:text-lg lg:text-xl">{card.title}</h3>
          <p className="text-sm md:text-base">{card.description}</p>
        </Component4Card>
      ))}
    </div>
  );
};

export default Component4;
