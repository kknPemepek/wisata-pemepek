import { FaCameraRetro, FaCampground,  FaBookOpenReader, FaPersonHiking } from "react-icons/fa6";
import { activity, ProfilWisataProps } from "./type";
import { GiMeditation } from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr";

import wk1 from '../assets/wisataKelicung/wk1.jpeg'
import wk2 from '../assets/wisataKelicung/wk2.jpeg'
import wk3 from '../assets/wisataKelicung/wk3.jpeg'
import wk4 from '../assets/wisataKelicung/wk4.jpeg'
import wk5 from '../assets/wisataKelicung/wk5.jpeg'
import wk6 from '../assets/wisataKelicung/wk6.jpeg'
import wk7 from '../assets/wisataKelicung/wk7.jpeg'
import wk8 from '../assets/wisataKelicung/wk8.jpeg'
import wk9 from '../assets/wisataKelicung/wk9.jpeg'
import wk10 from '../assets/wisataKelicung/wk10.jpeg'
import wk11 from '../assets/wisataKelicung/wk11.jpeg'
import wk12 from '../assets/wisataKelicung/wk12.jpeg'
import wk13 from '../assets/wisataKelicung/wk13.jpeg'
import wk14 from '../assets/wisataKelicung/wk14.jpeg'
import wk15 from '../assets/wisataKelicung/wk15.jpeg'
import wk16 from '../assets/wisataKelicung/wk16.jpeg'
import wk17 from '../assets/wisataKelicung/wk17.jpeg'
import wk18 from '../assets/wisataKelicung/wk18.jpeg'

export const profilWisata: ProfilWisataProps[] = [
  {
    id: 1,
    title: "Wisata Kelicung",
    image:
      "https://res.cloudinary.com/dbuhlpg8k/image/upload/v1735715527/steven-kamenar-MMJx78V7xS8-unsplash_aabycx.jpg",
    desc: "Wisata Kelicung adalah destinasi wisata yang menyuguhkan keindahan alam, udara segar, dan ketenangan",
    wisataDesc: `Wisata Kelicung terletak di Desa Pemepek, Dusun Rarung, menawarkan perpaduan sempurna antara keindahan alam dan ketenangan yang ideal untuk penelitian serta refreshing. Daya tarik utama dari wisata ini adalah hutan pohon kelicung yang lebat dan alami, menciptakan suasana asri dan udara segar yang memanjakan para pengunjung.

Bagi peneliti, kawasan ini menyediakan ekosistem hutan yang kaya dengan flora dan fauna khas, memungkinkan eksplorasi ilmiah yang mendalam. Keberadaan pohon kelicung yang menjadi ikon wilayah ini juga memberikan potensi besar untuk penelitian lingkungan, ekologi, dan pelestarian alam.

Sementara itu, bagi pengunjung yang mencari tempat untuk relaksasi, hutan ini menawarkan kedamaian yang jauh dari hiruk pikuk kota. Trekking ringan di antara pepohonan, menikmati suara burung, dan panorama hijau memberikan pengalaman menenangkan yang sulit dilupakan.

Wisata Kelicung sangat cocok bagi siapa saja yang ingin merasakan keindahan dan kekayaan alam Desa Pemepek, sekaligus mendapatkan manfaat edukasi dan relaksasi`,
  },
];

export const aktivitas: activity[] = [
  {
    title: "Trekking",
    desc: "Rasakan petualangan seru menjelajahi hutan pohon kelicung yang rimbun dan alami dengan udara segar dan pemandangan hijau menanti",

    icon: () => <FaPersonHiking className="text-green-500 w-11 h-11" />,
  },
  {
    title: "Research",
    desc: `Temukan kekayaan ekosistem hutan kelicung yang sempurna untuk penelitian dan edukasi lingkungan`,

    icon: () => <FaBookOpenReader className="text-blue-600 w-11 h-11" />,
  },
  {
    title: "Camping",
    desc: `Nikmati momen santai bersama keluarga atau teman dengan piknik asyik di tengah suasana hutan yang damai`,

    icon: () => <FaCampground className="text-pink-400 w-11 h-11" />,
  },
  {
    title: "Meditation",
    desc: `Lepaskan penat dan temukan kedamaian dengan meditasi atau yoga di tengah hutan kelicung yang tenang`,

    icon: () => <GiMeditation className="text-purple-400 w-11 h-11" />,
  },
  {
    title: "Workshops",
    desc: `Bawa komunitas Anda lebih dekat dengan alam dengan workshop dan kegiatan outdoor di tengah keindahan hutan kelicung`,

    icon: () => <GrWorkshop className="text-orange-500 w-11 h-11" />,
  },
  {
    title: "Photography",
    desc: `Abadikan momen terbaik di tengah keindahan hutan pohon kelicung dengan lokasi sempurna untuk para pecinta fotografi alam`,

    icon: () => <FaCameraRetro className="text-yellow-400 w-11 h-11" />,
  },
];

export const galleryImages = [
  wk1,
  wk2,
  wk3,
  wk4,
  wk5,
  wk6,  
  wk7,
  wk8,
  wk9,
  wk10,
  wk11,
  wk12,
  wk13,
  wk14,
  wk15,
  wk16,
  wk17,
  wk18,]