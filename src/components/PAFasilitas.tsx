import { FaTrash, FaBolt, FaWater, FaMosque, FaToilet } from "react-icons/fa";
const PAFasilitas = () => {
  interface Fasilitas {
    id: number;
    title: string;
    description: string;
    image: string;
    icon:() => JSX.Element
  }
  const fasilitas: Fasilitas[] = [
    {
      id: 1,
      title: "Trash",
      description:
        "Fasilitas tempat sampah yang tersedia untuk menjaga kebersihan lingkungan dan mendukung pengelolaan sampah yang lebih baik.",
      image:
        "https://images.unsplash.com/photo-1655574105050-7ce22c2ba1f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHx0cmFzaHxlbnwwfHwwfHx8MA%3D%3D",
      icon: () => <FaTrash className="text-green-700 w-11 h-11" />,
    },
    {
      id: 2,
      title: "Listrik",
      description:
        "Fasilitas listrik yang tersedia mendukung operasional serta memberikan kenyamanan bagi pengguna fasilitas umum.",
      image:
        "https://images.unsplash.com/photo-1655574105050-7ce22c2ba1f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHx0cmFzaHxlbnwwfHwwfHx8MA%3D%3D",
      icon: () => <FaBolt className="text-yellow-500 w-11 h-11" />,
    },
    {
      id: 3,
      title: "Air",
      description:
        "Fasilitas air bersih untuk memenuhi kebutuhan pengguna, memastikan kenyamanan dan kesehatan lingkungan.",
      image:
        "https://images.unsplash.com/photo-1655574105050-7ce22c2ba1f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHx0cmFzaHxlbnwwfHwwfHx8MA%3D%3D",
      icon: () => <FaWater className="text-blue-500 w-11 h-11" />,
    },
    {
      id: 4,
      title: "Mushola",
      description:
        "Fasilitas mushola disediakan untuk mendukung kegiatan ibadah bagi pengguna dengan nyaman dan tenang.",
      image:
        "https://images.unsplash.com/photo-1655574105050-7ce22c2ba1f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHx0cmFzaHxlbnwwfHwwfHx8MA%3D%3D",
      icon: () => <FaMosque className="text-green-700 w-11 h-11" />,
    },
    {
      id: 5,
      title: "Toilet",
      description:
        "Fasilitas toilet yang bersih dan nyaman, dirancang untuk mendukung kebutuhan sanitasi pengguna.",
      image:
        "https://images.unsplash.com/photo-1655574105050-7ce22c2ba1f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHx0cmFzaHxlbnwwfHwwfHx8MA%3D%3D",
      icon: () => <FaToilet className="text-gray-500 w-11 h-11" />,
    },
  ];
  
  return (
    <>
      <div className="sm:px-8 lg:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default PAFasilitas;
