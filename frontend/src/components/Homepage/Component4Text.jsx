import React from "react";

const Component4Text = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 font-title m-3 my-6 p-4 text-center relative">
      <div className="services-header p-2 md:p-4 text-xl md:text-3xl text-start col-span-1 font-playfair">
        Services offered by us
      </div>
      <div className="text-l md:text-xl text-start col-span-2 relative ml-2 md:ml-4 font-montserrat">
        Help me in my journey towards Truth from Untruth..from Darkness to
        Light.. From Mortality to Immor tality..Om .. Peace..Peace..Peace
        <div
          className="absolute left-0 bottom-0 bg-mar transition-width duration-500"
          style={{ width: "60%", height: "4px" }}
        ></div>
      </div>
    </div>
  );
};

export default Component4Text;
