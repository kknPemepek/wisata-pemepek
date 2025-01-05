import { useState } from "react";

import a from "../assets/pindahAlam/A.jpeg";
import b from "../assets/pindahAlam/B.jpeg";
import c from "../assets/pindahAlam/C.jpeg";
import d from "../assets/pindahAlam/D.jpeg";
import e from "../assets/pindahAlam/E.jpeg";
interface Package {
  id: number;
  title: string;
  description: string;
  image: string;
}

const PaketLiburan: React.FC = () => {
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

  const packages: Package[] = [
    {
      id: 1,
      title: "Paket A",
      description:
        "Nikmati pengalaman camping sederhana di tepi danau yang tenang. Cocok untuk kamu yang mencari liburan hemat dengan suasana alam yang menenangkan.",
      image: a,
    },
    {
      id: 2,
      title: "Paket B",
      description:
        "Rasakan sensasi camping di gunung dengan perjalanan pendakian yang menantang. Ideal untuk petualang yang ingin menikmati keindahan alam dari ketinggian.",
      image: b,
    },
    {
      id: 3,
      title: "Paket C",
      description:
        "Camping dengan tenda yang nyaman dan menikmati makan malam di bawah langit malam. Sempurna bagi yang ingin bersantai sambil menikmati alam dengan sedikit sentuhan kemewahan.",
      image: c,
    },
    {
      id: 4,
      title: "Paket D",
      description:
        "Pengalaman camping premium di tempat dengan pemandangan menakjubkan, lengkap dengan layanan makan yang disiapkan setiap hari untuk menikmati suasana alam lebih lama.",
      image: d,
    },
    {
      id: 5,
      title: "Paket E",
      description:
        "Camping eksklusif dengan pengalaman VIP yang memberikan kenyamanan maksimal. Cocok untuk yang ingin menikmati alam tanpa mengorbankan kenyamanan dan kemewahan.",
      image: e,
    },
  ];

  return (
    <>
      {/* Grid Paket Liburan */}
      <div className="sm:px-8 lg:px-16 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => openPopup(pkg)}
            >
              <figure>
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-auto object-cover"
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
            className={`relative p-5 rounded-lg shadow-lg max-w-4xl w-full transform transition-transform duration-300 ${
              isVisible ? "scale-100" : "scale-50"
            }`}
            onClick={(e) => e.stopPropagation()} // Mencegah modal ditutup saat klik di dalam konten modal
          >
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white h-10 w-10 p-2 bg-green-800 rounded-full hover:bg-green-900 transition duration-200"
            >
              ✕
            </button>
            <img
              src={selectedPackage.image}
              alt={selectedPackage.title}
              className="w-full max-h-[600px] md:max-h-[800px]  rounded-t-lg"
            />
            <div className="p-6 bg-white">
              <h2 className="text-base md:text-xl font-semibold text-green-400">
                {selectedPackage.title}
              </h2>
              <p className="text-gray-600 mt-4 text-sm md:text-base">
                {selectedPackage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaketLiburan;
