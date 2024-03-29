import React from "react";
import HeroSection from "./Sections/HeroSection";
import AboutUsSection from "./Sections/AboutUsSection";
import WhyChooseUsSection from "./Sections/WhyChooseUsSection";
import MetricsSection from "./Sections/MetricsSection";
import InvestSection from "./Sections/InvestSection";

const Homepage = () => {
  return (
    <div className="my-[60px] ">
      <HeroSection />
      <AboutUsSection />
      {/* <WhyChooseUsSection /> */}
      <MetricsSection />

      <InvestSection />
    </div>
  );
};

export default Homepage;
