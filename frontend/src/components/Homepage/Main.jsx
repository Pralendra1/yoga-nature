import React, { useState } from "react";
import mainImg from "../images/Mainimg.jpg";
import gif from "../images/gif.gif";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Main = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="relative w-full h-auto flex flex-col lg:flex-row bg-offwhite">
      <div
        className={`drawer lg:drawer-open w-full lg:w-1/5 h-auto ${
          drawerOpen ? "open" : ""
        }`}
      >
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          checked={drawerOpen}
          onChange={toggleDrawer}
        />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn drawer-button bg-heading rounded-none border-none w-full lg:hidden z-50"
          >
            <FiMenu />
          </label>
        </div>
        <div className="drawer-side z-50 lg:h-auto">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-heading min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li className="mt-1">
              <Link
                to="/events"
                className="text-l hover:bg-accent text-subheading font-playfair"
              >
                Events
              </Link>
            </li>
            <li className="mt-1">
              <Link
                to="/"
                className="text-l hover:bg-accent text-subheading font-playfair"
              >
                Products
              </Link>
            </li>
            <li className="mt-1">
              <Link
                to="/"
                className="text-l hover:bg-accent text-subheading font-playfair"
              >
                Upcoming Classes
              </Link>
            </li>
            <li className="mt-1">
              <Link
                to="/"
                className="text-l hover:bg-accent text-subheading font-playfair"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-4/5 relative flex">
        <img
          src={mainImg}
          alt="Example"
          className="w-full h-auto object-contain"
        />
        <div className="absolute inset-0 "></div>
        <img
          src={gif}
          alt=""
          className="absolute top-2/3 lg:top-[340px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[150px] m-0.5 sm:h-[180px] md:m-1 lg:m-2 lg:h-[320px] md:h-[300px]"
        />
      </div>
    </div>
  );
};

export default Main;
