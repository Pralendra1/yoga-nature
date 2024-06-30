import React from "react";

import yoganaturelogo from "../images/yoganature-logo.png";
import footerimage from "../images/footer4image.jpg";
const Footer = () => {
  const footerStyle = {
    backgroundImage: `url(${footerimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const logoStyle = {
    maxWidth: "100%",
    height: "auto",
  };
  return (
    <footer className="footer p-10 text-[17px] text-mar" style={footerStyle}>
      <aside>
        <img
          src={yoganaturelogo}
          alt="Yoga-Nature Logo"
          className="w-36 h-12 mb-4"
          style={logoStyle}
        />
        <p className="font-playfair text-l">
          Yoga-Nature
          <br />
          Providing yoga mentorship since 1992
        </p>
      </aside>
      <nav className="font-lora">
        <h6 className="footer-title font-montserrat">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="font-lora">
        <h6 className="footer-title font-montserrat">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="font-lora ">
        <h6 className="footer-title font-montserrat">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
