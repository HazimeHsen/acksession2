"use client";
import React, { useEffect, useRef } from "react";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import Animation from "../Animation";
const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <div className="md:pt-10 flex justify-center items-center h-screen text-center flex-col gap-5 md:gap-10 w-full px-4 md:px-10">
      <Animation
        startInView={false}
        animationType="fade-bottom"
        duration={0.3}
        delay={0.3}
        className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold text-primary capitalize max-w-4xl">
        Leading <span className="text-secondary">web & mobile</span> application
        development company
      </Animation>
      <Animation
        startInView={false}
        animationType="fade-bottom"
        duration={0.3}
        delay={0.6}
        className="text-gray max-w-xl text-sm md:text-lg font-semibold">
        We specialize in offering comprehensive web and mobile application
        development services to cater to the unique requirements of both budding
        startups and established enterprises.
      </Animation>
      <div className="flex md:flex-row flex-col w-full md:w-1/2 gap-4 items-center">
        <Animation
          startInView={false}
          animationType="fade-bottom"
          duration={0.3}
          delay={0.9}
          className="w-full">
          <Button text="Get free quote" Icon={FaArrowRight} />
        </Animation>
      </div>
    </div>
  );
};

export default Hero;
