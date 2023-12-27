import React from "react";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="md:pt-10 flex justify-center items-center h-screen text-center flex-col gap-5 md:gap-10 w-full px-4 md:px-10">
      <div className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold text-primary capitalize max-w-4xl">
        Leading <span className="text-secondary">web & mobile</span> application
        development company
      </div>
      <div className="text-gray max-w-xl text-sm md:text-lg font-semibold">
        We specialize in offering comprehensive web and mobile application
        development services to cater to the unique requirements of both budding
        startups and established enterprises.
      </div>
      <div className="flex md:flex-row flex-col w-full md:w-1/2 gap-4 items-center">
        <div className="w-full">
          <Button text="Get free quote" Icon={FaArrowRight} />
        </div>
        <div className="w-full">
          <Button text="Join Us" outline />
        </div>
      </div>
    </div>
  );
};

export default Hero;
