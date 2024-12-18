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

  const handleClick = (button: string) => {
    setActiveButton(button);
  };

  const fetchFoodData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/foods?category=${activeButton}`
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
    <div className="flex flex-col w-[1440px] h-auto container">
      <div className="flex w-full py-8 gap-6 px-[120px] container">
        {categoryDatas.map((data) => {
          return (
            <button
              key={data._id}
              className={`w-[280px] py-2 px-4 text-lg font-medium rounded-lg border border-[#D6D8DB] duration-300 
      ${
        activeButton === data.name
          ? "bg-[#18BA55] text-white"
          : "bg-white text-black hover:border-[#18BA51] hover:text-[#18BA51] hover:shadow-sm"
      }`}
              onClick={() => handleClick(data.name)}
            >
              {data.name}
            </button>
          );
        })}
      </div>
      <div className="h-auto grid grid-cols-4 grid-rows-1 gap-6 container px-[120px]">
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
  );
};

export default FoodMenu;
