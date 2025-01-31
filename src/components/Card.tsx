import { MdArrowForward } from "react-icons/md";

import { useNavigate } from "react-router-dom";
const Card = () => {
  const navigate = useNavigate();
  const cardItem = [
    {
      id: 1,
      title: "Pindah Alam",
      description:
        "Pindah Alam adalah destinasi wisata yang menyuguhkan keindahan alam, udara segar, dan ketenangan, sempurna untuk melepas penat dan menikmati suasana asri",
      image:
        "https://res.cloudinary.com/dbuhlpg8k/image/upload/v1735473192/PA1_cfxpvu.jpg",
      navigate: "/pindah-alam",
    },
    {
      id: 2,
      title: "Lembah Datu",
      description:
        "Lembah Datu menyajikan pemandangan pegunungan indah, udara sejuk, dan suasana tenang, menjadikannya tempat yang sempurna untuk bersantai bersama keluarga.",
      image:
        "https://res.cloudinary.com/dbuhlpg8k/image/upload/v1735709492/ld2_ktorxb.jpg",
      navigate: "/lembah-datu",
    },
    {
      id: 3,
      title: "KHDTK Rarung",
      description:
        "KHDTK Rarung menyajikan pemandangan alam menakjubkan, hutan hijau sejuk, serta agrowisata, menawarkan pengalaman budaya dan tradisi lokal yang otentik dan memikat hati",
      image:
        "https://res.cloudinary.com/dbuhlpg8k/image/upload/v1735715527/steven-kamenar-MMJx78V7xS8-unsplash_aabycx.jpg",
      navigate: "/wisata-kelicung",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardItem.map((item) => {
        return (
          <div
            key={item.id}
            className="card bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden"
          >
            <figure>
              <img
                src={item.image}
                alt="Shoes"
                className="w-full h-60 object-cover"
              />
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-lg md:text-xl font-bold text-green-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base sm:h-[140px] sm:leading-relaxed  lg:h-[160px]">
                {item.description}
              </p>
              <div className="flex justify-center pt-10">
                <button
                  onClick={() => navigate(item.navigate)}
                  className="text-sm md:text-base text-green-600 bg-green-50 py-2 px-7 rounded-md shadow hover:bg-green-100 transition md:px-6 md:py-3 justify-center flex items-center space-x-3"
                >
                  <p>Selengkapnya</p>
                  <MdArrowForward />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
