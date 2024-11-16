"use client";
import { useEffect } from "react";
import * as React from "react";
import {
  FastDeliveryCardBookIcon,
  FastDeliveryCardTimeIcon,
  FastDeliveryCardVegetableIcon,
  RoadMoreIcon,
} from "../../public/Icons/Icons";
import Image from "next/image";
import ItemCard from "./_components/ItemCard";

export default function Home() {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col w-full h-auto">
      <div
        style={{
          backgroundImage: `url(${"background.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "545px",
        }}
        className="flex w-full h-[788px] bg-[#18BA51] p-0 gap-0"
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
      <div className="grid grid-cols-4 w-full h-auto p-[120px]">
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
      <div className="w-full h-auto flex flex-col px-[120px] gap-6">
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
        <div className="flex w-full h-auto gap-6">
          <ItemCard
            name="Өглөөний хоол"
            price={14800} // price нь тоон төрөлтэй байна
            imageUrl="/Images/food1.jpeg"
          />
          <ItemCard
            name="Зайрмаг"
            price={4800} // price нь тоон төрөлтэй байна
            imageUrl="/Images/food2.jpeg"
          />
          <ItemCard
            name="Өглөөний хоол"
            price={24800} // price нь тоон төрөлтэй байна
            imageUrl="/Images/food.png"
          />
          <ItemCard
            name="Breakfast"
            price={27000} // price нь тоон төрөлтэй байна
            imageUrl="/Images/food3.png"
          />
        </div>
      </div>
    </div>
  );
}
