"use client";
import { useEffect } from "react";
import * as React from "react";
import {
  FastDeliveryCardBookIcon,
  FastDeliveryCardTimeIcon,
  FastDeliveryCardVegetableIcon,
  RoadMoreIcon,
} from "../../public/Icons/Icons";
import Image from "next/image";
import ItemCard from "./_components/ItemCard/ItemCard";
import ItemCardDetail from "./_components/ItemCard/ItemCardDetail";
import HomePage from "./_components/HomePage/HomePage";

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
  const [isModalOpenFood, setIsModalOpen] = React.useState(false);
  const [foodData, setFoodData] = React.useState<Food[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/foods");
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
