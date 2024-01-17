"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Card from "./Card";
import useAnimationHook from "@/app/hooks/useAnimation.js";
const WhatWeDo = () => {
  const data = [
    {
      title: "Start with Confidence",
      text: "Embarking on your crypto journey can be daunting, but we're here to simplify the process.",

      image: "/WhatWeDo/1.gif",
    },
    {
      title: "Choose Wisely",
      text: "With so many options in the crypto space, finding what suits you best is key.",

      image: "/WhatWeDo/2.gif",
    },
    {
      title: "Optimize Your Path",
      text: "The crypto landscape is ever-evolving, and we're here to help you stay ahead.",

      image: "/WhatWeDo/3.gif",
    },
    {
      title: "Fundamental Analysis",
      text: "Our team includes experienced fundamental analysts who offer valuable insights into the underlying factors that drive the crypto market.",

      image: "/WhatWeDo/4.gif",
    },
  ];

  const { controls, ref } = useAnimationHook();

  return (
    <motion.div
      id="Expertise"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="px-5">
      <>
        <div className="w-full flex justify-center mt-10 py-5">
          <div className="w-full">
            <h1 className="font-bold text-center text-4xl mb-4">
              Why
              <span className="text-primary underline ml-2">Choose Us?</span>
            </h1>
            <p
              className={`text-center max-w-lg mx-auto text-sm text-gray-600 mb-5`}>
              
            </p>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {data.map((info) => (
                  <Card key={info.image} info={info} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    </motion.div>
  );
};

export default WhatWeDo;
