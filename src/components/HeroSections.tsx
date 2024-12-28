
import Carousels from "./Carousels";
import Card from "./Card";
import ProfilDesa from "./ProfilDesa";

const HeroSections = () => {
  return (
    <div className="pt-20">
      <Carousels />
      <div className=" w-full">
        {/* Welcome Section */}
        <div
          className={`h-auto pt-20 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700 `}
        >
          <div className="w-full max-w-6xl px-5 md:px-10">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
               Desa Pemepek
            </h1>
            <p className="text-center text-slate-500 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, a!
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
          className={`h-auto py-20 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700 `}
        >
          <div className="w-full max-w-6xl px-5 md:px-10">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
              Wisata Alam Desa Pemepek
            </h1>
            <p className="text-center text-slate-500 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, a!
            </p>
            <hr className="border-t border-green-400 mb-8" />

            {/* Cards Section */}
            <div className="flex w-full justify-center">
              <Card />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSections;
