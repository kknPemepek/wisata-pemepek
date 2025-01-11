import { useEffect } from "react";
import ProfilWisata from "./ProfilWisata";
import GaleryWisata from "./GaleryWisata";

import pa1 from "../assets/pindahAlam/pa1.jpeg";
import pa2 from "../assets/pindahAlam/pa2.jpeg";
import pa3 from "../assets/pindahAlam/pa3.jpeg";
import pa4 from "../assets/pindahAlam/pa4.jpeg";
import pa5 from "../assets/pindahAlam/pa5.jpeg";

import a from "../assets/pindahAlam/A.jpeg";
import b from "../assets/pindahAlam/B.jpeg";
import c from "../assets/pindahAlam/C.jpeg";
import d from "../assets/pindahAlam/D.jpeg";
import e from "../assets/pindahAlam/E.jpeg";

import FasilitasWisata from "./FasilitasWisata";
import PaketWisata from "./PaketWisata";
import LokasiWisata from "./LokasiWisata";
import AktivitasWisata from "./AktivitasWisata";

import { FaCampground,  FaMountainSun } from "react-icons/fa6";
import { FaCameraRetro } from "react-icons/fa";
import { MdOutlinePool } from "react-icons/md";
import {
  Package,
  activity,
  located,
  ProfilWisataProps,
} from "../types/type.ts";

