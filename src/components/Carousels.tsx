import { useState, useEffect } from "react";

const Carousels = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 0,
      src: "https://res.cloudinary.com/dbuhlpg8k/image/upload/v1735713459/koes-nadi-WuhG3sU8MPg-unsplash_nmmt6g.jpg", // Beautiful mountain landscape
      alt: "Slide 1",
    },
    {
      id: 1,
      src: "https://res.cloudinary.com/dbuhlpg8k/image/upload/v1735715527/steven-kamenar-MMJx78V7xS8-unsplash_aabycx.jpg", // Ocean view
      alt: "Slide 2",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dbuhlpg8k/image/upload/v1735713902/dave-hoefler-a3e7yEtQxJs-unsplash_zspcms.jpg", // Forest trail
      alt: "Slide 3",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dbuhlpg8k/image/upload/v1735713814/joshua-sukoff-nPfU-Uen0mk-unsplash_tvkkkl.jpg", // Desert landscape
      alt: "Slide 4",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dbuhlpg8k/image/upload/v1735716104/everett-mcintire-BPCsppbNRMI-unsplash_mjtagp.jpg", // Sunset over water
      alt: "Slide 5",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dbuhlpg8k/image/upload/v1735714860/rural-explorer-oWS_3i0Y5sI-unsplash_qalvma.jpg", // Sunset over water
      alt: "Slide 6",
    },
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
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              className="absolute block w-full h-full  object-cover"
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
