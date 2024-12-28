import { useState, useEffect } from "react";
import asset1 from "../assets/asset1.jpg";

const Carousels = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { id: 0, src: asset1, alt: "Slide 1" },
    { id: 1, src: "/docs/images/carousel/carousel-2.svg", alt: "Slide 2" },
    { id: 2, src: "/docs/images/carousel/carousel-3.svg", alt: "Slide 3" },
    { id: 3, src: "/docs/images/carousel/carousel-4.svg", alt: "Slide 4" },
    { id: 4, src: "/docs/images/carousel/carousel-5.svg", alt: "Slide 5" },
  ];

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <div className="relative w-full bg-gray-100">
      {/* Carousel Wrapper */}
      <div className="relative h-64 overflow-hidden  sm:h-96 lg:h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              className="absolute block w-full h-full object-cover"
              alt={slide.alt}
            />
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute z-30 flex items-center justify-center space-x-2 bottom-4 left-1/2 transform -translate-x-1/2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              index === activeIndex ? "bg-green-600" : "bg-gray-400"
            } hover:bg-green-500 transition-all duration-300`}
            aria-current={index === activeIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousels;
