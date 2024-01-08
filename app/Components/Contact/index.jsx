import React from "react";
import Image from "next/image";
import Animation from "../Animation";

const locations = {
  name: "Location 1",
  imageSrc: "/image/location.webp",
  address: "123 Main Street",
  city: "City, State ZIP",
};
const Location = () => {
  return (
    <Animation
      animationType="fade-bottom"
      className="text-gray-600 md:mb-0 my-10 body-font relative">
      <div id="Contact" className="flex items-center px-5 flex-wrap-reverse">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          className="mt-5 md:w-[50%] w-280px  h-[250px] md:h-[500px]"
          src="https://maps.google.com/maps?width=100%&height=400&hl=en&q=lebanon,Beirut,Rawcheh Rocks+(Ruby)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
        <div className="z-10 w-full md:px-5 md:w-[50%] flex">
          <div className="bg-white rounded-lg p-8 md:mt-0 mt-5 flex flex-col md:ml-auto w-full relative md:shadow-md">
            <Animation animationType="fade-bottom" className="mb-5">
              <div className="pb-2 text-pretty text-3xl lg:text-4xl font-bold text-center text-gray-800 md:text-5xl">
                Contact
                <span className="text-primary underline ml-2">Us</span>
              </div>
            </Animation>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-primary/80 focus:ring-2 focus:ring-primary/40 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-primary/80 focus:ring-2 focus:ring-primary/40 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="py-2 px-4 rounded-lg text-white font-semibold uppercase bg-primary/80 text-customColor1 hover:bg-primary/70 transition-all duration-300 ">
              Send
            </button>
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default Location;
