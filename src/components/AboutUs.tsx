import tentangDesa from '../assets/aboutDesa.jpg'

const AboutUs = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 md:space-y-5 lg:grid-cols-2 lg:space-y-0 lg:space-x-5">
      <div>
        <img src={tentangDesa} alt="" />
      </div>
      <div className="mt-4 md:mt-0">
        <h1 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
          Desa Pemepek
        </h1>
        <p className="element-scroll  lg:h-[269px] overflow-auto text-gray-600 text-sm md:text-base">
          Desa Pemepek adalah salah satu desa yang terletak di Kecamatan
          Pringgarata, Kabupaten Lombok Tengah, Provinsi Nusa Tenggara Barat.
          Desa ini berada di wilayah yang strategis, diapit oleh pemandangan
          alam yang menawan, seperti persawahan yang hijau dan perbukitan yang
          asri. Desa Pemepek juga merupakan bagian dari kawasan yang kaya akan
          tradisi dan budaya khas Sasak. Nama "Pemepek" diyakini berasal dari
          istilah lokal yang memiliki makna mendalam, mencerminkan kekayaan alam
          dan kehidupan masyarakat yang harmonis dengan lingkungan. Desa ini
          memiliki sejarah panjang sebagai salah satu pusat aktivitas masyarakat
          agraris, dengan pertanian sebagai sektor utama mata pencaharian
          warganya. Selain dikenal dengan potensi pertanian, Desa Pemepek juga
          memiliki tradisi adat dan budaya yang masih dilestarikan, seperti
          ritual keagamaan, seni musik tradisional, dan kerajinan khas yang
          menjadi identitas masyarakat setempat. Dengan nilai-nilai kearifan
          lokal yang dijunjung tinggi, Desa Pemepek menjadi salah satu desa yang
          berperan penting dalam pembangunan Kabupaten Lombok Tengah.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
