import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between font-bold text-white bg-gradient-to-b from-primary to-secondary">
        <div className="flex ml-[135px] text-base pt-[15px] pb-[17px]">
          <img src="contact-us.svg" alt="contact-us" />
          <span className="ms-2">Contact Us</span>
        </div>
        <div className="flex mr-[135px] text-base pt-[15px] pb-[17px]">
          <img src="language.svg" alt="language" />
          <span className="ms-2">Language</span>
        </div>
      </div>
    </>
  );
};

export default Header;
