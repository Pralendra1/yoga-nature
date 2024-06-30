import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  return (
    <div className="grid gap-3 font-montserrat">
      <label className="input input-bordered flex items-center gap-2 text-sm">
        <FontAwesomeIcon icon={faUser} className="w-4 h-4 opacity-70" />
        <input type="text" className="grow" placeholder="Username" />
      </label>
      <label className="input input-bordered flex items-center gap-2 text-sm">
        <FontAwesomeIcon icon={faLock} className="w-4 h-4 opacity-70" />
        <input type="password" className="grow" placeholder="Password" />
      </label>
      <a href="#" className="text-sm underline pl-1">
        Use Admin Login
      </a>
      <button className="btn">SignUp</button>
    </div>
  );
};

export default SignUp;
