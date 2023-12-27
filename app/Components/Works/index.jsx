import React from "react";
import Carousel from "../Carousel";
import Image from "next/image";

const Works = ({ work }) => {
  return (
    <div className="my-20 bg-primary px-4 h-[120vh] md:h-fit md:px-10 text-white py-14">
      <div>
        <div className="text-4xl md:text-5xl font-bold ">
          Selected
          <span className="text-third ml-2">work.</span>
        </div>
        <div className="text-xl md:max-w-xl mt-5">
          Using cutting-edge technology, agile methodology, and DevOps, we have
          created advanced custom software solutions and mobile applications
          that simplify your customers’ business problems.
        </div>
      </div>
      <div className="max-w-[90%] md:max-w-[800px] mt-10">
        <Carousel>
          {work.map((w) => (
            <div className="flex flex-col md:flex-row md:gap-10" key={w.title}>
              <Image
                width={300}
                height={200}
                alt={w.title}
                className="object-contain w-full md:max-w-xs"
                src={w.image}
              />
              <div className="mt-10">
                <h3 className="text-xl font-bold my-6">{w.title}</h3>
                <p className="max-w-md">{w.desc}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Works;
