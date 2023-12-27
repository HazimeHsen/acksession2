"use client";
import React from "react";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";
import useAnimationHook from "@/app/hooks/useAnimation";
import { motion } from "framer-motion";
const Hero = () => {
  const { controls: controls1, ref: ref1 } = useAnimationHook();
  const { controls: controls2, ref: ref2 } = useAnimationHook();
  const { controls: controls3, ref: ref3 } = useAnimationHook();
  const { controls: controls4, ref: ref4 } = useAnimationHook();

  return (
    <div className="md:pt-10 flex justify-center items-center h-screen text-center flex-col gap-5 md:gap-10 w-full px-4 md:px-10">
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={controls1}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.3 }}
        className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold text-primary capitalize max-w-4xl">
        Leading <span className="text-secondary">web & mobile</span> application
        development company
      </motion.div>
      <motion.div
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-gray max-w-xl text-sm md:text-lg font-semibold">
        We specialize in offering comprehensive web and mobile application
        development services to cater to the unique requirements of both budding
        startups and established enterprises.
      </motion.div>
      <div className="flex md:flex-row flex-col w-full md:w-1/2 gap-4 items-center">
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={controls3}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="w-full">
          <Button text="Get free quote" Icon={FaArrowRight} />
        </motion.div>
        <motion.div
          ref={ref4}
          initial="hidden"
          animate={controls4}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.3, delay: 0.9 }}
          className="w-full">
          <Button text="Join Us" outline />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
