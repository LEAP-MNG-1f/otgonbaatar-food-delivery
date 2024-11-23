"use client";
import { useState } from "react";
import FoodMenuContainer from "./_components/FoodMenuContainer";
import CreateFood from "./_components/CreateFood";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("breakfast");

  const handleCategoryClick = (button: string) => {
    setActiveButton(button);
  };

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
              onClick={() => setIsModalOpen(true)}
              className="bg-[#18BA51] px-4 py-2 text-[#fff] text-base font-normal rounded"
            >
              Add new food
            </button>
          </div>
        </div>
      </div>
      <div className=""></div>
      {isModalOpen && <CreateFood setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}
