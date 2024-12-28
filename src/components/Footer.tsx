import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
  const sosmed = [
    { id: 1, title: "Pindah Alam" },
    { id: 2, title: "Lembah Datu" },
    { id: 3, title: "Wisata Klicung" },
  ];

  return (
    <footer className="bg-green-100 text-base-content rounded p-6 sm:p-10">
      {/* Heading */}
      <div className="text-center pb-6">
        <p className="text-base font-semibold">
          Social Media
        </p>
      </div>

      {/* Social Media Links */}
      <div className="grid gap-6 sm:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 pb-6">
        {sosmed.map((item) => (
          <div key={item.id} className="text-center">
            <p className=" text-base  mb-3">
              {item.title}
            </p>
            <div className="flex justify-center items-center gap-4">
              <FaInstagram
                size={20}
                className="text-pink-500 hover:text-pink-700 transition duration-200 cursor-pointer"
              />
              <IoLogoFacebook
                size={20}
                className="text-blue-600 hover:text-blue-800 transition duration-200 cursor-pointer"
              />
              <FaYoutube
                size={20}
                className="text-red-500 hover:text-red-700 transition duration-200 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <div className="text-center pt-6 border-t border-gray-300">
        <p className="text-base">
          Copyright © {new Date().getFullYear()} - All rights reserved by KKN
          Desa Pemepek
        </p>
      </div>
    </footer>
  );
};

export default Footer;
