import { useState } from "react";

interface Package {
  id: number;
  title: string;
  image: string[]; // Array gambar
}

interface PaketWisataProps {
  packages: Package[]; // Properti untuk daftar paket wisata
}

const PaketWisata: React.FC<PaketWisataProps> = ({ packages }) => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const openPopup = (pkg: Package) => {
    setSelectedPackage(pkg);
    setTimeout(() => setIsVisible(true), 10); // Memastikan animasi berjalan
  };

  const closePopup = () => {
    setIsVisible(false);
    setTimeout(() => setSelectedPackage(null), 300); // Menghapus modal setelah transisi selesai
  };

  return (
    <>
      {/* Grid Paket Liburan */}
      <div className=" ">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => openPopup(pkg)}
            >
              <figure>
                <img
                  src={pkg.image[0]} // Menggunakan gambar pertama dari array
                  alt={pkg.title}
                  className="w-full h-44 md:h-56 lg:h-64 object-cover"
                />
              </figure>
              <div className="p-4">
                <h2 className="font-semibold text-center text-green-400 text-base md:text-lg">
                  {pkg.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail Paket */}
      {selectedPackage && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closePopup}
        >
          <div
            className={`relative p-5 rounded-lg max-w-xl w-full transform transition-transform duration-300 ${
              isVisible ? "scale-100" : "scale-50"
            }`}
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white h-10 w-10 p-2 bg-green-800 rounded-full hover:bg-green-900 transition duration-200"
            >
              ✕
            </button>
            <img
              src={selectedPackage.image[0]} 
              alt={selectedPackage.title}
              className="w-full max-h-[60vh] md:max-h-[60vh] rounded-t-lg"
            />
            <div className="p-6 bg-white">
              <h2 className="text-base md:text-xl font-semibold text-green-400">
                {selectedPackage.title}
              </h2>
           
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaketWisata;
