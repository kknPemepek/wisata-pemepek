
interface Fasilitas {
  title: string;
  desc: string;
  Icon:React.FC
}
const FasilitasWisata:React.FC<Fasilitas> = ({title, desc, Icon}) => {
  return (
    <>
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <figure>
          <div className="flex items-center justify-center pt-10">
            <Icon />
          </div>
        </figure>
        <div className="p-4">
          <h2 className=" font-semibold text-green-400 text-base md:text-lg text-center">
            {title}
          </h2>
          <p className="text-gray-600 mt-2 text-xs md:text-sm text-center">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default FasilitasWisata;
