import React, { useEffect } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import Heading from "./Heading";

const experiences = [
  {
    title: "Talk to us",
    content:
      "Our solutions expert along with our Director of Technology will handpick developers who are the best fit for your requirements, saving you time and energy.",
  },
  {
    title: "Assess the candidates",
    content:
      "We select our developers through a five-stage screening process. With an average of five years of industry experience, our developers are ready to start working on projects immediately.",
  },
  {
    title: "Begin work ASAP",
    content:
      "With immense confidence in our developers and the accuracy of our recommendations, we are happy to offer you a free 1-week trial.",
  },
];

const ExperienceSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const lineAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <Heading>
        <div className="text-4xl font-bold text-center max-w-xl mx-auto mb-10 md:text-5xl">
          Hire your
          <span className="text-primary mx-2">software development</span>
          team in 3 easy
          <span className="text-primary ml-2">steps </span>
        </div>
      </Heading>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={lineAnimation}
        transition={{ duration: 0.3 }}
        className="pl-7 sm:pl-0 before:ml-7 overflow-hidden space-y-14 w-full lg:max-w-3xl sm:mx-auto py-20 relative before:absolute before:inset-0 sm:before:mx-auto before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary before:to-transparent">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

const ExperienceCard = ({ experience, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const iconAnimation = {
    hidden: { scale: 0.4 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  const slideAnimation = {
    hidden: { opacity: 0, x: "-100px" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: "100px" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };
  const isMobile = useMediaQuery({ maxWidth: 639 });

  return (
    <div
      className={`relative sm:flex items-center text-black px-1 mb-3 ${
        index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
      }`}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={iconAnimation}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex absolute sm:mx-auto -ml-5 inset-0 ring-4 ring-primary my-auto items-center transform -translate-y-1/2 justify-center w-10 h-10 rounded-full font-semibold text-lg bg-bgWhite text-black shadow md:order-1">
        {index + 1}
      </motion.div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={
          index % 2 === 0 && !isMobile ? slideAnimation : slideFromRight
        }
        transition={{ duration: 0.5 }}
        className="bg-slate-200 ring-primary ring-2 sm:w-64 ml-16 sm:ml-0 md:w-80 px-4 py-2 rounded-md relative">
        {index % 2 === 0 && (
          <div className="absolute right-[99%] sm:!-right-4 top-1/2 transform -translate-y-1/2">
            {/* Arrow for even index (on the left) */}
            <div className="arrow-left"></div>
          </div>
        )}
        {index % 2 !== 0 && (
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
            {/* Arrow for odd index (on the right) */}
            <div className="arrow-right"></div>
          </div>
        )}
        <div className="text-slate-500 flex flex-col">
          <span className="text-black font-bold mb-1">{experience.title}</span>{" "}
          <span className="text-sm">{experience.content}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceSection;
