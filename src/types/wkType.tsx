import {
  FaCameraRetro,
  FaCampground,
  FaBookOpenReader,
  FaPersonHiking,
  FaTrash,
  FaToilet,
  FaMosque,
  FaBolt,
} from "react-icons/fa6";
import { activity, fasility, located, ProfilWisataProps } from "./type";
import { GiMeditation } from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr";

import wk1 from "../assets/wisataKelicung/wk1.jpeg";
import wk2 from "../assets/wisataKelicung/wk2.jpeg";
import wk3 from "../assets/wisataKelicung/wk3.jpeg";
import wk4 from "../assets/wisataKelicung/wk4.jpeg";
import wk5 from "../assets/wisataKelicung/wk5.jpeg";
import wk6 from "../assets/wisataKelicung/wk6.jpeg";
import wk7 from "../assets/wisataKelicung/wk7.jpeg";
import wk8 from "../assets/wisataKelicung/wk8.jpeg";
import wk9 from "../assets/wisataKelicung/wk9.jpeg";
import wk10 from "../assets/wisataKelicung/wk10.jpeg";
import wk11 from "../assets/wisataKelicung/wk11.jpeg";
import wk12 from "../assets/wisataKelicung/wk12.jpeg";
import wk13 from "../assets/wisataKelicung/wk13.jpeg";
import wk14 from "../assets/wisataKelicung/wk14.jpeg";
import wk15 from "../assets/wisataKelicung/wk15.jpeg";
import wk16 from "../assets/wisataKelicung/wk16.jpeg";
import wk17 from "../assets/wisataKelicung/wk17.jpeg";
import wk18 from "../assets/wisataKelicung/wk18.jpeg";
import { FaHandHoldingWater } from "react-icons/fa";

export const profilWisata: ProfilWisataProps[] = [
  {
    id: 1,
    title: "KHDTK Rarung",
    image:
      "https://res.cloudinary.com/dbuhlpg8k/image/upload/v1735715527/steven-kamenar-MMJx78V7xS8-unsplash_aabycx.jpg",
    desc: "Wisata Kelicung adalah destinasi wisata yang menyuguhkan keindahan alam, udara segar, dan ketenangan",
    wisataDesc: `KHDTK Rarung adalah Kawasan Hutan Dengan Tujuan Khusus yang terletak di Desa Pemepek, Dusun Repok Pidendang, Kecamatan Pringgarata, Kabupaten Lombok Tengah, Nusa Tenggara Barat. Kawasan ini memiliki peran penting dalam mendukung kegiatan konservasi, penelitian, pendidikan, serta pemberdayaan masyarakat setempat. Dengan kekayaan keanekaragaman hayati yang meliputi flora dan fauna khas, KHDTK Rarung menjadi salah satu lokasi strategis untuk pelestarian lingkungan. Selain itu, kawasan ini juga berpotensi menjadi pusat penelitian dan pendidikan lingkungan yang mendukung pengembangan ilmu pengetahuan, sekaligus memberikan manfaat ekonomi bagi masyarakat sekitar melalui kegiatan berbasis ekowisata. Keindahan alamnya yang asri dan potensinya yang besar menjadikan KHDTK Rarung sebagai aset penting bagi pembangunan berkelanjutan di Lombok Tengah.`,
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
  wk18,
];

export const lokasi: located[] = [
  {
    sumber: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20384.46379291289!2d116.2933815!3d-8.559401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc9c440459a1d%3A0xc88b73bbcd5aab1!2sKHDTK%20Rarung!5e1!3m2!1sid!2sid!4v1736853405116!5m2!1sid!2sid`,
    title: "KHDTK Rarung",
    desc: `KHDTK Rarung terletak di Dusun Repok Pidendang, Desa Pemepek, kawasan yang tenang dan alami. Dikelilingi pohon kelicung yang rindang, lokasi ini menjadi habitat berbagai satwa, termasuk rusa. Keasrian dan keanekaragaman hayati membuatnya cocok untuk bersantai dan menikmati alam.

Pengunjung dapat menikmati udara segar, trekking ringan, atau sekadar duduk di bawah pepohonan sambil mendengar suara alam. Tersedia fasilitas sederhana seperti gazebo, area bermain anak, dan tempat perkemahan. Selain itu, pengunjung bisa melihat langsung rusa di habitatnya dan membeli produk lokal dari masyarakat sekitar. Wisata Kelicung adalah tempat ideal untuk rekreasi sekaligus belajar mencintai alam`,
  },
];

export const fasilitas: fasility[] = [
  {
    title: "Trash",
    desc: "Fasilitas tempat sampah yang tersedia untuk menjaga kebersihan lingkungan dan mendukung pengelolaan sampah yang lebih baik.",

    icon: () => <FaTrash className="text-green-700 w-11 h-11" />,
  },

  {
    title: "Air",
    desc: "Fasilitas air bersih untuk memenuhi kebutuhan pengguna, memastikan kenyamanan dan kesehatan lingkungan.",

    icon: () => <FaHandHoldingWater className="text-blue-500 w-11 h-11" />,
  },

  {
    title: "Toilet",
    desc: "Fasilitas toilet yang bersih dan nyaman, dirancang untuk mendukung kebutuhan sanitasi pengguna.",

    icon: () => <FaToilet className="text-gray-500 w-11 h-11" />,
  },
  {
      title: "Mushola",
      desc: "Fasilitas mushola disediakan untuk mendukung kegiatan ibadah bagi pengguna dengan nyaman dan tenang.",
  
      icon: () => <FaMosque className="text-green-700 w-11 h-11" />,
    },
    {
        title: "Listrik",
        desc: "Fasilitas listrik yang tersedia mendukung operasional serta memberikan kenyamanan bagi pengguna fasilitas umum.",
    
        icon: () => <FaBolt className="text-yellow-500 w-11 h-11" />,
      },
];
