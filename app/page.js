import Hero from "./Components/Hero";
import History from "./Components/History";
import Slideshow from "./Components/Slideshow/Slideshow";
import WorkedWith from "./Components/WorkedWith";

const images = [
  "/slideshow/slide-1.webp",
  "/slideshow/slide-2.webp",
  "/slideshow/slide-3.webp",
  "/slideshow/slide-4.webp",
  "/slideshow/slide-5.webp",
  "/slideshow/slide-6.webp",
];

const logos = [
  "/companies/1.webp",
  "/companies/2.webp",
  "/companies/3.webp",
  "/companies/4.webp",
  "/companies/5.webp",
  "/companies/6.webp",
  "/companies/7.webp",
  "/companies/8.webp",
  "/companies/9.webp",
  "/companies/10.webp",
];

export default function Home() {
  return (
    <>
      <Hero />
      <Slideshow
        className="max-w-[500px] max-h-[300px] w-full h-full "
        images={images}
      />
      <History />
      <WorkedWith logos={logos} />
    </>
  );
}
