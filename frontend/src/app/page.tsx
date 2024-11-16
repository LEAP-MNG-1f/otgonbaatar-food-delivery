"use client";
import { Drawer } from "@mui/material";
import { useEffect } from "react";
// import * as React from "fragment";
import * as React from "react";
import { Fragment } from "react";
import SwipeableTemporaryDrawer from "./_components/DrawerSwipeable";
// import Card from "./_components/Card";

export default function Home() {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const img: string = "";
  const title: string = "";
  const price: number = 10;
  const discount: number = 20;
  const color: string = "";

  return (
    <div>
      {/* <Card img="image" title="Sai" price={9000} discount={60} color="red" /> */}
      {/* <SwipeableTemporaryDrawer /> */}
      {/* <React.Fragment></React.Fragment> */}
    </div>
  );
}
