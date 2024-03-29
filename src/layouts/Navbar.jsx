import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between px-20 py-4 shadow-xl">
        <img src="qrarak-logo-nav.svg" />
        <div className="flex-grow font-bold text-center ">
          <a href="#" className="px-4 py-2 hover:text-primary ">
            Home
          </a>
          <a href="#" className="px-4 py-2 hover:text-primary">
            About Us
          </a>
          <a href="#" className="px-4 py-2 hover:text-primary">
            Partners
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
