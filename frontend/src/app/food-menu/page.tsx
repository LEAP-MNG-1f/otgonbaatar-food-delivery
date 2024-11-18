"use client";
import { useState } from "react";
import ItemCard from "../_components/ItemCard";

const FoodMenu = () => {
  const [activeButton, setActiveButton] = useState("breakfast");

  const handleClick = (button: string) => {
    // console.log(button);
    setActiveButton(button);
  };

  return (
    <div className="flex flex-col w-full h-auto">
      <div className="flex w-full py-8 gap-6 px-[120px]">
        <button
          className={`w-[280px] py-2 px-4 bg-white text-black text-lg font-medium rounded-lg border border-[#D6D8DB] 
          ${
            activeButton === "breakfast"
              ? "bg-[#18BA54] text-white"
              : "hover:border-[#18BA51] hover:text-black hover:shadow-sm"
          }`}
          onClick={() => handleClick("breakfast")}
        >
          Breakfast
        </button>
        <button
          className={`w-[280px] py-2 px-4 bg-white text-black text-lg font-medium rounded-lg border border-[#D6D8DB] 
          ${
            activeButton === "soup"
              ? "bg-[#18BA54] text-white"
              : "hover:border-[#18BA51] hover:text-black hover:shadow-sm"
          }`}
          onClick={() => handleClick("soup")}
        >
          Soup
        </button>
        <button
          className={`w-[280px] py-2 px-4 bg-white text-black text-lg font-medium rounded-lg border border-[#D6D8DB] 
          ${
            activeButton === "mainCourse"
              ? "bg-[#18BA54] text-white"
              : "hover:border-[#18BA51] hover:text-black hover:shadow-sm"
          }`}
          onClick={() => handleClick("mainCourse")}
        >
          Main Course
        </button>
        <button
          className={`w-[280px] py-2 px-4 bg-white text-black text-lg font-medium rounded-lg border border-[#D6D8DB] 
          ${
            activeButton === "dessert"
              ? "bg-[#18BA54] text-white"
              : "hover:border-[#18BA51] hover:text-black hover:shadow-sm"
          }`}
          onClick={() => handleClick("dessert")}
        >
          Dessert
        </button>
      </div>
      <div className="flex grid-cols-6 grid-rows-none w-full h-auto gap-6 px-[120px]">
        <ItemCard
          name="Өглөөний хоол"
          price={14800}
          imageUrl="/Images/food1.jpeg"
        />
        <ItemCard name="Зайрмаг" price={4800} imageUrl="/Images/food2.jpeg" />
        <ItemCard
          name="Өглөөний хоол"
          price={24800}
          imageUrl="/Images/food.png"
        />
        <ItemCard name="Breakfast" price={27000} imageUrl="/Images/food3.png" />
        <ItemCard name="Breakfast" price={27000} imageUrl="/Images/food3.png" />
        <ItemCard name="Breakfast" price={27000} imageUrl="/Images/food3.png" />
      </div>
    </div>
  );
};
export default FoodMenu;
