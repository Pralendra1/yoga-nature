import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const FloatingSocialWidget = () => {
  return (
    <div className="fixed top-40 right-2 pb-2 bg-black bg-opacity-20 rounded-xl flex flex-col space-y-2 z-50">
      <a
        href="https://www.facebook.com/theyoganature"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-offwhite bg-opacity-80 p-2 rounded-2xl m-2 mb-0 flex justify-center items-center"
      >
        <FaFacebook className="text-xl text-subheading" />
      </a>
      <a
        href="https://www.linkedin.com/in/sachin-deshmukh-454343"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-offwhite bg-opacity-80 p-2 rounded-2xl m-2 flex justify-center items-center"
      >
        <FaLinkedin className="text-xl text-subheading" />
      </a>
      <a
        href="https://www.youtube.com/user/TheYogaNature"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-offwhite bg-opacity-80 p-2 rounded-2xl m-2 flex justify-center items-center"
      >
        <FaYoutube className="text-xl text-subheading" />
      </a>
      <a
        href="https://www.pinterest.com/dr_sachin"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-offwhite bg-opacity-80 p-2 rounded-2xl m-2 flex justify-center items-center"
      >
        <FaPinterest className="text-xl text-subheading" />
      </a>
      <a
        href="https://wa.me/14088054090"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-offwhite bg-opacity-80 p-2 rounded-2xl m-2 flex justify-center items-center"
      >
        <IoLogoWhatsapp className="text-xl text-subheading" />
      </a>
      <a
        href="mailto:dr_sachin@hotmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-offwhite bg-opacity-80 p-2 rounded-2xl m-2 flex justify-center items-center"
      >
        <IoMail className="text-xl text-subheading" />
      </a>
      <a
        href="tel:+14088054090"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-offwhite bg-opacity-80 p-2 rounded-2xl m-2 flex justify-center items-center"
      >
        <FaPhoneAlt className="text-xl text-subheading" />
      </a>
    </div>
  );
};

export default FloatingSocialWidget;
