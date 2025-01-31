import {
  activity,
  fasility,
  located,
  Package,
  ProfilWisataProps,
} from "./type";
import { FaCampground, FaPersonHiking, FaLightbulb } from "react-icons/fa6";
import { FaCameraRetro, FaWater } from "react-icons/fa";
import { GiHiking } from "react-icons/gi";

import { FaTrash, FaBolt, FaMosque, FaToilet, FaHandHoldingWater } from "react-icons/fa";
import { IoWifi } from "react-icons/io5";

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
import ld16 from "../assets/lembahDatu/ld16.jpg";

import a from "../assets/lembahDatu/pk1.png";
import b from "../assets/lembahDatu/pk2.png";
import c from "../assets/lembahDatu/pk3.png";
import d from "../assets/lembahDatu/pk4.png";
import e from "../assets/lembahDatu/pk5.png";
import f from "../assets/lembahDatu/pk6.png";


export const aktivitas: activity[] = [
  {
    title: "Camping",
    desc: "Camping di Lembah Datu adalah aktivitas berkemah di alam terbuka, dikelilingi hutan tropis dan pegunungan, dengan pemandangan indah dan udara segar.",
    icon: () => <FaCampground className="text-green-600 w-11 h-11" />, 
  },
  {
    title: "Hiking",
    desc: "Hiking di Lembah Datu adalah kegiatan berjalan di jalur alam, menelusuri hutan tropis dan pegunungan, sambil menikmati pemandangan indah.",
    icon: () => <FaPersonHiking className="text-yellow-600 w-11 h-11" />, 
  },
  {
    title: "Water Adventures",
    desc: `Main air di sungai yang jernih atau bersantai di tepi air sungai Lembah Datu. Kesegaran alam yang tak terlupakan menanti!`,
    icon: () => <FaWater className="text-blue-400 w-11 h-11" />, 
  },
  {
    title: "Photography",
    desc: `Bawa kamera Anda dan abadikan momen terbaik di surga tersembunyi Lembah Datu! Setiap sudutnya adalah karya seni alam`,
    icon: () => <FaCameraRetro className="text-purple-500 w-11 h-11" />, 
  },
  {
    title: "Rappelling",
    desc: `Nikmati sensasi menuruni tebing di Lembah Datu! Rasakan petualangan seru sambil mengabadikan keindahan alamnya`,
    icon: () => <GiHiking className="text-red-600 w-11 h-11" />, 
  },
];


export const profilWisata: ProfilWisataProps[] = [
  {
    id: 1,
    title: "Lembah Datu",
    image: `https://res.cloudinary.com/dbuhlpg8k/image/upload/v1735709492/ld2_ktorxb.jpg`,
    desc: "Pindah Alam adalah destinasi wisata yang menyuguhkan keindahan alam, udara segar, dan ketenangan.",
    wisataDesc:
      `Lembah Datu yang terletak di Dusun Gelogor, Desa Pemepek, Kecamatan Pringgarata, Lombok Tengah, merupakan destinasi wisata alam yang masih asri dengan pesona lembah hijau dan aliran sungai yang mengalir di tengahnya. Suasana sejuk dan ketenangan alamnya menjadikan tempat ini pilihan ideal bagi wisatawan yang ingin menikmati keindahan alam sambil melepas penat dari kesibukan sehari-hari. Di sini, pengunjung dapat merasakan pengalaman berkemah di alam terbuka dengan latar belakang perbukitan hijau serta langit malam yang dipenuhi bintang, menciptakan suasana yang nyaman dan menenangkan.

Selain itu, bagi pecinta olahraga ekstrem, rapeling atau menuruni tebing bisa menjadi tantangan menarik yang menguji adrenalin. Dengan tebing-tebing alami yang mengelilingi lembah, aktivitas ini memberikan pengalaman berbeda dalam menjelajahi keindahan alam Lembah Datu. Tidak hanya itu, gemericik air sungai yang mengalir jernih di antara bebatuan semakin menambah kesan alami dan menenangkan. Pengunjung juga bisa sekadar bersantai di tepi sungai, merasakan kesejukan air, atau menikmati suasana alam yang masih terjaga keasriannya.

Lembah Datu adalah pilihan sempurna bagi siapa saja yang ingin menikmati wisata alam dengan nuansa petualangan. Keindahan alamnya yang masih alami, berbagai aktivitas seru yang bisa dilakukan, serta suasana yang menenangkan menjadikan tempat ini destinasi yang wajib dikunjungi bagi para pecinta alam dan petualangan di Lombok Tengah.`,
  },
];
export const galleryImages = [
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
  ld16,
];

