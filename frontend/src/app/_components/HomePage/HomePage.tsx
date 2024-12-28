import Image from "next/image";
import {
  FastDeliveryCardBookIcon,
  FastDeliveryCardTimeIcon,
  FastDeliveryCardVegetableIcon,
  RoadMoreIcon,
} from "../../../../public/Icons/Icons";
import ItemCard from "../ItemCard/ItemCard";
import ItemCardDetail from "../ItemCard/ItemCardDetail";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredient: string;
};

const HomePage = ({
  isModalOpenFood,
  setIsModalOpen,
  foodData,
  isLoading,
}: {
  isModalOpenFood: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  foodData: Food[];
  isLoading: boolean;
}) => {
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);

  return (
    <div className="flex flex-col w-full h-auto mb-14">
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] md:h-[600px] lg:h-[800px] flex p-0 gap-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-[120px] relative">
          <h1 className="absolute top-[30%] text-white font-poppins text-3xl md:text-[45px] lg:text-[55px] font-semibold leading-[90%] tracking-[0.55px]">
            Pinecone Food delivery
          </h1>
          <p className="absolute top-[45%] text-white text-lg md:text-xl font-bold">
            Өөрийн дуртай хоолоо бидэнд захиалаарай!
          </p>

          <div className="hidden md:block absolute top-[120px] right-[20%] lg:right-[270px]">
            <Image
              src="/Images/BigCook.svg"
              alt="BigCook"
              width={343}
              height={338}
              className="w-auto h-auto md:w-[343px] lg:w-[443px]"
            />
          </div>
          <div className="hidden md:block absolute top-[225px] right-[10%] lg:right-[120px]">
            <Image
              src="/Images/SmallCook.svg"
              alt="SmallCook"
              width={213}
              height={213}
              className="w-auto h-auto md:w-[213px] lg:w-[313px]"
            />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 md:px-8 lg:px-[120px] py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FastDeliveryCardBookIcon />,
              title: "Хүргэлтийн төлөв хянах",
              description: "Захиалга ба бэлтгэлийн явцыг хянах",
            },
            {
              icon: <FastDeliveryCardTimeIcon />,
              title: "Шуурхай хүргэлт",
              description: "Захиалга бэлтгэлийн явцыг хянах",
            },
            {
              icon: <FastDeliveryCardVegetableIcon />,
              title: "Эрүүл, баталгаат орц",
              description: "Захиалга бэлтгэлийн явцыг хянах",
            },
            {
              icon: <FastDeliveryCardBookIcon />,
              title: "Хоолны өргөн сонголт",
              description: "Захиалга ба бэлтгэлийн явцыг хянах",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col p-4 gap-[15px] rounded-2xl shadow-md hover:shadow-xl cursor-pointer"
            >
              <div className="items-start p-[15px]">{feature.icon}</div>
              <div className="flex flex-col">
                <p className="text-text-secondary font-poppins text-xl md:text-22 font-bold leading-normal">
                  {feature.title}
                </p>
                <p className="text-sm font-normal font-sf-pro leading-normal text-[#272727]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Food Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center text-text-secondary font-poppins text-xl md:text-22 font-bold leading-normal gap-1">
            <Image
              src="/Icons/Star.svg"
              alt="Food Delivery Logo"
              width={20}
              height={20}
            />
            Хямдралтай
          </div>
          <button className="flex items-center justify-center text-center text-[#18BA51] text-sm font-normal font-sf-pro gap-3">
            Бүгдийг харах
            <RoadMoreIcon />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {isLoading
            ? Array.from({ length: 12 }).map((_, index) => (
                <ItemCard key={index} isLoading={true} />
              ))
            : foodData.map((food) => (
                <div
                  key={food?._id}
                  role="button"
                  onClick={() => {
                    setSelectedFood(food);
                    setIsModalOpen(true);
                  }}
                  className="w-auto"
                >
                  <ItemCard
                    name={food?.name}
                    price={food?.price}
                    imageUrl={food?.image}
                  />
                </div>
              ))}
        </div>
      </div>

      {isModalOpenFood && selectedFood && (
        <ItemCardDetail
          selectedFood={selectedFood}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        style={{ zIndex: 9999 }}
      />
    </div>
  );
};

export default HomePage;
