import React from "react";

const MetricsSection = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-white-smoke mt-[120px] h-[173px] px-[118px]">
        <div className="h-[345px] w-[345px] bg-white rounded-full flex flex-col justify-center items-center">
          <p className="capitalize font-bold text-lg text-transparent bg-gradient-to-r from-primary from-20% to-secondary to-80% bg-clip-text">
            2556+
          </p>

          <p className="text-center uppercase font-semibold font-base text-final-grey ">
            Registered Users
          </p>
        </div>
        <div className="h-[345px] w-[345px] bg-white rounded-full flex flex-col justify-center items-center">
          <p className="capitalize font-bold text-lg text-transparent bg-gradient-to-r from-primary from-20% to-secondary to-80% bg-clip-text">
            178+
          </p>

          <p className="text-center uppercase font-semibold font-base text-final-grey">
            Countries Supported
          </p>
        </div>
        <div className="h-[345px] w-[345px] bg-white rounded-full flex flex-col justify-center items-center">
          <p className="capitalize font-bold text-lg text-transparent bg-gradient-to-r from-primary from-20% to-secondary to-80% bg-clip-text">
            2100+
          </p>

          <p className="text-center uppercase font-semibold font-base text-final-grey">
            Active Investors
          </p>
        </div>
      </div>
    </>
  );
};

export default MetricsSection;
