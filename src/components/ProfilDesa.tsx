const ProfilDesa = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 md:space-y-5 lg:grid-cols-2 lg:space-y-0 lg:space-x-5">
      <div>
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="mt-4 md:mt-0">
        <h1 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
          Desa Pemepek
        </h1>
        <p className="  lg:h-auto overflow-auto text-gray-600">
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
