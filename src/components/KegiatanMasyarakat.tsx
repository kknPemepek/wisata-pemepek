import kegiatanDesa from "../assets/kegiatanDesa.jpg";

const KegiatanMasyarakat = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 md:space-y-5 lg:grid-cols-2 lg:space-y-0 lg:space-x-5">
      <div className="lg:hidden flex justify-center">
        <img src={kegiatanDesa} alt="" />
      </div>
      <div className="mt-4 md:mt-0">
        <h1 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
          Kegiatan Masyarakat di Desa Pemepek
        </h1>
        <p className="element-scroll  lg:h-[245px] overflow-auto text-gray-600 text-sm md:text-base">
          Masyarakat Desa Pemepek sebagian besar menggantungkan hidupnya pada
          sektor agraris, terutama bertani di sawah dan ladang. Setiap pagi,
          warga dengan semangat memulai aktivitas mereka, seperti menanam padi,
          memanen hasil bumi, atau mengelola kebun. Pemandangan petani yang
          bekerja bersama di sawah dengan latar belakang perbukitan menciptakan
          suasana khas pedesaan yang harmonis dan penuh kebersamaan. Selain
          kegiatan agraris, masyarakat Desa Pemepek juga aktif melestarikan
          tradisi lokal yang kaya akan nilai budaya. Salah satu tradisi yang
          masih sering dilakukan adalah upacara adat, seperti ritual syukuran
          panen yang diiringi dengan musik tradisional. Kegiatan seni budaya
          lainnya yang menjadi daya tarik adalah pertunjukan gendang beleq, di
          mana warga memainkan alat musik tradisional Lombok secara berkelompok
          untuk merayakan acara tertentu atau menyambut tamu kehormatan. Tak
          hanya itu, Desa Pemepek juga dikenal dengan permainan tradisionalnya
          yang masih dimainkan hingga kini, seperti permainan gasing. Permainan
          ini menjadi aktivitas favorit di kalangan anak-anak dan orang dewasa,
          terutama saat ada acara desa atau sekadar mengisi waktu luang. Gasing,
          yang terbuat dari kayu dengan bentuk unik, dimainkan dengan penuh
          keterampilan dan strategi untuk memastikan putarannya bertahan lama.
          Aktivitas ini mencerminkan semangat kebersamaan dan pelestarian budaya
          lokal yang terus dijaga oleh masyarakat desa. Harmoni antara kehidupan
          agraris, pelestarian tradisi, dan permainan tradisional membuat Desa
          Pemepek menjadi desa yang unik dan penuh makna.
        </p>
      </div>
      <div className="lg:block hidden">
        <img src={kegiatanDesa} alt="" />
      </div>
    </div>
  );
};

export default KegiatanMasyarakat;
