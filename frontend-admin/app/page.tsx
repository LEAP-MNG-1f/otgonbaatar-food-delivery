"use client";
import { useEffect, useState } from "react";
import FoodMenuContainer from "./_components/FoodMenuContainer";
import CreateFood from "./_components/CreateFood";
import React from "react";
import ItemCard from "./_components/ItemCard";

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

export default function Home() {
  const [isModalOpenFood, setIsModalOpenFood] = useState(false);
  const [activeButton, setActiveButton] = useState("breakfast");
  const [foodData, setFoodData] = React.useState<Food[]>([]);

  const handleCategoryClick = (button: string) => {
    setActiveButton(button);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/foods");
      const data: ApiResponse = await response.json();
      setFoodData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(foodData);

  return (
    <div className="flex flex-col w-full h-auto gap-8">
      <div className="flex w-full h-auto">
        <FoodMenuContainer
          initialActiveButton="breakfast"
          onCategoryClick={handleCategoryClick}
        />
        <div className="flex flex-col w-[1036px] h-screen bg-[#F7F7F8] p-6">
          <div className="flex justify-between py-4">
            <p className="text-[#272727] text-2xl font-bold leading-normal">
              Breakfast
            </p>
            <button
              onClick={() => setIsModalOpenFood(true)}
              className="bg-[#18BA51] px-4 py-2 text-[#fff] text-base font-normal rounded"
            >
              Add new food
            </button>
          </div>
          <div className="w-full h-auto grid grid-cols-3 grid-rows-1 gap-6">
            {foodData.map((food) => (
              <div key={food._id} role="button">
                <ItemCard
                  name={food.name}
                  price={food.price}
                  imageUrl={food.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpenFood && (
        <CreateFood setIsModalOpenFood={setIsModalOpenFood} />
      )}
    </div>
  );
}
