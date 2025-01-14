import { aktivitas, galleryImages, profilWisata } from "../types/wkType";
import AktivitasWisata from "./AktivitasWisata";
import GaleryWisata from "./GaleryWisata";
import ProfilWisata from "./ProfilWisata";

const KelicungSection = () => {
  return (
    <div>
      {/* Profil Wisata */}
      <div className="h-auto pt-28 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700">
        <div className="w-full max-w-6xl px-5 md:px-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
            Wisata Kelicung
          </h1>
          <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Temukan ketenangan di Wisata Kelicung, Desa Pemepek, Dusun Rarung!
            Nikmati keindahan alam hutan pohon kelicung yang asri, sempurna
            untuk penelitian dan refreshing. Udara segar, suasana damai, dan
            panorama hijau menanti Anda di sini
          </p>
          <hr className="border-t border-green-400 mb-8" />
          <div className="flex w-full justify-center flex-wrap gap-6">
            {profilWisata.map((item) => (
              <ProfilWisata
                key={item.id}
                title={item.title}
                image={item.image}
                wisataDesc={item.wisataDesc}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Aktivitas */}
      <div className="h-auto pt-10 md:pt-20 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700">
        <div className="w-full max-w-6xl px-5 md:px-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
            Aktivitas Kami
          </h1>
          <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Pindah Alam adalah destinasi wisata yang menawarkan keindahan alam,
            udara yang segar, serta suasana yang tenang dan menenangkan
          </p>
          <hr className="border-t border-green-400 mb-8" />
          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {aktivitas.map((act, index) => (
                <AktivitasWisata
                  key={index}
                  title={act.title}
                  desc={act.desc}
                  Icon={act.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="h-auto pt-10 md:pt-20 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700">
        <div className="w-full max-w-6xl px-5 md:px-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
            Gallery Kami
          </h1>
          <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Lembah Datu menawarkan galeri foto yang memperlihatkan keindahan
            alam dan keunikan tempat ini, untuk memberi gambaran nyata tentang
            pengalaman yang dapat dinikmat
          </p>
          <hr className="border-t border-green-400 mb-8" />
          <div className="w-full">
            <GaleryWisata images={galleryImages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KelicungSection;
