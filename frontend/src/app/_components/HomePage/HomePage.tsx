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
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "800px",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex w-full h-[800px] p-0 gap-0 relative "
      >
        <p className="absolute top-[276px] w-[504px] text-white font-poppins text-[55px] font-semibold leading-[90%] tracking-[0.55px] pl-[120px]">
          Pinecone Food delivery
        </p>
        <p className="absolute top-[380px] text-white text-xl font-bold pl-[120px]">
          Өөрийн дуртай хоолоо бидэнд захиалаарай!
        </p>
        <div className="absolute top-[120px] right-[270px] w-auto h-auto">
          <Image
            src="/Images/BigCook.svg"
            alt="BigCook"
            width={443}
            height={438}
          />
        </div>
        <div className="absolute top-[225px] right-[120px] w-auto h-auto">
          <Image
            src="/Images/SmallCook.svg"
            alt="SmallCook"
            width={313}
            height={313}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 w-full h-auto p-[120px] container m-auto">
        <div className="flex flex-col w-[267px] h-[155px] p-4 gap-[15px] rounded-2xl shadow-md hover:shadow-xl cursor-pointer">
          <div className="items-start p-[15px]">
            <FastDeliveryCardBookIcon />
          </div>
          <div className="flex flex-col">
            <p className="text-text-secondary font-poppins text-22 font-bold leading-normal">
              Хүргэлтийн төлөв хянах
            </p>
            <p className="text-sm font-normal font-sf-pro leading-normal text-[#272727]">
              Захиалга ба бэлтгэлийн явцыг хянах
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[267px] h-[155px] p-4 gap-[15px] rounded-2xl shadow-md hover:shadow-xl cursor-pointer">
          <div className="items-start p-[15px]">
            <FastDeliveryCardTimeIcon />
          </div>
          <div className="flex flex-col">
            <p className="text-text-secondary font-poppins text-22 font-bold leading-normal">
              Шуурхай хүргэлт
            </p>
            <p className="text-sm font-normal font-sf-pro leading-normal text-[#272727]">
              Захиалга бэлтгэлийн явцыг хянах
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[267px] h-[155px] p-4 gap-[15px] rounded-2xl shadow-md hover:shadow-xl cursor-pointer">
          <div className="items-start p-[15px]">
            <FastDeliveryCardVegetableIcon />
          </div>
          <div className="flex flex-col">
            <p className="text-text-secondary font-poppins text-22 font-bold leading-normal">
              Эрүүл, баталгаат орц
            </p>
            <p className="text-sm font-normal font-sf-pro leading-normal text-[#272727]">
              Захиалга бэлтгэлийн явцыг хянах
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[267px] h-[155px] p-4 gap-[15px] rounded-2xl shadow-md hover:shadow-xl cursor-pointer">
          <div className="items-start p-[15px]">
            <FastDeliveryCardBookIcon />
          </div>
          <div className="flex flex-col">
            <p className="text-text-secondary font-poppins text-22 font-bold leading-normal">
              Хоолны өргөн сонголт
            </p>
            <p className="text-sm font-normal font-sf-pro leading-normal text-[#272727]">
              Захиалга ба бэлтгэлийн явцыг хянах
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col px-[120px] gap-6 container m-auto">
        <div className="flex justify-between py-4">
          <div className="flex text-text-secondary font-poppins text-22 font-bold leading-normal gap-1">
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
        <div className="h-auto grid grid-cols-4 grid-rows-1 gap-6 container">
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
      </div>
    </div>
  );
};

export default HomePage;
