import { useState } from "react";
import { MoreIcon, PlusIcon } from "@/public/Icons/Icons";

interface FoodMenuContainerProps {
  initialActiveButton?: string;
  onCategoryClick?: (category: string) => void;
}

const FoodMenuContainer: React.FC<FoodMenuContainerProps> = ({
  initialActiveButton = "",
  onCategoryClick,
}) => {
  const [activeButton, setActiveButton] = useState(initialActiveButton);

  const handleClicked = (category: string) => {
    setActiveButton(category);
    if (onCategoryClick) {
      onCategoryClick(category);
    }
  };

  const categoryNames = ["breakfast", "soup", "main", "desserts"];

  return (
    <div className="flex flex-col max-w-[402px] h-screen py-[26px] pr-6 pl-[120px] gap-10">
      <p className="text-2xl font-bold text-[#272727]">Food menu</p>
      <div className="flex flex-col gap-7">
        {categoryNames.map((category) => (
          <button
            key={category}
            className={`flex justify-between items-center w-full h-auto rounded-lg border border-[#D6D8DB] bg-white text-black text-lg font-medium leading-7 py-2 px-4 ${
              activeButton === category
                ? "bg-[#18BA52] text-white"
                : "hover:border-[#18BA51] hover:text-[#18BA51] hover:shadow-sm duration-300"
            }`}
            onClick={() => handleClicked(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
            <MoreIcon />
          </button>
        ))}
        <button
          className={`flex gap-2 items-center w-full h-auto rounded-lg border border-[#D6D8DB] bg-white text-black text-lg font-medium leading-7 py-2 px-4 hover:border-[#18BA51] hover:text-[#18BA51] hover:shadow-sm duration-300`}
          onClick={() => handleClicked("new-category")}
        >
          <PlusIcon />
          <p className="text-[#5E6166] text-lg font-medium leading-7">
            Create new category
          </p>
        </button>
      </div>
    </div>
  );
};

export default FoodMenuContainer;
