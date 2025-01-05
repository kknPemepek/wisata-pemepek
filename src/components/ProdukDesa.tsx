import produkDesa from "../assets/produkDesa.jpg";
const ProdukDesa = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 md:space-y-5 lg:grid-cols-2 lg:space-y-0 lg:space-x-5">
      <div>
        <img src={produkDesa} alt="" />
      </div>
      <div className="mt-4 md:mt-0">
        <h1 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
          Produk Lokal Desa Pemepek
        </h1>
        <p className="element-scroll  lg:h-[340px] overflow-auto text-gray-600 text-sm md:text-base">
          Desa Pemepek memiliki beragam produk lokal yang mencerminkan kekayaan
          alam dan budaya masyarakatnya. Sebagai desa yang mayoritas penduduknya
          berprofesi sebagai petani, hasil bumi menjadi salah satu andalan
          utama. Padi, jagung, dan kacang-kacangan adalah contoh hasil pertanian
          yang melimpah, berkat tanah yang subur dan teknik bercocok tanam yang
          diwariskan secara turun-temurun. Selain itu, hasil pertanian lainnya
          seperti sayuran segar dan buah-buahan tropis juga turut menjadi sumber
          pendapatan bagi masyarakat. Tak hanya sektor pertanian, Desa Pemepek
          juga memiliki produk kerajinan tangan yang sarat akan nilai budaya.
          Salah satu yang terkenal adalah kain tenun tradisional khas Lombok,
          yang dibuat dengan tangan menggunakan alat tenun sederhana. Setiap
          helai kain mencerminkan keindahan motif tradisional yang diwariskan
          dari generasi ke generasi, sering kali terinspirasi oleh alam dan
          kehidupan sehari-hari. Produk tenun ini tidak hanya digunakan dalam
          upacara adat, tetapi juga diminati oleh pasar luar sebagai suvenir
          khas daerah. Keberadaan hasil bumi yang melimpah dan kerajinan tangan
          yang bernilai seni tinggi menjadikan produk lokal Desa Pemepek sebagai
          identitas yang kuat dan sumber kebanggaan bagi masyarakatnya.
        </p>
      </div>
    </div>
  );
};

export default ProdukDesa;
