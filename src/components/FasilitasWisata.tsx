import { FaTrash, FaBolt, FaWater, FaMosque, FaToilet } from "react-icons/fa";
const FasilitasWisata = () => {
  interface Fasilitas {
    id: number;
    title: string;
    description: string;

    icon: () => JSX.Element;
  }
  const fasilitas: Fasilitas[] = [
    {
      id: 1,
      title: "Trash",
      description:
        "Fasilitas tempat sampah yang tersedia untuk menjaga kebersihan lingkungan dan mendukung pengelolaan sampah yang lebih baik.",

      icon: () => <FaTrash className="text-green-700 w-11 h-11" />,
    },
    {
      id: 2,
      title: "Listrik",
      description:
        "Fasilitas listrik yang tersedia mendukung operasional serta memberikan kenyamanan bagi pengguna fasilitas umum.",

      icon: () => <FaBolt className="text-yellow-500 w-11 h-11" />,
    },
    {
      id: 3,
      title: "Air",
      description:
        "Fasilitas air bersih untuk memenuhi kebutuhan pengguna, memastikan kenyamanan dan kesehatan lingkungan.",

      icon: () => <FaWater className="text-blue-500 w-11 h-11" />,
    },
    {
      id: 4,
      title: "Mushola",
      description:
        "Fasilitas mushola disediakan untuk mendukung kegiatan ibadah bagi pengguna dengan nyaman dan tenang.",

      icon: () => <FaMosque className="text-green-700 w-11 h-11" />,
    },
    {
      id: 5,
      title: "Toilet",
      description:
        "Fasilitas toilet yang bersih dan nyaman, dirancang untuk mendukung kebutuhan sanitasi pengguna.",

      icon: () => <FaToilet className="text-gray-500 w-11 h-11" />,
    },
  ];

  return (
    <>
      <div className="">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {fasilitas.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <figure>
                <div className="flex items-center justify-center pt-10">
                  {item.icon()}
                </div>
              </figure>
              <div className="p-4">
                <h2 className=" font-semibold text-green-400 text-base md:text-lg text-center">
                  {item.title}
                </h2>
                <p className="text-gray-600 mt-2 text-xs md:text-sm text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FasilitasWisata;
