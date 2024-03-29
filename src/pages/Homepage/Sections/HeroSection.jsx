import React from "react";
import PrimaryButton from "@components/PrimaryButton";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-64"
      style={{ backgroundImage: "url('hero-bg.svg')" }}
    >
      <div className="">
        <p className="capitalize font-bold text-xl text-transparent bg-gradient-to-r  from-primary from-20% to-secondary to-80% bg-clip-text">
          Making your world wide trading easy!
        </p>
        <p className="font-base font-medium text-final-grey">
          We are creating a better way to invest in your future
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
