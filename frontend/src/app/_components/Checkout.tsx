import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import {
  ArrowForward,
  CloseIcon,
  MinusICon,
  PlusIcon,
} from "../../../public/Icons/Icons";
import Link from "next/link";

type Anchor = "right";

export default function Checkout() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: "586px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="flex flex-col h-screen justify-between">
        <div>
          <div className="flex w-full px-6 py-[26px] gap-[200px] items-center">
            <ArrowForward />
            <p className="text-xl font-black font-poppins">Таны сагс</p>
          </div>
          <div className="flex w-full h-auto p-6 gap-4 border-b border-t border">
            <div
              style={{
                backgroundImage: `url(${"/Images/food1.jpeg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "245px",
                height: "160px",
              }}
              className=""
            ></div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-black text-lg font-poppins font-semibold">
                    Main Pizza
                  </p>
                  <p className="text-[#18BA51] text-lg font-poppins font-semibold">
                    34,800₮
                  </p>
                </div>
                <div className="p-[5px]">
                  <CloseIcon />
                </div>
              </div>
              <div className="flex">
                <p className="text-[#767676] text-base font-normal">
                  Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
                </p>
              </div>
              <div className="flex">
                <button className="flex bg-[#18BA51] w-[45px] h-[40px] justify-center items-center rounded-[10px]">
                  <MinusICon />
                </button>
                <p className="flex justify-center items-center px-[30px] py-2">
                  1
                </p>
                <button className="flex bg-[#18BA51] w-[45px] h-[40px] justify-center items-center rounded-[10px]">
                  <PlusIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full h-[172px] px-8 pb-[30px] pt-[10px] gap-[10px] justify-center items-center shadow-2xl">
          <div className="w-[256px]">
            <p className="text-lg font-normal font-poppins text-[#5E6166]">
              Нийт төлөх дүн
            </p>
            <p className="text-lg font-bold text-[#121316] font-poppins">
              34800₮
            </p>
          </div>
          <Link href={"/order"}>
            <button className="w-[256px] h-12 rounded-md bg-[#18BA51] text-white text-base font-normal font-sf-pro px-4 py-2">
              Захиалах
            </button>
          </Link>
        </div>
      </div>
    </Box>
  );
  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)}>
            <p className="text-xl font-black font-poppins">Таны сагс</p>
          </button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
