import profilDesa from '../assets/profilDesa.jpeg'
const ProfilDesa = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 md:space-y-5 lg:grid-cols-2 lg:space-y-0 lg:space-x-5">
      <div>
        <img
          src={profilDesa}
          alt=""
        />
      </div>
      <div className="mt-4 md:mt-0">
        <h1 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
          Desa Pemepek
        </h1>
        <p className="  lg:h-auto overflow-auto text-gray-600 text-sm md:text-base">
          Desa Pemepek, yang terletak di Kecamatan Pringgarata, Kabupaten Lombok
          Tengah, dikelilingi oleh alam yang asri dengan persawahan hijau dan
          pegunungan. Mayoritas penduduknya bekerja di bidang pertanian,
          sementara budaya lokal Sasak tetap terjaga. Desa ini memiliki potensi
          pariwisata, terutama agrowisata dan wisata budaya, menawarkan suasana
          tenang serta pengalaman otentik dengan tradisi dan kuliner khas yang
          menarik bagi pengunjung.
        </p>
      </div>
    </div>
  );
};

export default ProfilDesa;
