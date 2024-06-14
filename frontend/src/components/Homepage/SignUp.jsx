import React from "react";

const SignUp = () => {
  return (
    <div className="grid gap-3">
      <label className="input input-bordered flex items-center gap-2 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-3 h-3 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="text" className="grow" placeholder="Email" />
      </label>
      <label className="input input-bordered flex items-center gap-2 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-3 h-3 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input type="text" className="grow" placeholder="Username" />
      </label>
      <label className="input input-bordered flex items-center gap-2 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-3 h-3 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input type="password" className="grow" placeholder="Password" />
      </label>
      <label className="input input-bordered flex items-center gap-2 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-3 h-3 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14.167 2H1.833A.833.833 0 0 0 1 2.833v10.334c0 .46.373.833.833.833h12.334a.833.833 0 0 0 .833-.833V2.833A.833.833 0 0 0 14.167 2ZM1.833 1h12.334C14.76 1 15 1.24 15 1.833v10.334c0 .593-.24.833-.833.833H1.833C1.24 13 1 12.76 1 12.167V1.833C1 1.24 1.24 1 1.833 1ZM3 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM1 6h4v1H1V6Zm6 0h6v1H7V6Zm-3 5.5a.5.5 0 0 1-.5-.5h1a.5.5 0 0 1-.5.5Zm0-2a.5.5 0 0 1-.5-.5h1a.5.5 0 0 1-.5.5Zm0-2a.5.5 0 0 1-.5-.5h1a.5.5 0 0 1-.5.5Z"
            clipRule="evenodd"
          />
        </svg>
        <input type="text" className="grow" placeholder="Country" />
      </label>
      <a href="" className="text-sm underline text-green-400 pl-1">
        Use Admin Login
      </a>
      <button className="btn">SignUp</button>
    </div>
  );
};

export default SignUp;
