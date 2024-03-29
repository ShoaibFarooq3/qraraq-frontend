import React from "react";
import Button from "@mui/material/Button";

const AboutUsSection = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-[135px] mx-[100px]">
        <div className="w-full font-bold md:w-1/2 mb-4 md:mb-0 mx-2 lg:mx-4 xl:mx-11">
          <img src="about-us-section.svg" />
        </div>

        <div className="w-full font-bold md:w-1/2 mb-4 md:mb-0 mx-2 lg:mx-4 xl:mx-11">
          <p className="text-final-grey font-medium font-base">About us</p>
          <p className="capitalize font-bold text-custom text-transparent bg-gradient-to-r from-primary from-20% to-secondary to-80% bg-clip-text">
            Maximum profit & secure trading platform
          </p>
          <p className="font-normal text-final-grey">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            ridiculus mus
          </p>
          <div className="flex mt-8">
            <div className="w-[249px] p-4 border border-light-grey border-2 rounded-[15px]">
              <div className="w-[45px] h-[44px] bg-primary rounded-[6px]"></div>
              <p className="text-base font-medium mt-[16px]">
                Secure Transaction
              </p>
              <p className="text-sm text-final-grey font-medium">
                penmag nascetur ridiculus mus penmag nascetur lorem ipsum
                ridiculus mus..
              </p>
            </div>

            <div className="w-[249px] p-4 border border-light-grey border-2 rounded-[15px] ml-8">
              <div className="w-[45px] h-[44px] bg-primary rounded-[6px]"></div>
              <p className="text-base font-medium mt-[16px]">Global Service</p>
              <p className="text-sm text-final-grey font-medium">
                penmag nascetur ridiculus mus penmag nascetur lorem ipsum
                ridiculus mus..
              </p>
            </div>
          </div>

          <Button
            sx={{
              background: "linear-gradient(135deg, #369ac1, #4ec2c2)",
              borderRadius: "22px",
              boxShadow: "none",
              width: "127px",
              color: "white",
              textTransform: "none",
              fontSize: "18px",
              fontWeight: 500,
              marginTop: "31px",
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </>
  );
};

export default AboutUsSection;
