import { FaCampground, FaMountainSun } from "react-icons/fa6";
import { FaCameraRetro } from "react-icons/fa";
import { MdOutlinePool } from "react-icons/md";
import { MdFamilyRestroom } from "react-icons/md";
import { activity, fasility, located, Package, ProfilWisataProps } from "./type";
import { FaTrash, FaBolt, FaMosque, FaToilet, FaHandHoldingWater } from "react-icons/fa";


import pa1 from "../assets/pindahAlam/pa1.jpeg";
import pa2 from "../assets/pindahAlam/pa2.jpeg";
import pa3 from "../assets/pindahAlam/pa3.jpeg";
import pa4 from "../assets/pindahAlam/pa4.jpeg";
import pa5 from "../assets/pindahAlam/pa5.jpeg";

import a from "../assets/pindahAlam/A.png";
import b from "../assets/pindahAlam/B.png";
import c from "../assets/pindahAlam/C.png";
import d from "../assets/pindahAlam/D.png";
import e from "../assets/pindahAlam/E.png";

export const profilWisata: ProfilWisataProps[] = [
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

export const aktivitas: activity[] = [
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
  {
    title: "Family Gathering",
    desc: `Nikmati momen kebersamaan tak terlupakan di Pindah Alam! Suasana asri dan keindahan alamnya sempurna untuk acara keluarga Anda`,

    icon: () => <MdFamilyRestroom className="text-indigo-700 w-11 h-11" />,
  },
];

export const galleryImages = [pa1, pa2, pa3, pa4, pa5];

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
];

export const lokasi: located[] = [
    {
      sumber: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.392198459638!2d116.26420527613372!3d-8.57392025815264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc9004d6a0d61%3A0x2617d50aa0703ee8!2sPindah%20Alam%20Camping%20Ground!5e1!3m2!1sid!2sid!4v1736522502622!5m2!1sid!2sid`,
      title: "Pindah Alam",
      desc: `Wisata Pindah Alam yang terletak di Dusun Cerorong Selatan, Desa Pemepek, Kecamatan Pringgarata, Kabupaten Lombok Tengah, merupakan destinasi yang menawarkan keindahan alam khas pedesaan dengan suasana tenang dan udara segar. Dikelilingi oleh hamparan sawah, perbukitan, serta pepohonan hijau, tempat ini menjadi pilihan ideal untuk bersantai dan melepas penat dari hiruk-pikuk perkotaan. Wisatawan dapat menikmati berbagai kegiatan seperti berfoto di spot-spot dengan latar belakang alam yang indah, bersantai di gazebo yang tersedia, atau mengadakan piknik bersama keluarga. Selain itu, lokasi ini juga memiliki potensi untuk aktivitas camping, memberikan pengalaman wisata yang lebih mendalam. Dengan akses yang relatif mudah, Pindah Alam menjadi salah satu destinasi wisata yang cocok untuk menikmati keindahan dan ketenangan alam Lombok Tengah.`,
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
   
  ];
