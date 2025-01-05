import PAFasilitas from "./PAFasilitas";
import PAGallerySection from "./PAGallerySection";
import PaketLiburan from "./PaketLiburan";
import PindahAlamProfile from "./PindahAlamProfile";

const PindahAlamSections = () => {
  return (
    <div>
      <div
        className={`h-auto pt-28 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700 `}
      >
        <div className="w-full max-w-6xl px-5 md:px-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
            Pindah Alam
          </h1>
          <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Pindah Alam adalah destinasi wisata yang menyuguhkan keindahan alam,
            udara segar, dan ketenangan
          </p>
          <hr className="border-t border-green-400 mb-8" />
          <div className="flex w-full justify-center">
            <PindahAlamProfile />
          </div>
        </div>
      </div>
      {/* galery */}
      <div
        className={`h-auto pt-10 md:pt-10 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700 `}
      >
        <div className="w-full max-w-6xl px-5 md:px-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
            Gallery Kami
          </h1>
          <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Pindah Alam adalah destinasi wisata yang menyuguhkan keindahan alam,
            udara segar, dan ketenangan
          </p>
          <hr className="border-t border-green-400 mb-8" />
          <div className="flex w-full justify-center">
          <PAGallerySection/>
          </div>
        </div>
      </div>
      {/* fasilitas */}
      <div
        className={`h-auto pt-10 md:pt-10 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700 `}
      >
        <div className="w-full max-w-6xl px-5 md:px-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
            Fasilitas Kami
          </h1>
          <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Pindah Alam adalah destinasi wisata yang menyuguhkan keindahan alam,
            udara segar, dan ketenangan
          </p>
          <hr className="border-t border-green-400 mb-8" />
          <div className="flex w-full justify-center">
          <PAFasilitas/>
          </div>
        </div>
      </div>
      {/* paket kami */}
      <div
        className={`h-auto pt-10 md:pt-10 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700 `}
      >
        <div className="w-full max-w-6xl px-5 md:px-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
            Paket Kami
          </h1>
          <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Pindah Alam adalah destinasi wisata yang menyuguhkan keindahan alam,
            udara segar, dan ketenangan
          </p>
          <hr className="border-t border-green-400 mb-8" />
          <div className="flex w-full justify-center">
          <PaketLiburan/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PindahAlamSections;
