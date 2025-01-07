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

type Category = {
  _id: string;
  name: string;
  foodId: string;
};

type FoodResponse = {
  success: boolean;
  data: Food[];
};

type CategoryResponse = {
  success: boolean;
  data: Category[];
};

export default function Home() {
  const [isModalOpenFood, setIsModalOpenFood] = useState(false);
  const [activeButton, setActiveButton] = useState("breakfast");
  const [foodData, setFoodData] = React.useState<Food[]>([]);
  const [categoryData, setCategoryData] = React.useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleCategoryClick = (button: string) => {
    setActiveButton(button);
  };

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
    ? process.env.NEXT_PUBLIC_BACKEND_URL
    : "http://localhost:8000/api";

  const fetchDataFood = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/foods`);
      const data: FoodResponse = await response.json();
      setFoodData(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDataCategory = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/categories`);
      const data: CategoryResponse = await response.json();
      setCategoryData(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFood();
    fetchDataCategory();
  }, []);

  return (
    <div className="flex flex-col w-full h-auto gap-8">
      <div className="flex w-full h-auto">
        <FoodMenuContainer
          categoryData={categoryData}
          initialActiveButton="breakfast"
          onCategoryClick={handleCategoryClick}
        />
        <div className="flex flex-col w-[1036px] h-auto bg-[#F7F7F8] p-6">
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
            {isLoading
              ? Array.from({ length: 9 }).map((_, index) => (
                  <ItemCard key={index} isLoading={true} />
                ))
              : foodData.map((food) => (
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
