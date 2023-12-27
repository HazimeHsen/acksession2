import Image from "next/image";
import React from "react";

const Capabilities = ({ capabilities }) => {
  return (
    <div className="py-20 px-4 md:px-8">
      <div>
        <div className="flex md:flex-row flex-col justify-between font-bold">
          <div className="text-4xl md:text-5xl text-primary">
            Core Capabilities
          </div>
          <div className="text-2xl md:text-4xl max-w-lg text-start mt-5 md:text-end text-secondary">
            Decades Of Technology Development Experiences For Companies From All
            Over The World.
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {capabilities.map((item, index) => (
              <div key={index}>
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;

const Card = ({ item }) => {
  return (
    <div className="flex md:block text-center md:text-start justify-center flex-col items-center">
      <div className="">
        <Image
          width={300}
          height={200}
          alt={item.title}
          className="hover:scale-110 transition-transform duration-200"
          src={item.image}
        />
      </div>
      <div className="text-xl font-semibold">{item.title}</div>
      <div className="max-w-[300px]">{item.desc}</div>
    </div>
  );
};
