import React, { useState } from "react";
import yoganaturelogo from "../images/yoganature-logo.png";
import Login from "./Login";
import SignUp from "./SignUp";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [dropdown, setDropdown] = useState(null);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const logoStyle = {
    height: "32px",
    paddingLeft: "10px",
  };

  const navbarStyle = {
    zIndex: 1000, // Ensure the navbar is on top
    position: "sticky",
    top: 0,
    fontSize: "20px",
  };

  const dropdownMenuStyle = {
    position: "absolute",
    marginTop: "12px",
    zIndex: 1001,
    padding: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
    borderRadius: "6px",
    width: "208px",
  };

  const loginButtonStyle = {
    fontSize: "0.875rem", // Smaller font size
  };

  return (
    <div
      className="navbar font-playfair text-xl bg-heading "
      style={navbarStyle}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content"
            style={dropdownMenuStyle}
          >
            <li
              onMouseEnter={() => handleMouseEnter("yoga")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/yoga/yoga">Yoga</Link>
              {dropdown === "yoga" && (
                <ul className="p-2">
                  <div>
                    <li>
                      <Link to="/yoga/homeopathy">Homeopathy</Link>
                    </li>
                    <li>
                      <Link to="/yoga/naturopathy">Naturopathy</Link>
                    </li>
                    <li>
                      <Link to="/yoga/ayurveda">Ayurveda</Link>
                    </li>
                    <li>
                      <Link to="/yoga/stressmanagement">Stress Management</Link>
                    </li>
                  </div>
                  <div>
                    <li>
                      <Link to="/yoga/asuna">Asuna</Link>
                    </li>
                    <li>
                      <Link to="/yoga/pranayam">Pranayam</Link>
                    </li>
                    <li>
                      <Link to="/yoga/meditation">Meditation</Link>
                    </li>
                    <li>
                      <Link to="/yoga/kriya">Kriya</Link>
                    </li>
                  </div>
                  <div>
                    <li>
                      <Link to="/yoga/fundamentals">Fundamentals</Link>
                    </li>
                    <li>
                      <Link to="/yoga/sacredrituals">Sacred Rituals</Link>
                    </li>
                    <li>
                      <Link to="/yoga/scriptures">Scriptures</Link>
                    </li>
                    <li>
                      <Link to="/yoga/mantras">Mantras</Link>
                    </li>
                  </div>
                </ul>
              )}
            </li>
            <li>
              <a>Yoga Classes</a>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <a>Resources</a>
              {dropdown === "resources" && (
                <ul className="p-2">
                  <div>
                    <li>
                      <Link to="/yoga/homeopathy">Homeopathy</Link>
                    </li>
                    <li>
                      <Link to="/yoga/naturopathy">Naturopathy</Link>
                    </li>
                    <li>
                      <Link to="/yoga/ayurveda">Ayurveda</Link>
                    </li>
                    <li>
                      <Link to="/yoga/stressmanagement">Stress Management</Link>
                    </li>
                  </div>
                  <div>
                    <li>
                      <Link to="/yoga/asuna">Asuna</Link>
                    </li>
                    <li>
                      <Link to="/yoga/pranayam">Pranayam</Link>
                    </li>
                    <li>
                      <Link to="/yoga/meditation">Meditation</Link>
                    </li>
                    <li>
                      <Link to="/yoga/kriya">Kriya</Link>
                    </li>
                  </div>
                  <div>
                    <li>
                      <Link to="/yoga/fundamentals">Fundamentals</Link>
                    </li>
                    <li>
                      <Link to="/yoga/sacredrituals">Sacred Rituals</Link>
                    </li>
                    <li>
                      <Link to="/yoga/scriptures">Scriptures</Link>
                    </li>
                    <li>
                      <Link to="/yoga/mantras">Mantras</Link>
                    </li>
                  </div>
                </ul>
              )}
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Donate</a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img src={yoganaturelogo} alt="logo" style={logoStyle} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li
            onMouseEnter={() => handleMouseEnter("yoga")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/yoga/yoga">Yoga</Link>
            {dropdown === "yoga" && (
              <ul
                className="p-2 flex bg-accent rounded-lg"
                style={{ position: "relative" }}
              >
                <div>
                  <li>
                    <Link to="/yoga/homeopathy">Homeopathy</Link>
                  </li>
                  <li>
                    <Link to="/yoga/naturopathy">Naturopathy</Link>
                  </li>
                  <li>
                    <Link to="/yoga/ayurveda">Ayurveda</Link>
                  </li>
                  <li>
                    <Link to="/yoga/stressmanagement">Stress Management</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link to="/yoga/asuna">Asuna</Link>
                  </li>
                  <li>
                    <Link to="/yoga/pranayam">Pranayam</Link>
                  </li>
                  <li>
                    <Link to="/yoga/meditation">Meditation</Link>
                  </li>
                  <li>
                    <Link to="/yoga/kriya">Kriya</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link to="/yoga/fundamentals">Fundamentals</Link>
                  </li>
                  <li>
                    <Link to="/yoga/sacredrituals">Sacred Rituals</Link>
                  </li>
                  <li>
                    <Link to="/yoga/scriptures">Scriptures</Link>
                  </li>
                  <li>
                    <Link to="/yoga/mantras">Mantras</Link>
                  </li>
                </div>
              </ul>
            )}
          </li>
          <li>
            <a>Yoga Classes</a>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <a>Resources</a>
            {dropdown === "resources" && (
              <ul
                className="p-2 flex bg-accent rounded-lg"
                style={{ position: "relative" }}
              >
                <div>
                  <li>
                    <a>Image Content</a>
                  </li>
                  <li>
                    <a>Video Content</a>
                  </li>
                </div>
                <div>
                  <li>
                    <a>Blogs</a>
                  </li>
                  <li>
                    <a>News</a>
                  </li>
                </div>
                <div>
                  <li>
                    <a>Programs</a>
                  </li>
                  <li>
                    <a>Publications</a>
                  </li>
                </div>
              </ul>
            )}
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Donate</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {/* Open modal */}
        <button
          className="btn text-sm bg-offwhite text-subheading" // Smaller button
          style={loginButtonStyle}
          onClick={() => document.getElementById("auth_modal").showModal()}
        >
          {isLogin ? "Login" : "SignUp"}
        </button>
        <dialog id="auth_modal" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
            </form>
            <h3 className="font-small text-lg">
              {isLogin ? "Login" : "SignUp"}
            </h3>
            <div className="py-4">{isLogin ? <Login /> : <SignUp />}</div>
            <button onClick={toggleForm} className="btn mt-1 ">
              {isLogin ? "Switch to SignUp" : "Switch to Login"}
            </button>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Navbar;
