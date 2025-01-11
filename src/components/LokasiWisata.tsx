type located = {
  sumber: string;
  title: string;
  desc: string;
};

const LokasiWisata: React.FC<located> = ({ sumber, title, desc }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        {/* Map Section */}
        <div className="flex justify-center">
          <iframe
            src={sumber}
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
        <div className=" justify-center ">
          <h1 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
            {title}
          </h1>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LokasiWisata;
