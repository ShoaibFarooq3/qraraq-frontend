import React from "react";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <>
      <footer className="text-white bg-gradient-to-b from-primary from-20% to-secondary to-80%">
        <div className="container mx-auto flex flex-wrap justify-center items-center py-8 px-[105px]">
          <div className="w-full font-bold md:w-1/3 mb-4 md:mb-0 ">
            <p className="text-base">Subscribe to Our Newsletter</p>
            <div className="flex mt-2">
              <input />
              <Button variant="contained">Subscribe</Button>
            </div>
            <img className="mt-[28px]" src="qraraq-logo-footer.svg" />
            <p className="mt-[28px] capitalize text-lg">
              Making your <br /> world wide trading easy!
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0 capitalize ">
            <div className="mt-[158px]">
              <p className="font-bold">Quick Links</p>
            </div>

            <div className="font-semibold text-base mt-[29px]">
              <a href="#">
                {" "}
                <p>About Us</p>
              </a>
              <a href="#">
                <p>Our Partners</p>
              </a>

              <a href="#">
                <p>Contact Us</p>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0 capitalize">
            <div className="flex flex-col items-end mt-[89px]">
              {" "}
              <div className="flex">
                <Button variant="contained">Register Now</Button>
                <img className="ml-[26px]" src="top-arrow.svg" />
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="mt-[15px] text-right">
                {" "}
                <img src="appstore.svg" />
              </div>
              <div className="mt-[13px] text-right">
                {" "}
                <img src="googleplay.svg" />
              </div>
            </div>
          </div>

          {/* <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Column 2</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Column 3</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div> */}
        </div>
        <div className="bg-final-grey flex justify-between font-medium p-4 capitalize">
          <div className="ml-[105px]">
            <img src="socials-group.svg" />
          </div>
          <div className="mr-[20px]">
            <p>
              &copy; Copyright Qraraq {new Date().getFullYear()}. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
