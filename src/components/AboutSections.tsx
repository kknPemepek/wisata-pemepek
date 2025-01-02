import AboutUs from "./AboutUs";
import KegiatanMasyarakat from "./KegiatanMasyarakat";
import ProdukDesa from "./ProdukDesa";
const AboutSections = () => {
  return (
    <div>
      {/* about us */}
      <div
        className={`h-auto pt-28 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700 `}
      >
        <div className="w-full max-w-6xl px-5 md:px-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
            Tentang Kami
          </h1>
          <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Surga kecil di bumi dengan pesona alam yang asri dan masyarakat yang
            ramah
          </p>
          <hr className="border-t border-green-400 mb-8" />
          <div className="flex w-full justify-center">
            <AboutUs />
          </div>
        </div>
      </div>
      {/* Kegiatan */}
      <div
        className={`h-auto pt-10 md:pt-20 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700 `}
      >
        <div className="w-full max-w-6xl px-5 md:px-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
            Kegiatan Masyarakat
          </h1>
          <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Masyarakat Desa Pemepek aktif bertani, beternak, bergotong royong,
            serta melestarikan tradisi dan kegiatan keagamaan
          </p>
          <hr className="border-t border-green-400 mb-8" />

          {/* Cards Section */}
          <div className="flex w-full justify-center">
            <KegiatanMasyarakat />
          </div>
        </div>
      </div>
      {/* Produk Lokal */}
      <div
        className={`h-auto py-10 md:py-20 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700 `}
      >
        <div className="w-full max-w-6xl px-5 md:px-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
            Produk Desa Pemepek
          </h1>
          <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
          Desa Pemepek dikenal dengan hasil pertaniannya seperti padi, jagung, dan palawija, serta produk peternakan seperti sapi dan kambing. Kerajinan tangan lokal juga menjadi daya tarik unggulan
          </p>
          <hr className="border-t border-green-400 mb-8" />

          {/* Cards Section */}
          <div className="flex w-full justify-center">
            <ProdukDesa />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSections;
