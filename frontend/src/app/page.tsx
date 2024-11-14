"use client";
import { Drawer } from "@mui/material";
import { useEffect } from "react";
// import * as React from "fragment";
import * as React from "react";
import { Fragment } from "react";
import SwipeableTemporaryDrawer from "./_components/DrawerSwipeable";

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
  return (
    <div>
      <SwipeableTemporaryDrawer />
      {/* <React.Fragment></React.Fragment> */}
    </div>
  );
}