const PindahAlamSections = () => {
  const aktivitas: activity[] = [
    {
      title: "Camping",
      desc: "Camping di Pindah Alam adalah aktivitas berkemah di alam terbuka, dikelilingi hutan tropis dan pegunungan, dengan pemandangan indah dan udara segar.",

      icon: () => <FaCampground className="text-green-700 w-11 h-11" />,
    },
    {
      title: "Photography",
      desc: `Bawa kamera Anda dan abadikan momen terbaik di surga tersembunyi Pindah Alam! Setiap sudutnya adalah karya seni alam`,

      icon: () => <FaCameraRetro className="text-blue-500 w-11 h-11" />,
    },
    {
      title: "Sunset/Sunrise Panorama",
      desc: `Saksikan keajaiban matahari terbit dan tenggelam di Pindah Alam. Spot terbaik untuk menikmati panorama yang memukau!`,

      icon: () => <FaMountainSun className="text-green-500 w-11 h-11" />,
    },
    {
      title: "Lake View Exploration",
      desc: `Temukan ketenangan di tepi danau Pindah Alam. Nikmati suasana damai, berjalan santai, atau abadikan momen indah di danau ini`,

      icon: () => <MdOutlinePool className="text-blue-700 w-11 h-11" />,
    },
  ];
  const profilWisata: ProfilWisataProps[] = [
    {
      id: 1,
      title: "Pindah Alam",
      image:
        "https://res.cloudinary.com/dbuhlpg8k/image/upload/v1735473192/PA1_cfxpvu.jpg",
      desc: "Pindah Alam adalah destinasi wisata yang menyuguhkan keindahan alam, udara segar, dan ketenangan.",
      wisataDesc: `Pindah Alam adalah destinasi wisata yang menawarkan pengalaman tak terlupakan bagi para pencinta keindahan alam. 
        Terletak di kawasan yang jauh dari hiruk-pikuk perkotaan, tempat ini menyuguhkan pemandangan alam yang memukau, 
        lengkap dengan hamparan hijau pepohonan, perbukitan yang memanjakan mata, dan sungai yang mengalir jernih. 
        Udara segar yang menyelimuti area ini memberikan sensasi relaksasi, menjadikannya tempat ideal untuk melepas penat dari rutinitas sehari-hari. 
        
        Selain keindahan visualnya, Pindah Alam juga menghadirkan suasana yang tenang dan damai, sempurna bagi siapa saja yang mencari ketenangan batin. 
        Pengunjung dapat menikmati beragam aktivitas seperti berjalan-jalan di jalur hiking, piknik bersama keluarga, 
        atau sekadar duduk bersantai sambil mendengarkan suara alam. 
        
        Tempat ini juga dilengkapi dengan fasilitas ramah lingkungan yang mendukung kenyamanan para wisatawan tanpa mengganggu ekosistem alaminya. 
        Bagi mereka yang ingin lebih dekat dengan alam, Pindah Alam menyediakan area perkemahan yang aman dan nyaman. 
        Di malam hari, langit yang dipenuhi bintang memberikan pengalaman magis, menciptakan momen berkesan yang sulit dilupakan.`,
    },
  ];

  const galleryImages = [pa1, pa2, pa3, pa4, pa5];
  const packages: Package[] = [
    {
      id: 1,
      title: "Paket A",

      image: [a],
    },
    {
      id: 2,
      title: "Paket B",
      image: [b],
    },
    {
      id: 3,
      title: "Paket C",

      image: [c],
    },
    {
      id: 4,
      title: "Paket D",

      image: [d],
    },
    {
      id: 5,
      title: "Paket E",

      image: [e],
    },
  ];

  const lokasi: located[] = [
    {
      sumber:
        `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.392198459638!2d116.26420527613372!3d-8.57392025815264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc9004d6a0d61%3A0x2617d50aa0703ee8!2sPindah%20Alam%20Camping%20Ground!5e1!3m2!1sid!2sid!4v1736522502622!5m2!1sid!2sid`,
      title: "Pindah Alam",
      desc: `Wisata Pindah Alam yang terletak di Dusun Cerorong Selatan, Desa Pemepek, Kecamatan Pringgarata, Kabupaten Lombok Tengah, merupakan destinasi yang menawarkan keindahan alam khas pedesaan dengan suasana tenang dan udara segar. Dikelilingi oleh hamparan sawah, perbukitan, serta pepohonan hijau, tempat ini menjadi pilihan ideal untuk bersantai dan melepas penat dari hiruk-pikuk perkotaan. Wisatawan dapat menikmati berbagai kegiatan seperti berfoto di spot-spot dengan latar belakang alam yang indah, bersantai di gazebo yang tersedia, atau mengadakan piknik bersama keluarga. Selain itu, lokasi ini juga memiliki potensi untuk aktivitas camping, memberikan pengalaman wisata yang lebih mendalam. Dengan akses yang relatif mudah, Pindah Alam menjadi salah satu destinasi wisata yang cocok untuk menikmati keindahan dan ketenangan alam Lombok Tengah.`,
    },
  ];

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
          Pindah Alam adalah destinasi wisata yang menawarkan keindahan alam, udara yang segar, serta suasana yang tenang dan menenangkan
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
          Pindah Alam merupakan destinasi wisata yang menghadirkan keindahan alam, udara segar, serta ketenangan yang menyejukkan jiwa
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
          Pindah Alam menyediakan berbagai fasilitas untuk menunjang kenyamanan Anda menikmati keindahan alam, udara segar, dan ketenangan yang ditawarkan
          </p>
          <hr className="border-t border-green-400 mb-8" />
          <div className="w-full">
            <FasilitasWisata />
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
          Pindah Alam menawarkan berbagai paket wisata yang dirancang untuk memberikan pengalaman menikmati keindahan alam, udara segar, dan ketenangan secara maksimal
          </p>
          <hr className="border-t border-green-400 mb-8" />
          <div className="w-full">
            <PaketWisata packages={packages} />
          </div>
        </div>
      </div>
      {/* Lokasi Wisata */}
      <div className="h-auto py-10 md:py-20 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700">
        <div className="w-full max-w-6xl px-5 md:px-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
            Lokasi Kami
          </h1>
          <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
          Pindah Alam terletak di lokasi yang strategis, dikelilingi oleh keindahan alam, udara segar, dan suasana yang penuh ketenangan.
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
    </div>
  );
};

export default PindahAlamSections;
