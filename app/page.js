import Hero from "./Components/Hero";
import Slideshow from "./Components/Slideshow/Slideshow";

const images = [
  "/slide-1.webp",
  "/slide-2.webp",
  "/slide-3.webp",
  "/slide-4.webp",
  "/slide-5.webp",
  "/slide-6.webp",
];

export default function Home() {
  return (
    <>
      <Hero />
      <Slideshow images={images} />
    </>
  );
}
