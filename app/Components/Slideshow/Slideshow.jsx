import Image from "next/image";
import "./style.css";

export default function Slideshow({ images }) {
  const repeatedImages = [...images, ...images, ...images];

  return (
    <div className="overflow-hidden pb-10">
      <div className="flex">
        <div className="ml-4 flex justify-center z-0 gap-4 logos-slide-container">
          {repeatedImages.map((image, i) => (
            <div key={i} className="logos-slide">
              <div className="w-full">
                <div className="flex flex-col items-center justify-between w-full ">
                  <h5 className="">
                    <Image
                      alt="profile"
                      className="max-h-[200px] max-w-[300px] md:max-w-[500px] md:max-h-[400px] object-contain "
                      width={500}
                      height={300}
                      objectFit="contain"
                      src={image}
                    />
                  </h5>
                </div>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
}
