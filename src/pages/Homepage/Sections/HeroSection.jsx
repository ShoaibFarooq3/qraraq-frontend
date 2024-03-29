import React from "react";
import RegisterCard from "@components/RegisterCard";
import { Button } from "@mui/material";

const HeroSection = () => {
  return (
    <>
      <div
        className="bg-cover bg-center mx-auto flex justify-between"
        style={{ backgroundImage: "url('hero-bg.svg')" }}
      >
        <div className="w-full font-bold md:w-1/3 mb-4 md:mb-0 ml-[135px] mt-[50px]">
          <p className="capitalize font-bold text-xl text-transparent bg-gradient-to-r from-primary from-20% to-secondary to-80% bg-clip-text">
            Making your <br /> world wide trading easy!
          </p>
          <p className="font-base font-medium text-final-grey">
            We are creating a better way to invest in your <br />
            future!
          </p>
          <img className="ml-[150px]" src="spiral.svg" alt="spiral" />
          <Button
            sx={{
              background: "linear-gradient(135deg, #369ac1, #4ec2c2)",
              borderRadius: "22px",
              boxShadow: "none",
              width: "147px",
              color: "white",
              textTransform: "none",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            Get Started
          </Button>
        </div>

        <div className="w-full font-bold md:w-1/3 mb-4 md:mb-0 ">
          <RegisterCard />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
