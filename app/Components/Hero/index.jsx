import React from "react";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";
import "./style.css"; // Import the CSS file for your styles

const Hero = () => {
  return (
    <div className="hero-container md:pt-10 flex justify-center items-center h-screen text-center flex-col gap-5 md:gap-10 w-full px-4 md:px-10">
      <div className="fade-in-bottom text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold text-primary capitalize max-w-4xl">
        Crafting <span className="text-secondary">Software Solutions</span> for your business

      </div>
      <div className="fade-in-bottom text-gray max-w-xl text-sm md:text-lg font-semibold">
      Delivering tailored web and mobile development solutions that precisely meet the needs of startups and enterprises alike.
      </div>
      <div className="fade-in-bottom flex md:flex-row flex-col w-full md:w-1/2 gap-4 items-center">
        <div className="w-full">
          <Button text="Get free quote" Icon={FaArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
