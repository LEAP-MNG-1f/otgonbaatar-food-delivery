"use client";
import { useEffect } from "react";
import * as React from "react";
import HomePage from "./_components/HomePage/HomePage";

type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredient: string;
};

type ApiResponse = {
  success: boolean;
  data: Food[];
};

export default function Home() {
  const [isModalOpenFood, setIsModalOpen] = React.useState(false);
  const [foodData, setFoodData] = React.useState<Food[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/foods`
      );
      const data: ApiResponse = await response.json();
      setFoodData(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <HomePage
      isModalOpenFood={isModalOpenFood}
      setIsModalOpen={setIsModalOpen}
      foodData={foodData}
      isLoading={isLoading}
    />
  );
}
