
import Carousels from "./Carousels";
import Card from "./Card";
import ProfilDesa from "./ProfilDesa";
import LokasiDesa from "./LokasiDesa";
import { useEffect } from "react";

const HeroSections = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="pt-20">
      <Carousels />
      <div className=" w-full">
        {/* Welcome Section */}
        <div
          className={`h-auto pt-10 md:pt-20 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700 `}
        >
          <div className="w-full max-w-6xl px-5 md:px-10">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
               Desa Pemepek
            </h1>
            <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Surga kecil di bumi dengan pesona alam yang asri dan masyarakat yang ramah
            </p>
            <hr className="border-t border-green-400 mb-8" />

            {/* Cards Section */}
            <div className="flex w-full justify-center">
              <ProfilDesa/>
            </div>
          </div>
          
        </div>
        {/* Wisata Alam */}
        <div
          className={`h-auto py-10 md:py-20 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700 `}
        >
          <div className="w-full max-w-6xl px-5 md:px-10">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
              Wisata Alam Desa Pemepek
            </h1>
            <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Nikmati keindahan alam yang memukau, udara segar, dan ketenangan yang menyejukkan hati
            </p>
            <hr className="border-t border-green-400 mb-8" />

            {/* Cards Section */}
            <div className="flex w-full justify-center">
              <Card />
            </div>
          </div>
          
        </div>
        {/* Lokasi Desa */}
        <div
          className={`h-auto pb-10 md:pb-20 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700 `}
        >
          <div className="w-full max-w-6xl px-5 md:px-10">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
              Lokasi Desa
            </h1>
            <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Terletak di wilayah yang strategis dengan akses mudah, dikelilingi oleh keindahan alam dan suasana pedesaan yang tenang
            </p>
            <hr className="border-t border-green-400 mb-8" />

            {/* Cards Section */}
            <div className="flex w-full justify-center">
              <LokasiDesa/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSections;
