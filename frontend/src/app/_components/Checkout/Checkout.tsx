import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowForward,
  CloseIcon,
  MinusICon,
  PlusIcon,
} from "../../../../public/Icons/Icons";
import DeleteOrderConfirmation from "./DeleteOrderConfirmation";

type Anchor = "right";

export default function Checkout() {
  const [counter, setCounter] = React.useState(1);
  const [isModalOpen, setIsModalOpen] = React.useState(false); // Modal open state

  const [state, setState] = React.useState({
    right: false,
  });

  const handleClickPlusCount = () => {
    setCounter(counter + 1);
  };

  const handleClickMinusCount = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

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
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="flex flex-col h-screen justify-between">
        <div>
          <div className="flex w-full px-6 py-[26px] gap-[200px] items-center">
            <button onClick={toggleDrawer(anchor, false)}>
              <ArrowForward />
            </button>

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
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <p className="text-black text-lg font-poppins font-semibold">
                    Main Pizza
                  </p>
                  <p className="text-[#18BA51] text-lg font-poppins font-semibold">
                    34,800₮
                  </p>
                </div>
                <button
                  id="deleteButton"
                  className="p-[5px]"
                  type="button"
                  onClick={() => setIsModalOpen(true)} // Open modal on delete button click
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="flex">
                <p className="text-[#767676] text-base font-normal">
                  Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
                </p>
              </div>
              <div className="flex">
                <button
                  onClick={handleClickMinusCount}
                  className="flex bg-[#18BA51] w-[45px] h-[40px] justify-center items-center rounded-[10px]"
                >
                  <MinusICon />
                </button>
                <p className="w-1 flex justify-center items-center px-[30px] py-2">
                  {counter}
                </p>
                <button
                  onClick={handleClickPlusCount}
                  className="flex bg-[#18BA51] w-[45px] h-[40px] justify-center items-center rounded-[10px]"
                >
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
              34,800₮
            </p>
          </div>
          <Link href={"/order"}>
            <button
              onClick={toggleDrawer(anchor, false)}
              className="w-[256px] h-12 rounded-md bg-[#18BA51] text-white text-base font-normal font-sf-pro px-4 py-2"
            >
              Захиалах
            </button>
          </Link>
        </div>

        {isModalOpen && (
          <DeleteOrderConfirmation setIsModalOpen={setIsModalOpen} />
        )}
      </div>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)}>
            <div className="flex px-4 py-2 gap-2 items-center">
              <Image
                src="/Icons/OrderIcon.svg"
                alt="Food Delivery Logo"
                width={20}
                height={20}
              />
              Сагс
            </div>
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
