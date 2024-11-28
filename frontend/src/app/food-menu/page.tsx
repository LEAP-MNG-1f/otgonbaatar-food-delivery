"use client";
import { useEffect, useState } from "react";
import ItemCard from "../_components/ItemCard";

type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
};

type ApiResponse = {
  success: boolean;
  data: Food[];
};

const FoodMenu = () => {
  const [foodDatas, setFoodDatas] = useState<Food[]>([]);
  const [activeButton, setActiveButton] = useState("breakfast");

  const handleClick = (button: string) => {
    setActiveButton(button);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/foods`
      );
      const data: ApiResponse = await response.json();
      setFoodDatas(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full h-auto container">
      <div className="flex w-full py-8 gap-6 px-[120px]">
        <button
          className={`w-[280px] py-2 px-4 bg-white text-black text-lg font-medium rounded-lg border border-[#D6D8DB] duration-300
          ${
            activeButton === "breakfast"
              ? "bg-[#18BA55] text-white"
              : "hover:border-[#18BA51] hover:text-[#18BA51] hover:shadow-sm"
          }`}
          onClick={() => handleClick("breakfast")}
        >
          Breakfast
        </button>
        <button
          className={`w-[280px] py-2 px-4 bg-white text-black text-lg font-medium rounded-lg border border-[#D6D8DB] duration-300
          ${
            activeButton === "soup"
              ? "bg-[#18BA55] text-white"
              : "hover:border-[#18BA51] hover:text-[#18BA51] hover:shadow-sm"
          }`}
          onClick={() => handleClick("soup")}
        >
          Soup
        </button>
        <button
          className={`w-[280px] py-2 px-4 bg-white text-black text-lg font-medium rounded-lg border border-[#D6D8DB] duration-300
          ${
            activeButton === "mainCourse"
              ? "bg-[#18BA55] text-white"
              : "hover:border-[#18BA51] hover:text-[#18BA51] hover:shadow-sm"
          }`}
          onClick={() => handleClick("mainCourse")}
        >
          Main Course
        </button>
        <button
          className={`w-[280px] py-2 px-4 bg-white text-black text-lg font-medium rounded-lg border border-[#D6D8DB] duration-300
          ${
            activeButton === "dessert"
              ? "bg-[#18BA55] text-white"
              : "hover:border-[#18BA51] hover:text-[#18BA51] hover:shadow-sm"
          }`}
          onClick={() => handleClick("dessert")}
        >
          Dessert
        </button>
      </div>
      <div className="grid grid-cols-4 grid-rows-none w-auto h-auto gap-6 px-[120px]">
        {foodDatas.map((data) => {
          return (
            <div key={data._id}>
              <ItemCard
                name={data.name}
                price={data.price}
                imageUrl={data.image}
              />
            </div>
          );
        })}

        {/* <ItemCard name="Зайрмаг" price={4800} imageUrl="/Images/food2.jpeg" />
        <ItemCard
          name="Өглөөний хоол"
          price={24800}
          imageUrl="/Images/food.png"
        />
        <ItemCard name="Breakfast" price={27000} imageUrl="/Images/food3.png" />
        <ItemCard name="Breakfast" price={27000} imageUrl="/Images/food3.png" />
        <ItemCard name="Breakfast" price={27000} imageUrl="/Images/food3.png" /> */}
      </div>
    </div>
  );
};
export default FoodMenu;
