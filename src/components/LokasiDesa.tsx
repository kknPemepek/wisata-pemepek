import React from "react";

const LokasiDesa: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
      {/* Map Section */}
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63123.5808574029!2d116.22949425426182!3d-8.574467225285208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc829e16adfbf%3A0x5a3d28b1b91015fc!2sPemepek%2C%20Kec.%20Pringgarata%2C%20Kabupaten%20Lombok%20Tengah%2C%20Nusa%20Tenggara%20Bar.!5e0!3m2!1sid!2sid!4v1735458453629!5m2!1sid!2sid"
          width="100%"
          height="450"
          className="rounded shadow-md"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Desa"
        ></iframe>
      </div>

      {/* Description Section */}
      <div className=" justify-center">
        <h1 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
          Lokasi Desa
        </h1>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          Desa Pemepek terletak di Kecamatan Pringgarata, Kabupaten Lombok
          Tengah, Provinsi Nusa Tenggara Barat (NTB). Secara geografis, desa ini
          berada pada koordinat -8.603998 lintang selatan dan 116.236373 bujur
          timur. Lokasi Desa Pemepek memiliki akses strategis yang
          menghubungkannya dengan wilayah sekitar, termasuk Praya, ibu kota
          Kabupaten Lombok Tengah. Desa ini juga dekat dengan beberapa destinasi
          wisata populer di Lombok, menjadikannya lokasi yang mudah dijangkau
          dan memiliki nilai geografis yang penting.
        </p>
      </div>
    </div>
  );
};

export default LokasiDesa;
