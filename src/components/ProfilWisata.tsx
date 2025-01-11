interface ProfilWisataProps {
  title: string;
  image: string;
  wisataDesc: string;
}

const ProfilWisata: React.FC<ProfilWisataProps> = ({
  title,
  image,
  wisataDesc,
}) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 md:space-y-5 lg:grid-cols-2 lg:space-y-0 lg:space-x-5">
      {/* Bagian Gambar */}
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>

      {/* Bagian Teks */}
      <div className="mt-4 md:mt-0">
        <h1 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
          {title}
        </h1>

        <p className="element-scroll lg:h-[310px] overflow-auto text-gray-600 text-sm md:text-base">
          {wisataDesc}
        </p>
      </div>
    </div>
  );
};

export default ProfilWisata;
