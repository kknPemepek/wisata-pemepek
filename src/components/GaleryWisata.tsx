import { useState } from "react";

interface GalleryProps {
  images: string[];
}

const GaleryWisata: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <div>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-36 sm:h-48 group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => openPopup(image)}
          >
            <img
              src={image}
              alt={`Galeri Wisata ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
            className={`relative p-5 rounded-lg max-w-2xl lg:max-w-4xl w-full transform transition-all duration-300 ${
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
              className="w-full max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleryWisata;
