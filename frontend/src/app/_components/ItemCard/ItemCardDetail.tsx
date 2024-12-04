import { useState } from "react";
import { MinusICon, PlusIcon } from "../../../../public/Icons/Icons";
import { toast, ToastContainer } from "react-toastify"; // Import toast

type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredient: string;
};

type ItemCardDetailProps = {
  selectedFood: Food;
  setIsModalOpen: (value: boolean) => void;
};

const ItemCardDetail: React.FC<ItemCardDetailProps> = ({
  selectedFood,
  setIsModalOpen,
}) => {
  const [counter, setCounter] = useState(1);

  // Барааны тоо нэмэх
  const handlePlusCount = () => {
    setCounter(counter + 1);
  };

  // Барааны тоо хасах
  const handleMinusCount = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  // Сагсанд бараа нэмэх функц
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if item is already in cart
    const itemIndex = existingCart.findIndex(
      (item: Food) => item._id === selectedFood._id
    );

    if (itemIndex !== -1) {
      // If item exists, update its quantity
      existingCart[itemIndex].quantity += counter;
    } else {
      // If item doesn't exist, add it
      existingCart.push({
        ...selectedFood,
        quantity: counter,
      });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setIsModalOpen(false);

    console.log("Adding to cart...");

    // Display toast
    const toastKey = Date.now();
    toast.success("Амжилттай сагсанд нэмэгдлээ!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      toastId: toastKey, // Ensure each toast has a unique id
    });
  };

  return (
    <div
      id="popup-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="relative p-8 max-h-full w-[981px] h-[564px] bg-white rounded-2xl shadow">
        <div className="w-full h-full flex gap-[33px]">
          <div
            style={{
              backgroundImage: `url(${selectedFood.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "500px",
              height: "500px",
            }}
          ></div>
          <div className="w-auto h-full flex flex-col">
            <div className="w-full flex justify-end items-end">
              <button
                onClick={() => setIsModalOpen(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-200 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                <p className="text-black text-lg font-poppins font-semibold">
                  {selectedFood.name}
                </p>
                <p className="text-[#18BA51] text-lg font-poppins font-semibold">
                  {selectedFood.price} ₮
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[#000000] text-lg font-semibold font-poppins">
                  Орц
                </p>
                <p className="bg-[#F6F6F6] text-[#767676] text-base font-normal p-2">
                  {selectedFood.ingredient}
                </p>
              </div>
              <p className="text-[#000000] text-lg font-semibold font-poppins">
                Тоо
              </p>
              <div className="flex gap-5">
                <button
                  onClick={handleMinusCount}
                  className="flex bg-[#18BA51] w-[45px] h-[40px] justify-center items-center rounded-[10px]"
                >
                  <MinusICon />
                </button>
                <p className="flex justify-center items-center w-[254px] px-[30px] py-2">
                  {counter}
                </p>
                <button
                  onClick={handlePlusCount}
                  className="flex bg-[#18BA51] w-[45px] h-[40px] justify-center items-center rounded-[10px]"
                >
                  <PlusIcon />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-[384px] rounded-md bg-[#18BA51] text-white text-base font-normal font-sf-pro px-4 py-2"
              >
                Сагслах
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ToastContainer to render the toast notifications */}
      {/* <ToastContainer
        style={{
          zIndex: 9999,
        }}
      /> */}
    </div>
  );
};

export default ItemCardDetail;
