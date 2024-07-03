import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Component1 from "../components/Eventspage/Component1";
import Component2 from "../components/Eventspage/Component2";
import Component3 from "../components/Eventspage/Component3";
import Component4 from "../components/Eventspage/Component4";

let yogaEvents = [
  {
    title: "International Day of Yoga",
    description:
      "International Day of Yoga, celebrated on June 21st, promotes global awareness and harmony through yoga. It emphasizes yoga's physical, mental, and spiritual benefits, encouraging people to adopt healthier lifestyles.",
  },
  {
    title: "Yoga Retreat",
    description:
      "A yoga retreat offers participants an opportunity to immerse themselves in yoga practice, meditation, and self-discovery. Held in tranquil locations, these retreats provide a rejuvenating experience, promoting relaxation and inner peace.",
  },
  {
    title: "Yoga Teacher Training",
    description:
      "Yoga teacher training programs equip aspiring instructors with comprehensive knowledge and skills to teach yoga effectively. These intensive courses cover yoga philosophy, anatomy, teaching methods, and practical experience, preparing individuals for certification.",
  },
  {
    title: "Yoga Workshops",
    description:
      "Yoga workshops are focused sessions that explore specific aspects of yoga practice in depth. Topics may include alignment, advanced poses, meditation techniques, or therapeutic applications. Workshops provide opportunities for learning, growth, and refinement of practice.",
  },
  {
    title: "Community Yoga Classes",
    description:
      "Community yoga classes are accessible to all, regardless of experience or ability, fostering inclusivity and connection within neighborhoods. These classes often emphasize unity, mindfulness, and the benefits of a regular yoga practice for overall well-being.",
  },
  {
    title: "Yoga Festivals",
    description:
      "Yoga festivals are vibrant gatherings that celebrate yoga through workshops, classes, lectures, music, and wellness activities. They create a supportive community of yogis, offering opportunities for learning, inspiration, and joyful exploration of yoga and holistic health.",
  },
];

const Events = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-offwhite">
      <div data-aos="fade-up">
        <Component1 /> {/* banner image element  */}
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <Component2 /> {/* text element */}
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <Component4 /> {/* what events we conduct element */}
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 p-4 pt-0 bg-offwhite justify-items-center"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        {yogaEvents.map((data, index) => (
          <Component3
            key={index}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
