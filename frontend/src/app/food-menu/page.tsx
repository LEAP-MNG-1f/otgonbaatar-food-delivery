"use client";
import { useEffect, useState } from "react";
import ItemCard from "../_components/ItemCard/ItemCard";
import ItemCardDetail from "../_components/ItemCard/ItemCardDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredient: string;
  categoryId: string;
};

type Category = {
  _id: string;
  name: string;
  foodId: string;
};

type CategoryApiResponse = {
  success: boolean;
  data: Category[];
};

type ApiResponse = {
  success: boolean;
  data: Food[];
};

const FoodMenu = () => {
  const [foodDatas, setFoodDatas] = useState<Food[]>([]);
  const [categoryDatas, setCategoryFoodDatas] = useState<Category[]>([]);
  const [activeButton, setActiveButton] = useState("breakfast");
  const [isModalOpenFood, setIsModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
    ? process.env.NEXT_PUBLIC_BACKEND_URL
    : "http://localhost:8000/api";

  const handleClick = (button: string) => {
    setActiveButton(button);
  };

  const fetchFoodData = async () => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/foods?category=${activeButton}`
      );
      const data: ApiResponse = await response.json();
      setFoodDatas(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategoryData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`
      );
      const data: CategoryApiResponse = await response.json();
      setCategoryFoodDatas(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickCategory = (categoryName: string) => {
    const selectedCategory = categoryDatas.find(
      (data) => data.name === categoryName
    );

    if (selectedCategory) {
      const { _id } = selectedCategory;
    }

    setActiveButton(categoryName);
  };

  useEffect(() => {
    fetchFoodData();
    fetchCategoryData();
  }, [activeButton]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category Buttons */}
      <div className="py-4 md:py-6 lg:py-8 overflow-x-auto">
        <div className="flex gap-3 md:gap-4 lg:gap-6 min-w-min">
          {categoryDatas.map((data) => (
            <button
              key={data._id}
              className={`
                whitespace-nowrap px-4 py-2 text-base md:text-lg font-medium 
                rounded-lg border border-[#D6D8DB] transition-all duration-300
                min-w-[120px] md:min-w-[150px] lg:min-w-[180px]
                ${
                  activeButton === data.name
                    ? "bg-[#18BA55] text-white"
                    : "bg-white text-black hover:border-[#18BA51] hover:text-[#18BA51] hover:shadow-sm"
                }
              `}
              onClick={() => handleClick(data.name)}
            >
              {data.name}
            </button>
          ))}
        </div>
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => (
              <ItemCard key={index} isLoading={true} />
            ))
          : foodDatas.map((food) => (
              <div
                key={food?._id}
                role="button"
                onClick={() => {
                  setSelectedFood(food);
                  setIsModalOpen(true);
                }}
                className="w-full"
              >
                <ItemCard
                  name={food?.name}
                  price={food?.price}
                  imageUrl={food?.image}
                />
              </div>
            ))}
      </div>

      {/* Modal and Toast */}
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

export default FoodMenu;
