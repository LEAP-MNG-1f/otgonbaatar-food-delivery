import { useState } from "react";
import { MoreIcon, PlusIcon } from "@/public/Icons/Icons";
import CreateCategory from "./CreateCategory";

type Category = {
  _id: string;
  name: string;
  foodId: string;
};

interface FoodMenuContainerProps {
  categoryData: Category[];
  initialActiveButton?: string;
  onCategoryClick?: (category: string) => void;
}

const FoodMenuContainer: React.FC<FoodMenuContainerProps> = ({
  initialActiveButton = "breakfast",
  categoryData,
  onCategoryClick,
}) => {
  const [isModalOpenCategory, setIsModalOpenCategory] = useState(false);
  const [activeButton, setActiveButton] = useState(initialActiveButton);

  const handleClicked = (category: string) => {
    setActiveButton(category);
    if (onCategoryClick) {
      onCategoryClick(category);
    }
  };

  return (
    <div className="flex flex-col max-w-[402px] h-screen py-[26px] pr-6 pl-[120px] gap-10">
      <p className="text-2xl font-bold text-[#272727]">Food menu</p>
      <div className="flex flex-col gap-7">
        {categoryData.map((category) => (
          <button
            key={category._id}
            className={`flex justify-between items-center w-full h-auto rounded-lg border border-[#D6D8DB] bg-white text-black text-lg font-medium leading-7 py-2 px-4 ${
              activeButton === category.name
                ? "bg-[#18BA54] text-white"
                : "hover:border-[#18BA51] hover:text-[#18BA51] hover:shadow-sm duration-300"
            }`}
            onClick={() => handleClicked(category.name)}
          >
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            <MoreIcon />
          </button>
        ))}
        <button
          className={`flex gap-2 items-center w-full h-auto rounded-lg border border-[#D6D8DB] bg-white text-black text-lg font-medium leading-7 py-2 px-4 hover:border-[#18BA51] hover:text-[#18BA51] hover:shadow-sm duration-300`}
          onClick={() => {
            handleClicked("new-category");
            setIsModalOpenCategory(true);
          }}
        >
          <PlusIcon />
          <p className="text-[#5E6166] text-lg font-medium leading-7">
            Create new category
          </p>
        </button>
      </div>
      {isModalOpenCategory && (
        <CreateCategory setIsModalOpenCategory={setIsModalOpenCategory} />
      )}
    </div>
  );
};

export default FoodMenuContainer;
