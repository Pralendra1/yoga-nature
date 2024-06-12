import React from "react";
import yoganaturelogo from "../images/yoganature-logo.png";

const Navbar = () => {
  const logoStyle = {
    height: "32px",
    paddingLeft: "10px",
  };

  const dropdownMenuStyle = {
    marginTop: "12px",
    zIndex: 1,
    padding: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
    borderRadius: "6px",
    width: "208px",
  };

  return (
    <div className="navbar bg-base-100">
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
            <li>
              <a>Yoga</a>
              <ul className="p-2">
                <li>
                  <a>Homeopathy</a>
                </li>
                <li>
                  <a>Naturopathy</a>
                </li>
                <li>
                  <a>Vedic Heritage</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>Courses</a>
            </li>
            <li>
              <a>Resources</a>
              <ul className="p-2">
                <li>
                  <a>Image Content</a>
                </li>
                <li>
                  <a>Video Content</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Blogs/News</a>
              <ul className="p-2">
                <li>
                  <a>Media</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Programs</a>
            </li>
            <li>
              <a>Publications</a>
            </li>
            <li>
              <a>Yoga Classes</a>
            </li>
          </ul>
        </div>
        <img src={yoganaturelogo} alt="logo" style={logoStyle} />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Yoga</summary>
              <ul className="p-2">
                <li>
                  <a>Homeopathy</a>
                </li>
                <li>
                  <a>Naturopathy</a>
                </li>
                <li>
                  <a>Vedic Heritage</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>Courses</a>
          </li>
          <li>
            <details>
              <summary>Resources</summary>
              <ul className="p-2">
                <li>
                  <a>Image Content</a>
                </li>
                <li>
                  <a>Video Content</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Programs</a>
          </li>
          <li>
            <details>
              <summary>Blogs / News</summary>
              <ul className="p-2">
                <li>
                  <a>Media</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Publications</a>
          </li>
          <li>
            <a>Classes</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn hover:bg-green-400 hover:border-none hover:text-white">
          Call Now
        </a>
      </div>
    </div>
  );
};

export default Navbar;
