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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Anchor = "right";

type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredient: string;
};

export default function Checkout() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState<Food[]>([]);
  const [foodItemToDelete, setFoodItemToDelete] = React.useState<Food | null>(
    null
  );

  const [quantities, setQuantities] = React.useState<Record<string, number>>(
    {}
  );

  React.useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(savedCart);
    const initialQuantities: Record<string, number> = {};
    savedCart.forEach((item: Food) => {
      initialQuantities[item._id] = 1;
    });
    setQuantities(initialQuantities);
  }, []);

  const [state, setState] = React.useState({
    right: false,
  });

  const handleClickPlusCount = (foodId: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [foodId]: prevQuantities[foodId] + 1,
    }));
  };

  const handleClickMinusCount = (foodId: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [foodId]: Math.max(1, prevQuantities[foodId] - 1),
    }));
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

          {cartItems.length > 0 ? (
            cartItems.map((food) => (
              <div
                className="flex w-full h-auto p-6 gap-4 border-b border-t border"
                key={food._id}
              >
                <div
                  style={{
                    backgroundImage: `url(${food.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "245px",
                    height: "160px",
                  }}
                ></div>
                <div className="flex w-[261px] flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                      <p className="text-black text-lg font-poppins font-semibold">
                        {food.name}
                      </p>
                      <p className="text-[#18BA51] text-lg font-poppins font-semibold">
                        {food.price}₮
                      </p>
                    </div>
                    <button
                      id="deleteButton"
                      className="p-[5px]"
                      type="button"
                      onClick={() => {
                        setFoodItemToDelete(food);
                        setIsModalOpen(true);
                      }}
                    >
                      <CloseIcon />
                    </button>
                  </div>
                  <div className="flex">
                    <p className="text-[#767676] text-base font-normal">
                      {food.ingredient}
                    </p>
                  </div>
                  <div className="flex">
                    <button
                      onClick={() => handleClickMinusCount(food._id)}
                      className="flex bg-[#18BA51] w-[45px] h-[40px] justify-center items-center rounded-[10px]"
                    >
                      <MinusICon />
                    </button>
                    <p className="w-1 flex justify-center items-center px-[30px] py-2">
                      {quantities[food._id] || 1}
                    </p>
                    <button
                      onClick={() => handleClickPlusCount(food._id)}
                      className="flex bg-[#18BA51] w-[45px] h-[40px] justify-center items-center rounded-[10px]"
                    >
                      <PlusIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Сагс хоосон байна</p>
          )}
        </div>
        <div className="flex w-full h-[172px] px-8 pb-[30px] pt-[10px] gap-[10px] justify-center items-center shadow-2xl">
          <div className="w-[256px]">
            <p className="text-lg font-bold text-[#121316] font-poppins">
              {cartItems.reduce(
                (acc, item) => acc + item.price * (quantities[item._id] || 1),
                0
              )}
              ₮
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

        {isModalOpen && foodItemToDelete && (
          <DeleteOrderConfirmation
            setIsModalOpen={setIsModalOpen}
            itemToDelete={foodItemToDelete}
            removeItemFromCart={removeItemFromCart}
          />
        )}
      </div>
    </Box>
  );

  const removeItemFromCart = (itemId: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const updatedQuantities = { ...quantities };
    delete updatedQuantities[itemId];
    setQuantities(updatedQuantities);

    toast.success("Амжилттай устгагдлаа", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  return (
    <div>
      <ToastContainer />
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
