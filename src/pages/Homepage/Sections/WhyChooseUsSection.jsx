import React from "react";

const WhyChooseUsSection = () => {
  return (
    <>
      {/* <div className="mt-[160px]">
        <p className=" text-center capitalize font-bold text-custom text-transparent bg-gradient-to-r from-primary from-20% to-secondary to-80% bg-clip-text">
          Why Choose Us
        </p>

        <div className="bg-white-smoke rounded-[22px] mx-[96px] h-[253px]">
          <p>test</p>
        </div>
      </div> */}
      <div className="mt-[160px]">
        <p className=" text-center capitalize font-bold text-custom text-transparent bg-gradient-to-r from-primary from-20% to-secondary to-80% bg-clip-text">
          Why Choose Us
        </p>
        <div className="relative ">
          {/* Grey div */}
          <div className="bg-white-smoke h-40 mx-[96px]"></div>

          {/* Card */}
          <div className="absolute bottom-0 left-0 right-0 bg-white h-20 mx-4 mb-4 rounded-lg shadow-md transform translate-y-1/2">
            {/* Card content */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsSection;
