// Testemonials.js
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Heading from "../Heading";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    role: "Web Developer",
    comment: "Great experience using this slider component!",
    image: "https://placekitten.com/100/100", // Replace with your image URL
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UX Designer",
    comment: "Easy to implement and looks fantastic!",
    image: "https://placekitten.com/100/101",
  },
  {
    id: 3,
    name: "Bob Johnson",
    role: "Product Manager",
    comment: "Awesome slider component with added images!",
    image: "https://placekitten.com/100/102",
  },
  {
    id: 4,
    name: "Jane Smith",
    role: "UX Designer",
    comment: "Easy to implement and looks fantastic!",
    image: "https://placekitten.com/100/101",
  },
  {
    id: 5,
    name: "Bob Johnson",
    role: "Product Manager",
    comment: "Awesome slider component with added images!",
    image: "https://placekitten.com/100/102",
  },
  // Add more testimonials as needed
];

const Testemonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    controls.start((i) => ({
      ...variants[i],
      transition: { duration: 0.5 },
    }));
  }, [controls]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <div
      id="Testimonials"
      className="relative overflow-hidden md:mx-10 my-20 mx-4">
      <Heading>
        <div className="text-4xl font-bold text-center mb-10 md:text-5xl">
          Testimon<span className="text-primary underline">ials</span>
        </div>
      </Heading>
      <FaChevronLeft
        className="text-2xl absolute left-0 top-1/2 z-20 cursor-pointer"
        onClick={prevSlide}
      />
      <FaChevronRight
        className="text-2xl absolute right-0 top-1/2 z-20 cursor-pointer"
        onClick={nextSlide}
      />
      <div className="flex">
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          variants={variants}
          transition={{ duration: 0.5 }}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x > 400 || velocity.x > 600) {
              nextSlide();
            } else if (offset.x < -400 || velocity.x < -600) {
              prevSlide();
            }
          }}
          className="w-full">
          <div className="p-2 text-center">
            <img
              src={testimonialsData[currentIndex].image}
              alt={testimonialsData[currentIndex].name}
              className="mx-auto mt-0 mb-4 rounded-full"
              style={{ width: "100px", height: "100px" }}
            />
            <h2 className="text-xl font-bold">
              {testimonialsData[currentIndex].name}
            </h2>
            <p className="text-gray-600">
              {testimonialsData[currentIndex].role}
            </p>
            <p className="mt-4">{testimonialsData[currentIndex].comment}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testemonials;
