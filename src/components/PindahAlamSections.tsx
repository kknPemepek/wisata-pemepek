import { useEffect } from "react";
import ProfilWisata from "./ProfilWisata";
import GaleryWisata from "./GaleryWisata";

import FasilitasWisata from "./FasilitasWisata";
import PaketWisata from "./PaketWisata";
import LokasiWisata from "./LokasiWisata";
import AktivitasWisata from "./AktivitasWisata";
import reservation from "../assets/pexels-ryutaro-5745045.jpg";
import {
  aktivitas,
  galleryImages,
  profilWisata,
  packages,
  lokasi,
  fasilitas,
} from "../types/PaType.tsx";
import { FaYoutube } from "react-icons/fa6";

import vlogTumbnail from "../assets/vlog_tumbnail.png";

const PindahAlamSections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Profil Wisata */}
      <div className="h-auto pt-28 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700">
        <div className="w-full max-w-6xl px-5 md:px-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
            Pindah Alam
          </h1>
          <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Pindah Alam adalah destinasi wisata yang menyuguhkan keindahan alam,
            udara segar, dan ketenangan
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
            Pindah Alam merupakan destinasi wisata yang menghadirkan keindahan
            alam, udara segar, serta ketenangan yang menyejukkan jiwa
          </p>
          <hr className="border-t border-green-400 mb-8" />
          <div className="w-full">
            <GaleryWisata images={galleryImages} />
          </div>
        </div>
      </div>

      {/* Fasilitas */}
      <div className="h-auto pt-10 md:pt-20 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700">
        <div className="w-full max-w-6xl px-5 md:px-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
            Fasilitas Kami
          </h1>
          <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Pindah Alam menyediakan berbagai fasilitas untuk menunjang
            kenyamanan Anda menikmati keindahan alam, udara segar, dan
            ketenangan yang ditawarkan
          </p>
          <hr className="border-t border-green-400 mb-8" />
          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {fasilitas.map((act, index) => (
                <FasilitasWisata
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

      {/* Paket */}
      <div className="h-auto pt-10 md:pt-20 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700">
        <div className="w-full max-w-6xl px-5 md:px-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
            Paket Kami
          </h1>
          <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Pindah Alam menawarkan berbagai paket wisata yang dirancang untuk
            memberikan pengalaman menikmati keindahan alam, udara segar, dan
            ketenangan secara maksimal
          </p>
          <hr className="border-t border-green-400 mb-8" />
          <div className="w-full">
            <PaketWisata packages={packages} />
          </div>
        </div>
      </div>
      {/* Lokasi Wisata */}
      <div className="h-auto pt-10 md:pt-20 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700">
        <div className="w-full max-w-6xl px-5 md:px-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
            Lokasi Kami
          </h1>
          <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Pindah Alam terletak di lokasi yang strategis, dikelilingi oleh
            keindahan alam, udara segar, dan suasana yang penuh ketenangan.
          </p>
          <hr className="border-t border-green-400 mb-8" />
          <div className="w-full">
            {lokasi.map((item) => {
              return (
                <LokasiWisata
                  sumber={item.sumber}
                  title={item.title}
                  desc={item.desc}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* Vlog */}
      <div className="h-auto  md:pt-5 lg:pt-10 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700">
        <div className="w-full max-w-6xl px-5 md:px-10">
          <div className="w-full">
            <div className="grid sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 lg:space-y-0 lg:space-x-5">
              <div className="mt-4 md:mt-0">
                <h1 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
                  Vlog Wisata KKN Pemepek
                </h1>
                <p className="element-scroll lg:h-[245px] overflow-auto text-gray-600 text-sm md:text-base">
                  Cari tahu lebih banyak tentang lokasi ini! Kunjungi vlog kami
                  untuk melihat pengalaman seru dan pemandangan memukau yang
                  tersembunyi. Temukan keindahan alam, aktivitas seru, dan
                  cerita menarik yang tidak boleh Anda lewatkan. Jangan lupa
                  untuk menonton hingga akhir dan bagikan momen favorit Anda
                  bersama kami!
                </p>
              </div>
              <div className="lg:pt-0 pt-3  ">
                <span className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 items-center shadow-md">
                  <span className="w-full h- rounded-md relative cursor-pointer shrink-0">
                    {/* Tambahkan overlay gelap */}
                    <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 rounded-md"></div>
                    <img
                      className="w-full h-full rounded-md object-cover"
                      src={vlogTumbnail}
                      alt="Thumbnail Vlog"
                    />
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <FaYoutube className="text-6xl text-red-700 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* reservasi */}
      <div className="h-auto pb-20 md:pt-5 lg:pt-10 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700">
        <div className="w-full max-w-6xl px-5 md:px-10">
          <div className="w-full">
            <div className="grid sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 lg:space-y-0 lg:space-x-5 md:space-x-3">
              <div className="lg:pt-0 pt-3 hidden lg:block">
                <span className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 items-center ">
                  <span className="w-full relative cursor-pointer ">
                    <img
                      className="w-full h-full  object-cover rounded-md shadow-md"
                      src={reservation}
                      alt="resrvation"
                    />
                  </span>
                </span>
              </div>
              <div className="mt-4 md:mt-0">
                <h1 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
                  Cara Melakukan Reservasi
                </h1>
                <p className="element-scroll text-gray-600 text-sm md:text-base">
                  <p>
                    1. Pilih hari yang sesuai dengan rencana Anda untuk camping,
                    baik itu akhir pekan maupun hari libur lainnya
                  </p>
                  <p>
                    2. Lakukan pemesanan minimal beberapa minggu sebelumnya
                    untuk memastikan ketersediaan tempat camping, terutama di
                    musim liburan.
                  </p>
                  <p>
                    3. Untuk melakukan booking, silakan hubungi nomor <span className="font-bold">087865724936 </span> 
                    untuk informasi lebih lanjut dan konfirmasi pemesanan atau DM instagram kami, <span className="font-bold">@pindahalam_official </span>
                  </p>
                  <p>
                    4. Jangan lupa untuk mengikuti dan memantau sosial media
                    kami untuk update informasi, promo, dan event terbaru yang
                    menarik!
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PindahAlamSections;
