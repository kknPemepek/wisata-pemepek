import { useEffect } from "react";
import ProfilWisata from "./ProfilWisata";
import GaleryWisata from "./GaleryWisata";

import ld1 from "../assets/lembahDatu/ld1.jpg";
import ld2 from "../assets/lembahDatu/ld2.jpg";
import ld3 from "../assets/lembahDatu/ld3.jpg";
import ld4 from "../assets/lembahDatu/ld4.jpg";
import ld5 from "../assets/lembahDatu/ld5.jpg";
import ld6 from "../assets/lembahDatu/ld6.jpg";
import ld7 from "../assets/lembahDatu/ld7.jpg";
import ld8 from "../assets/lembahDatu/ld8.jpg";
import ld9 from "../assets/lembahDatu/ld9.jpg";
import ld10 from "../assets/lembahDatu/ld10.jpg";
import ld11 from "../assets/lembahDatu/ld11.jpg";
import ld12 from "../assets/lembahDatu/ld12.jpg";
import ld13 from "../assets/lembahDatu/ld13.jpg";
import ld14 from "../assets/lembahDatu/ld14.jpg";
import ld15 from "../assets/lembahDatu/ld15.jpg";

import a from "../assets/lembahDatu/pk1.jpeg";
import b from "../assets/lembahDatu/pk2.jpeg";
import c from "../assets/lembahDatu/pk3.jpeg";
import d from "../assets/lembahDatu/pk4.jpeg";
import e from "../assets/lembahDatu/pk5.jpeg";
import f from "../assets/lembahDatu/pk6.jpeg";
import g from "../assets/lembahDatu/pk7.jpeg";
import h from "../assets/lembahDatu/pk8.jpeg";
import i from "../assets/lembahDatu/pk9.jpeg";
import j from "../assets/lembahDatu/pk10.jpeg";

import FasilitasWisata from "./FasilitasWisata";
import PaketWisata from "./PaketWisata";
import LokasiWisata from "./LokasiWisata";
import AktivitasWisata from "./AktivitasWisata";

import { FaCampground, FaPersonHiking, FaYoutube } from "react-icons/fa6";
import { FaCameraRetro, FaWater } from "react-icons/fa";

import vlogTumbnail from "../assets/vlog_tumbnail.png";


interface ProfilWisataProps {
  id: number;
  title: string;
  image: string;
  desc: string;
  wisataDesc: string;
}
interface Package {
  id: number;
  title: string;
  image: string[];
}

interface activity {
  title: string;
  desc: string;
  icon: React.FC;
}

interface located {
  sumber: string;
  title: string;
  desc: string;
}

