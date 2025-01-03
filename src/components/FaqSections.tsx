import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Di mana lokasi Desa Pemepek?",
    answer:
      "Desa Pemepek terletak di Kabupaten Lombok Tengah, Provinsi Nusa Tenggara Barat, Indonesia.",
  },
  {
    question: "Apa yang bisa dilakukan di Wisata Pindah Alam?",
    answer:
      "Wisata Pindah Alam adalah camping ground yang menawarkan pemandangan alam yang indah. Pengunjung bisa berkemah, menikmati udara segar, dan melakukan kegiatan outdoor seperti hiking.",
  },
  {
    question: "Bagaimana cara menuju Wisata Pindah Alam?",
    answer:
      "Anda bisa menuju Wisata Pindah Alam dengan berkendara sekitar 30 menit dari pusat Desa Pemepek, menggunakan kendaraan yang sesuai dengan medan.",
  },
  {
    question: "Apa yang bisa dilakukan di Camping Ground Lembah Datu?",
    answer:
      "Camping Ground Lembah Datu adalah tempat yang ideal untuk berkemah. Selain itu, pengunjung dapat menikmati trekking, berfoto dengan latar belakang pemandangan alam, dan menikmati suasana yang tenang.",
  },
  {
    question: "Apakah ada biaya masuk untuk Wisata Pindah Alam?",
    answer:
      "Ya, Wisata Pindah Alam memiliki tiket masuk yang terjangkau, dan pengunjung juga harus membayar biaya parkir di lokasi camping ground.",
  },
  {
    question: "Apakah camping ground di Lembah Datu menyediakan fasilitas tenda?",
    answer:
      "Ya, Camping Ground Lembah Datu menyediakan fasilitas tenda yang dapat disewa oleh pengunjung yang tidak membawa tenda sendiri.",
  },
  {
    question: "Apakah Camping Ground Pindah Alam menyediakan fasilitas tenda?",
    answer:
      "Ya, Camping Ground Pindah Alam menyediakan tenda yang sudah dipersiapkan untuk pengunjung yang ingin berkemah tanpa perlu membawa tenda sendiri.",
  },
  {
    question: "Apa waktu terbaik untuk mengunjungi Camping Ground Pindah Alam?",
    answer:
      "Waktu terbaik untuk berkemah di Pindah Alam adalah saat musim kemarau, antara bulan April hingga Oktober, karena cuaca lebih stabil dan jalur trekking lebih mudah dilalui.",
  },
  {
    question: "Apakah ada fasilitas penginapan di sekitar Camping Ground Lembah Datu?",
    answer:
      "Di sekitar Camping Ground Lembah Datu tidak ada penginapan permanen, tetapi Anda bisa berkemah di lokasi atau mencari homestay di sekitar Kabupaten Lombok Tengah.",
  },
  {
    question: "Bagaimana kondisi jalur menuju Camping Ground Pindah Alam?",
    answer:
      "Jalur menuju Camping Ground Pindah Alam cukup menantang dengan jalan berbatu dan sedikit curam, sehingga disarankan menggunakan kendaraan yang tepat.",
  },
  {
    question: "Apakah ada tempat makan di sekitar Camping Ground Pindah Alam?",
    answer:
      "Di sekitar Camping Ground Pindah Alam, terdapat beberapa warung makan yang menyajikan makanan lokal khas Lombok seperti nasi ayam dan sate bulayak.",
  },
  {
    question: "Apakah Camping Ground Lembah Datu cocok untuk keluarga?",
    answer:
      "Ya, Camping Ground Lembah Datu cocok untuk keluarga yang ingin menikmati alam terbuka, melakukan kegiatan berkemah, dan berinteraksi dengan alam.",
  },
  {
    question: "Apakah Camping Ground Pindah Alam menyediakan fasilitas toilet?",
    answer:
      "Ya, Camping Ground Pindah Alam menyediakan fasilitas toilet umum untuk pengunjung yang berkemah.",
  },
  {
    question: "Apakah Wisata Kelicung cocok untuk anak-anak?",
    answer:
      "Ya, Wisata Kelicung cocok untuk anak-anak, terutama yang suka bermain air atau menikmati keindahan alam yang tenang.",
  },
  {
    question: "Apakah ada fasilitas toilet di Wisata Kelicung?",
    answer:
      "Wisata Kelicung memiliki fasilitas dasar seperti tempat parkir dan toilet umum untuk pengunjung.",
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

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-center text-green-400  mb-10">
          Frequently Asked Questions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="faq-item border border-gray-300 rounded-md overflow-hidden"
            >
              <button
                className={`w-full flex justify-between space-x-5 h-20 items-center p-4 bg-white focus:outline-none transition-all duration-500 ${
                  activeIndex === index ? "border-blue-500" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-gray-800 font-semibold">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-600 transition-transform transform ${
                    activeIndex === index ? "rotate-180 duration-500 text-green-600" : "duration-500"
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
              </button>
              <div
                className={`faq-content bg-gray-50 overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-4 text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSections;
