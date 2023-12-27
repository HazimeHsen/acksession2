import Hero from "./Components/Hero";
import History from "./Components/History";
import Slideshow from "./Components/Slideshow/Slideshow";

const images = [
  "/slideshow/slide-1.webp",
  "/slideshow/slide-2.webp",
  "/slideshow/slide-3.webp",
  "/slideshow/slide-4.webp",
  "/slideshow/slide-5.webp",
  "/slideshow/slide-6.webp",
];

export default function Home() {
  return (
    <>
      <Hero />
      <Slideshow images={images} />
      <History />
    </>
  );
}
