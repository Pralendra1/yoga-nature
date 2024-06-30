import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Photo from "./Photo";
const Yoga = () => {
  const [text] = useTypewriter({
    words: [
      "homeopathy",
      "naturopathy",
      "vedic heritage",
      "applied yoga",
      "ayurveda",
      "other therapies",
      "stress management",
    ],
    loop: true,
    typeSpeed: 220,
    deleteSpeed: 150,
  });
  return (
    <section className="h-full p-4">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between py-4 lg:py-10 mx-5 md:mx-16">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-4xl uppercase font-playfair text-mar">
              Yoga
            </span>
            <h1 className="text-2xl my-2 uppercase text-subheading font-lora">
              {text}
              <Cursor className="text-2xl font-opensans" />
            </h1>

            <p className="max-w-[680px] mb-4 text-l font-montserrat">
              Yoga is a holistic practice that nurtures the mind, body, and
              spirit, originating in ancient India. It combines physical
              postures, breath control, meditation, and ethical principles to
              promote inner peace, strength, flexibility, and overall
              well-being. Through yoga, practitioners cultivate mindfulness,
              reducing stress and anxiety while enhancing focus and awareness.
              It offers a profound connection between the body and mind,
              fostering balance and harmony within oneself and with the world.
              With various styles such as Hatha, Vinyasa, and Kundalini, yoga
              caters to different needs and preferences, making it accessible to
              people of all ages and fitness levels on their journey to
              self-discovery and inner transformation.
            </p>
            <button className="btn btn-outline text-mar border border-mar hover:bg-mar hover:border-none hover:text-white font-montserrat ">
              READ MORE SERVICES
            </button>
          </div>
          {/* Photo  */}
          <div className="rounded-2xl mx-16 my-4 xl:my-0 ">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Yoga;
