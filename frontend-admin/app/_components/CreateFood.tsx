import React, { useState } from "react";
import { CloseIcon } from "@/public/Icons/Icons";

type FoodData = {
  name: string;
  ingredient: string;
  price: string;
  categoryId: string;
  image: File | null;
};

type Props = {
  setIsModalOpenFood: (value: boolean) => void;
};

const CreateFood = (props: Props) => {
  const [foodData, setFoodData] = useState<FoodData>({
    name: "",
    ingredient: "",
    price: "",
    categoryId: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFoodData({ ...foodData, image: file });

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", foodData.name);
    formData.append("ingredient", foodData.ingredient);
    formData.append("price", foodData.price);
    formData.append("categoryId", foodData.categoryId);
    if (foodData.image) {
      formData.append("image", foodData.image);
    }

    try {
      const response = await fetch("http://localhost:8000/api/create-food", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        props.setIsModalOpenFood(false);
      } else {
        console.error("Error creating food:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      id="popup-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <form onSubmit={handleSubmit}>
        <div className="relative flex flex-col w-[587px] h-[854px] bg-white rounded-2xl justify-between">
          <div className="flex flex-col">
            <div className="flex justify-between px-6 py-4 items-center border-b">
              <p className="text-[#272727] text-2xl font-bold leading-normal">
                Create food
              </p>
              <button
                onClick={() => props.setIsModalOpenFood(false)}
                className="flex items-center"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="flex flex-col px-6 py-6 gap-4">
              <div className="flex flex-col w-full h-auto gap-2">
                <p className="text-[#121316] text-sm font-normal leading-5">
                  Хоолны нэр
                </p>
                <input
                  type="text"
                  value={foodData.name}
                  onChange={(e) =>
                    setFoodData({ ...foodData, name: e.target.value })
                  }
                  className="h-14 bg-[#F4F4F4] outline-none px-3 rounded-lg"
                  required
                />
              </div>
              <div className="flex flex-col w-full h-auto gap-2">
                <p className="text-[#121316] text-sm font-normal leading-5">
                  Хоолны ангилал
                </p>
                <input
                  type="text"
                  value={foodData.categoryId}
                  onChange={(e) =>
                    setFoodData({ ...foodData, categoryId: e.target.value })
                  }
                  className="h-14 bg-[#F4F4F4] outline-none px-3 rounded-lg"
                  required
                />
              </div>
              <div className="flex flex-col w-full h-auto gap-2">
                <p className="text-[#121316] text-sm font-normal leading-5">
                  Хоолны орц
                </p>
                <input
                  type="text"
                  value={foodData.ingredient}
                  onChange={(e) =>
                    setFoodData({ ...foodData, ingredient: e.target.value })
                  }
                  className="h-14 bg-[#F4F4F4] outline-none px-3 rounded-lg"
                  required
                />
              </div>
              <div className="flex flex-col w-full h-auto gap-2">
                <p className="text-[#121316] text-sm font-normal leading-5">
                  Хоолны үнэ
                </p>
                <input
                  type="number"
                  value={foodData.price}
                  onChange={(e) =>
                    setFoodData({ ...foodData, price: e.target.value })
                  }
                  className="h-14 bg-[#F4F4F4] outline-none px-3 rounded-lg"
                  required
                />
              </div>

              <div className="flex flex-col w-full h-auto gap-2">
                <p className="text-[#121316] text-sm font-normal leading-5">
                  Хоолны зураг
                </p>
                <div className="flex flex-col w-[284px] h-auto p-2 gap-2 justify-center items-center border border-dashed rounded-lg bg-[rgba(186,188,196,0.12)]">
                  <p className="text-[#525252] text-base font-bold leading-6">
                    Add image for the food
                  </p>
                  <input
                    type="file"
                    id="uploadFile1"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="uploadFile1"
                    className="flex items-center justify-center w-[144px] text-[#FFFFFF] bg-[#393939] text-base font-bold leading-6 px-3 py-2 rounded-lg cursor-pointer"
                  >
                    Add image
                  </label>

                  {imagePreview && (
                    <div className="mt-4">
                      <img
                        src={imagePreview}
                        alt="Food Preview"
                        className="w-full h-[200px] object-contain border border-red-300 border-dashed p-2"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-end p-6">
            <button
              type="submit"
              className="bg-[#393939] text-base font-bold leading-5 text-[#ffffff] px-4 py-[10px] rounded-md"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateFood;