export const packages: Package[] = [
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
  
];

export const lokasi: located[] = [
  {
    sumber: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5261.375526201812!2d116.27686086836363!3d-8.560192286105687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc9c11ec422b5%3A0x4f5afba2fe79f44!2sLEMBAH%20DATU%20CAMPING%20GROUND%20LOMBOK!5e1!3m2!1sid!2sid!4v1736523172973!5m2!1sid!2sid`,
    title: "Lembah Datu",
    desc: "Lembah Datu terletak pada koordinat -8.559756325001525, 116.27921723696957, yang berada di Pulau Lombok, Nusa Tenggara Barat, Indonesia. Berdasarkan posisinya, lembah ini terletak di wilayah barat daya Lombok, dikelilingi oleh kawasan hutan atau pegunungan yang menyajikan suasana alam yang asri dan sejuk. Dengan koordinat lintang -8.5597, lokasi ini berada di belahan bumi selatan, sedangkan bujur 116.2792 menunjukkan letaknya di sebelah timur meridian utama, menjadikannya berada di zona waktu WITA (Waktu Indonesia Tengah). Lembah ini kemungkinan memiliki keindahan alam yang khas, mengingat wilayah sekitarnya memiliki topografi lembah yang sering dihiasi oleh vegetasi hijau dan aliran sungai kecil.",
  },
];

export const fasilitas: fasility[] = [
  {
    title: "Trash",
    desc: "Fasilitas tempat sampah yang tersedia untuk menjaga kebersihan lingkungan dan mendukung pengelolaan sampah yang lebih baik.",

    icon: () => <FaTrash className="text-green-700 w-11 h-11" />,
  },
  {
    title: "Listrik",
    desc: "Fasilitas listrik yang tersedia mendukung operasional serta memberikan kenyamanan bagi pengguna fasilitas umum.",

    icon: () => <FaBolt className="text-yellow-500 w-11 h-11" />,
  },
  {
    title: "Air",
    desc: "Fasilitas air bersih untuk memenuhi kebutuhan pengguna, memastikan kenyamanan dan kesehatan lingkungan.",

    icon: () => <FaHandHoldingWater  className="text-blue-500 w-11 h-11" />,
  },
  {
    title: "Mushola",
    desc: "Fasilitas mushola disediakan untuk mendukung kegiatan ibadah bagi pengguna dengan nyaman dan tenang.",

    icon: () => <FaMosque className="text-green-700 w-11 h-11" />,
  },
  {
    title: "Toilet",
    desc: "Fasilitas toilet yang bersih dan nyaman, dirancang untuk mendukung kebutuhan sanitasi pengguna.",

    icon: () => <FaToilet className="text-gray-500 w-11 h-11" />,
  },
  {
    title: "WiFi",
    desc: "Nikmati akses WiFi gratis dengan koneksi cepat dan stabil, dirancang untuk mendukung kebutuhan Anda selama berada di sini",

    icon: () => <IoWifi className="text-yellow-500 w-11 h-11" />,
  },
  {
    title: "Penerangan",
    desc: "Fasilitas penerangan yang terang dan efisien, dirancang untuk mendukung kenyamanan dan keamanan pengguna",

    icon: () => <FaLightbulb className="text-yellow-400 w-11 h-11" />,
  },
];
