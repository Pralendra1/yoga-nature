import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faLock,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <div className="grid gap-3 font-montserrat">
      <label className="input input-bordered flex items-center gap-2 text-sm">
        <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 opacity-70" />
        <input type="text" className="grow" placeholder="Email" />
      </label>
      <label className="input input-bordered flex items-center gap-2 text-sm">
        <FontAwesomeIcon icon={faUser} className="w-4 h-4 opacity-70" />
        <input type="text" className="grow" placeholder="Username" />
      </label>
      <label className="input input-bordered flex items-center gap-2 text-sm">
        <FontAwesomeIcon icon={faLock} className="w-4 h-4 opacity-70" />
        <input type="password" className="grow" placeholder="Password" />
      </label>
      <label className="input input-bordered flex items-center gap-2 text-sm">
        <FontAwesomeIcon icon={faGlobe} className="w-4 h-4 opacity-70" />
        <input type="text" className="grow" placeholder="Country" />
      </label>
      <button className="btn border border-none">Login</button>
    </div>
  );
};

export default Login;
