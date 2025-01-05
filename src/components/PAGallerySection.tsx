import { useState } from "react";
import pa1 from "../assets/pindahAlam/pa1.jpeg";
import pa2 from "../assets/pindahAlam/pa2.jpeg";
import pa3 from "../assets/pindahAlam/pa3.jpeg";
import pa4 from "../assets/pindahAlam/pa4.jpeg";
import pa5 from "../assets/pindahAlam/pa5.jpeg";

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Gallery data
  const gallery = [
    { id: 1, image: pa1 },
    { id: 2, image: pa2 },
    { id: 3, image: pa3 },
    { id: 4, image: pa4 },
    { id: 5, image: pa5 },
  ];

  // Open popup with selected image
  const openPopup = (image: string) => {
    setSelectedImage(image);
    setTimeout(() => setIsVisible(true), 10); // Ensure visibility class applies after render
  };

  // Close popup
  const closePopup = () => {
    setIsVisible(false);
    setTimeout(() => setSelectedImage(null), 300); // Wait for transition to end
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="relative h-36 sm:h-auto group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => openPopup(item.image)}
          >
            <img
              src={item.image}
              alt={`Gallery Image ${item.id}`}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closePopup}
        >
          <div
            className={`relative  p-5 rounded-lg max-w-4xl w-full transform transition-all duration-300 ${
              isVisible ? "scale-100" : "scale-50"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white h-10 w-10 p-2 bg-green-800 rounded-full hover:bg-green-900 transition duration-200"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Selected Gallery Image"
              className="w-full max-h-[600px] md:max-h-[800px] rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
