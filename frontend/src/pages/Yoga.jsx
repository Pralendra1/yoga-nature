import React from "react";
import Component1 from "../components/Yogapage/Component1.jsx";
import image from "../components/images/banner.jpg";

const yogaArray = [
  {
    id: 1,
    title: "Yoga",
    description:
      "We all struggle to lead peaceful content lives. As the ancient saying goes, as long as our mind is in pieces and the pieces are in ceaseless, mutual conflict, peace eludes us. As soon as one looks at the mind as a whole by placing these pieces together (integration) then only can one get Peace of Kaivalya or Liberation which is the ultimate goal of Life. We can experience real Joy in the Heart (Atmaananda) when we look at ourselves by way of Integration of your five senses which gives Insight for the Self, which is easy to achieve and implement in our day to day life. Patanjali was one of the eminent ancient Sages who identified these pieces of the mind, which most, many archive instead of peace. He termed those as Vruttis, which are never-subsiding and are always arising. Vruttis need to be controlled, suppressed, and eliminated. By the right kind of training and discipline which can be achieved through Dispassion (Vairagya) and Sadhana, this can easily be obtained. Dispassion is born out of two ways: when you suffer in life and when you attain certain knowledge of Life (Jnana). Yoga is a word derived from the Sanskrit word Yuj (to yoke, to get Samadhi or perfect concentration) – Union of Individual self with Higher Self!",
    image: image,
  },
];

const Yoga = () => {
  return (
    <div>
      <Component1
        title={yogaArray[0].title}
        description={yogaArray[0].description}
        image={yogaArray[0].image}
      />
    </div>
  );
};

export default Yoga;
