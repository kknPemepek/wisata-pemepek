import { useEffect, useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Di mana lokasi Desa Pemepek?",
    answer:
      "Desa Pemepek terletak di Kecamatan Pringgarata, Kabupaten Lombok Tengah, Provinsi Nusa Tenggara Barat, Indonesia.",
  },
  {
    question: "Di mana lokasi Wisata Kelicung?",
    answer:
      "Wisata Kelicung terletak di Dusun Rarung, Desa Pemepek, Kecamatan Pringgarata, Kabupaten Lombok Tengah, Provinsi Nusa Tenggara Barat, Indonesia.",
  },
  {
    question: "Apa yang bisa dilakukan di Wisata Kelicung?",
    answer:
      "Wisata Kelicung adalah tempat yang cocok untuk menikmati keindahan alam, belajar tentang ekosistem, dan mengenal flora serta fauna setempat.",
  },
  {
    question: "Bagaimana cara menuju Wisata Kelicung?",
    answer:
      "Anda bisa menuju Wisata Kelicung dengan kendaraan pribadi atau angkutan lokal dari pusat Desa Pemepek dengan waktu tempuh sekitar 20 menit.",
  },
  {
    question: "Apakah Wisata Kelicung cocok untuk keluarga?",
    answer:
      "Ya, Wisata Kelicung sangat cocok untuk keluarga, terutama yang ingin menikmati suasana tenang dan belajar bersama tentang alam.",
  },
  {
    question: "Apakah Wisata Kelicung menyediakan fasilitas toilet?",
    answer:
      "Ya, Wisata Kelicung menyediakan fasilitas toilet umum untuk kenyamanan pengunjung.",
  },
  {
    question: "Kapan waktu terbaik untuk mengunjungi Wisata Kelicung?",
    answer:
      "Waktu terbaik untuk mengunjungi Wisata Kelicung adalah pada musim kemarau, antara bulan April hingga Oktober, agar perjalanan lebih nyaman.",
  },
  {
    question: "Apakah ada warung makan di Wisata Kelicung?",
    answer:
      "Ya, terdapat beberapa warung makan yang menyajikan makanan lokal untuk para pengunjung Wisata Kelicung.",
  },
  {
    question: "Apakah Wisata Kelicung menyediakan fasilitas edukasi?",
    answer:
      "Ya, Wisata Kelicung memiliki program edukasi seperti pengenalan ekosistem sungai dan pentingnya pelestarian lingkungan.",
  },
  
  // Camping Ground Lembah Datu
  {
    question: "Di mana lokasi Camping Ground Lembah Datu?",
    answer:
      "Camping Ground Lembah Datu terletak di kawasan alam Kabupaten Lombok Tengah, tepatnya di Dusun Gelogor, Desa Pemepek. Lokasi ini dikelilingi oleh pemandangan yang asri dan menenangkan.",
  },
  {
    question: "Apa yang bisa dilakukan di Camping Ground Lembah Datu?",
    answer:
      "Pengunjung dapat berkemah, trekking, menikmati suasana alam, serta berfoto di lokasi yang instagramable.",
  },
  {
    question: "Bagaimana cara menuju Camping Ground Lembah Datu?",
    answer:
      "Anda bisa menuju Camping Ground Lembah Datu dengan kendaraan pribadi, sekitar 25 menit dari pusat Desa Pemepek.",
  },
  {
    question: "Apakah Camping Ground Lembah Datu menyediakan fasilitas tenda?",
    answer:
      "Ya, tenda tersedia untuk disewa oleh pengunjung yang ingin berkemah tanpa membawa perlengkapan sendiri.",
  },
  {
    question: "Apakah ada biaya masuk di Camping Ground Lembah Datu?",
    answer:
      "Ya, ada biaya masuk yang terjangkau dan biaya tambahan untuk menyewa fasilitas tenda atau parkir kendaraan.",
  },
  {
    question: "Kapan waktu terbaik untuk mengunjungi Camping Ground Lembah Datu?",
    answer:
      "Waktu terbaik untuk berkemah adalah saat musim kemarau, antara bulan April hingga Oktober, untuk pengalaman yang lebih nyaman.",
  },
  {
    question: "Apakah ada tempat makan di sekitar Camping Ground Lembah Datu?",
    answer:
      "Ya, terdapat warung makan di sekitar area yang menyediakan makanan lokal khas Lombok.",
  },
  {
    question: "Apakah Camping Ground Lembah Datu cocok untuk anak-anak?",
    answer:
      "Ya, tempat ini cocok untuk anak-anak yang ingin merasakan pengalaman berkemah dan belajar tentang alam.",
  },

  // Camping Ground Pindah Alam
  {
    question: "Di mana lokasi Camping Ground Pindah Alam?",
    answer:
      "Camping Ground Pindah Alam berada di kawasan Dusun Cerorong Selatan, Desa Pemepek, Kabupaten Lombok Tengah.",
  },
  {
    question: "Apa yang bisa dilakukan di Camping Ground Pindah Alam?",
    answer:
      "Pengunjung dapat berkemah, trekking, dan menikmati pemandangan alam serta udara segar.",
  },
  {
    question: "Bagaimana cara menuju Camping Ground Pindah Alam?",
    answer:
      "Jalur menuju lokasi dapat ditempuh sekitar 15 menit dari pusat Desa Pemepek dengan kendaraan pribadi.",
  },
  {
    question: "Apakah Camping Ground Pindah Alam menyediakan fasilitas toilet?",
    answer:
      "Ya, fasilitas toilet tersedia untuk kenyamanan pengunjung yang berkemah.",
  },
  {
    question: "Apakah Camping Ground Pindah Alam menyediakan fasilitas tenda?",
    answer:
      "Ya, Camping Ground Pindah Alam menyediakan tenda untuk pengunjung yang ingin berkemah tanpa membawa perlengkapan sendiri.",
  },
  {
    question: "Kapan waktu terbaik untuk mengunjungi Camping Ground Pindah Alam?",
    answer:
      "Musim kemarau, antara bulan April hingga Oktober, adalah waktu terbaik untuk berkemah di Camping Ground Pindah Alam.",
  },
  {
    question: "Apakah ada biaya masuk untuk Camping Ground Pindah Alam?",
    answer:
      "Ya, terdapat biaya masuk yang terjangkau serta tambahan biaya untuk menyewa fasilitas seperti tenda atau parkir.",
  },
  {
    question: "Apakah Camping Ground Pindah Alam cocok untuk keluarga?",
    answer:
      "Ya, tempat ini cocok untuk keluarga yang ingin menikmati suasana alam dan melakukan aktivitas berkemah bersama.",
  },
  {
    question: "Bagaimana cuaca di Desa Pemepek?",
    answer:
      "Desa Pemepek memiliki iklim tropis dengan musim hujan antara bulan November hingga Maret dan musim kemarau antara bulan April hingga Oktober.",
  },
];

const FaqSections = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <h1 className="text-xl md:text-2xl font-bold text-center text-green-400  mb-10">
          Frequently Asked Questions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item border border-gray-300 rounded-md overflow-hidden ${
                activeIndex === index ? "border-green-400" : ""
              }`}
            >
              <button
                className={`w-full flex justify-between space-x-5 h-20 items-center p-4 bg-white focus:outline-none transition-all duration-500 ${
                  activeIndex === index ? "" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-gray-800 w-full font-semibold text-sm md:text-base ">
                  {item.question}
                </span>
                <span>
                  <svg
                    className={`w-4 h-4 text-gray-600 transition-transform transform text-sm md:text-base ${
                      activeIndex === index
                        ? "rotate-180 duration-500 text-green-600"
                        : "duration-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    ></path>
                  </svg>
                </span>
              </button>
              <div
                className={`faq-content bg-gray-50 overflow-hidden transition-all duration-500 ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-4 text-gray-600 text-sm md:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSections;
