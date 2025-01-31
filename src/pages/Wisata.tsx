import { useEffect } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Wisata = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div>
      {/* Navbar */}
      <div className="">
        <Navbar />
      </div>
      {/* content */}
      <div className="">
        <div
          className={`h-auto py-28 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700 `}
        >
          <div className="w-full max-w-6xl px-5 md:px-10">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
              Wisata Alam Desa Pemepek
            </h1>
            <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
              Nikmati keindahan alam yang memukau, udara segar, dan ketenangan
              yang menyejukkan hati
            </p>
            <hr className="border-t border-green-400 mb-8" />

            {/* Cards Section */}
            <div className="flex w-full justify-center">
              <Card />
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer className="">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Wisata;
