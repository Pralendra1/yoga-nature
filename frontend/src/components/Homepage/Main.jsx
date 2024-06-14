import React from "react";
import Navbar from "./Navbar";
import mainImg from "../images/Mainimg.jpg";

const Main = () => {
  return (
    <div className="relative w-full h-auto">
      <Navbar />
      <img src={mainImg} alt="Example" className="w-full h-auto" />
      {/* <div className="absolute inset-0">
        <a href="" className="absolute top-[145px] left-[430px]">
          Yoga
        </a>
        <a href="" className="absolute top-[175px] left-[340px]">
          Ayurveda
        </a>
        <a href="" className="absolute top-[215px] left-[280px]">
          Naturopathy
        </a>
        <a href="" className="absolute top-[260px] left-[250px]">
          Homopathy
        </a>
        <a href="" className="absolute top-[310px] left-[170px]">
          Stress Management
        </a>
        <a href="" className="absolute top-[360px] left-[180px]">
          Other Therapies
        </a>
        <a href="" className="absolute top-[415px] left-[210px]">
          Research
        </a>
        <a href="" className="absolute top-[465px] left-[220px]">
          Events
        </a>

        <a href="" className="absolute top-[150px] left-[910px]">
          Courses
        </a>
        <a href="" className="absolute top-[185px] left-[950px]">
          Products
        </a>
        <a href="" className="absolute top-[220px] left-[990px]">
          NewsLetters
        </a>
        <a href="" className="absolute top-[265px] left-[1030px]">
          Guest Book
        </a>
        <a href="" className="absolute top-[310px] left-[1060px]">
          Photo Library
        </a>
        <a href="" className="absolute top-[360px] left-[1080px]">
          Testimonials
        </a>
        <a href="" className="absolute top-[415px] left-[1090px]">
          Healing Help
        </a>
        <a href="" className="absolute top-[465px] left-[1100px]">
          About Us
        </a>
      </div> */}
    </div>
  );
};

export default Main;