const LembahDatuSection = () => {
  const aktivitas: activity[] = [
    {
      title: "Camping",
      desc: "Camping di Lembah Datu adalah aktivitas berkemah di alam terbuka, dikelilingi hutan tropis dan pegunungan, dengan pemandangan indah dan udara segar.",

      icon: () => <FaCampground className="text-green-700 w-11 h-11" />,
    },
    {
      title: "Hiking",
      desc: "Hiking di Lembah Datu adalah kegiatan berjalan di jalur alam, menelusuri hutan tropis dan pegunungan, sambil menikmati pemandangan indah.",

      icon: () => <FaPersonHiking className="text-yellow-500 w-11 h-11" />,
    },
    {
      title: "Water Adventures",
      desc: `Main air di sungai yang jernih atau bersantai di tepi air sungai Lembah Datu. Kesegaran alam yang tak terlupakan menanti!`,

      icon: () => <FaWater className="text-blue-500 w-11 h-11" />,
    },
    {
      title: "Photography",
      desc: `Bawa kamera Anda dan abadikan momen terbaik di surga tersembunyi Lembah Datu! Setiap sudutnya adalah karya seni alam`,

      icon: () => <FaCameraRetro className="text-blue-700 w-11 h-11" />,
    },
  ];
  const profilWisata: ProfilWisataProps[] = [
    {
      id: 1,
      title: "Lembah Datu",
      image: `https://res.cloudinary.com/dbuhlpg8k/image/upload/v1735709492/ld2_ktorxb.jpg`,
      desc: "Pindah Alam adalah destinasi wisata yang menyuguhkan keindahan alam, udara segar, dan ketenangan.",
      wisataDesc:
        "Lembah Datu terletak pada koordinat -8.559756325001525, 116.27921723696957, yang berada di Pulau Lombok, Nusa Tenggara Barat, Indonesia. Berdasarkan posisinya, lembah ini berada di wilayah barat daya Lombok, tepatnya di sekitar kawasan dengan topografi yang mendukung keindahan alam yang khas. Lembah ini dikelilingi oleh hutan tropis yang rimbun serta pegunungan yang menyajikan suasana sejuk dan asri, menjadikannya tempat yang ideal untuk menikmati ketenangan alam jauh dari hiruk pikuk perkotaan. Dengan koordinat lintang -8.5597, lokasi ini terletak di belahan bumi selatan, sementara bujur 116.2792 menunjukkan posisinya di sebelah timur meridian utama, sehingga termasuk dalam zona waktu WITA (Waktu Indonesia Tengah). Selain menawarkan keindahan pemandangan hijau yang memanjakan mata, Lembah Datu juga kemungkinan memiliki keanekaragaman hayati yang tinggi, baik flora maupun fauna, yang menjadi daya tarik tersendiri bagi para pecinta alam. Keberadaan lembah ini juga diyakini memiliki nilai ekologi yang penting, mengingat vegetasinya yang lebat dapat berperan dalam menjaga keseimbangan ekosistem, seperti mencegah erosi dan mempertahankan kualitas air di wilayah sekitarnya. Selain itu, aliran sungai kecil yang melintasi lembah ini memberikan suasana yang semakin menenangkan, menjadikannya destinasi potensial untuk wisata ekowisata atau kegiatan eksplorasi alam. Dengan semua keunggulan tersebut, Lembah Datu memiliki potensi besar untuk menjadi salah satu tujuan wisata alam unggulan di Pulau Lombok.",
    },
  ];

  const galleryImages = [
    ld1,
    ld2,
    ld3,
    ld4,
    ld5,
    ld6,
    ld7,
    ld8,
    ld9,
    ld10,
    ld11,
    ld12,
    ld13,
    ld14,
    ld15,
  ];
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
    {
      id: 6,
      title: "Paket F",

      image: [f],
    },
    {
      id: 7,
      title: "Paket G",

      image: [g],
    },
    {
      id: 8,
      title: "Paket H",

      image: [h],
    },
    {
      id: 9,
      title: "Paket I",

      image: [i],
    },
    {
      id: 10,
      title: "Paket J",

      image: [j],
    },
  ];

  const lokasi: located[] = [
    {
      sumber: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5261.375526201812!2d116.27686086836363!3d-8.560192286105687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc9c11ec422b5%3A0x4f5afba2fe79f44!2sLEMBAH%20DATU%20CAMPING%20GROUND%20LOMBOK!5e1!3m2!1sid!2sid!4v1736523172973!5m2!1sid!2sid`,
      title: "Lembah Datu",
      desc: "Lembah Datu terletak pada koordinat -8.559756325001525, 116.27921723696957, yang berada di Pulau Lombok, Nusa Tenggara Barat, Indonesia. Berdasarkan posisinya, lembah ini terletak di wilayah barat daya Lombok, dikelilingi oleh kawasan hutan atau pegunungan yang menyajikan suasana alam yang asri dan sejuk. Dengan koordinat lintang -8.5597, lokasi ini berada di belahan bumi selatan, sedangkan bujur 116.2792 menunjukkan letaknya di sebelah timur meridian utama, menjadikannya berada di zona waktu WITA (Waktu Indonesia Tengah). Lembah ini kemungkinan memiliki keindahan alam yang khas, mengingat wilayah sekitarnya memiliki topografi lembah yang sering dihiasi oleh vegetasi hijau dan aliran sungai kecil.",
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
            Lembah Datu
          </h1>
          <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Lembah Datu menyajikan pemandangan pegunungan indah, udara sejuk,
            dan suasana tenang, menjadikannya tempat yang sempurna untuk
            bersantai bersama keluarga.
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
            Lembah Datu adalah destinasi wisata yang menyajikan berbagai
            aktivitas luar ruang yang menghubungkan Anda dengan alam, memberikan
            pengalaman yang tak terlupakan
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

      {/* Fasilitas */}
      <div className="h-auto pt-10 md:pt-20 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700">
        <div className="w-full max-w-6xl px-5 md:px-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-400">
            Fasilitas Kami
          </h1>
          <p className="text-center text-slate-500 mb-6 text-sm md:text-base">
            Lembah Datu dilengkapi dengan berbagai fasilitas penunjang, mulai
            dari tempat istirahat yang nyaman hingga area kegiatan outdoor untuk
            memastikan kenyamanan pengunjung
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
            Lembah Datu menyediakan paket wisata yang fleksibel, disesuaikan
            dengan kebutuhan pengunjung, untuk menjelajahi keindahan alam dan
            aktivitas menarik di sekitar lokasi
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
            Lembah Datu terletak di kawasan yang tenang dan alami, memberikan
            akses mudah bagi para pengunjung yang ingin merasakan suasana alam
            yang menyejukkan
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
      {/* vlog */}
      <div className="h-auto pb-20 md:pt-5 lg:pt-10 flex flex-col items-center justify-center w-full bg-gray-100 transition-all duration-700">
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
    </div>
  );
};

export default LembahDatuSection;
