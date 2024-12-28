import { useState } from "react";
import { toast } from "react-toastify"; // Import toast
import { useCart } from "./CartContext";
import { Minus, Plus, X } from "lucide-react";

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
  const { cartItems, updateCart } = useCart();

  const handlePlusCount = () => {
    setCounter(counter + 1);
  };

  const handleMinusCount = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleAddToCart = () => {
    const existingCart = [...cartItems];
    const itemIndex = existingCart.findIndex(
      (item) => item._id === selectedFood._id
    );

    if (itemIndex !== -1) {
      // Ensure we're properly adding the new quantity
      const currentQuantity = existingCart[itemIndex].quantity || 0;
      existingCart[itemIndex] = {
        ...existingCart[itemIndex],
        quantity: currentQuantity + counter,
      };
    } else {
      // Add new item with quantity
      existingCart.push({
        ...selectedFood,
        quantity: counter,
      });
    }

    // Update cart context
    updateCart(existingCart);
    setIsModalOpen(false);

    toast.success("Амжилттай сагсанд нэмэгдлээ!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-2xl shadow w-full max-w-[981px] max-h-[90vh] overflow-y-auto">
        {/* Close button for mobile */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute right-4 top-4 z-10 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-2 md:hidden"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:flex-row md:gap-8 w-full">
          {/* Food Image */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[500px]">
            <div
              className="w-full h-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
              style={{
                backgroundImage: `url(${selectedFood.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col p-6 md:p-8 md:w-1/2">
            {/* Close button for desktop */}
            <div className="hidden md:flex w-full justify-end mb-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-2"
              >
                <X size={20} />
              </button>
            </div>

            {/* Food Details */}
            <div className="flex flex-col gap-6">
              {/* Name and Price */}
              <div className="flex flex-col gap-2">
                <h3 className="text-black text-lg font-poppins font-semibold">
                  {selectedFood.name}
                </h3>
                <p className="text-[#18BA51] text-lg font-poppins font-semibold">
                  {selectedFood.price} ₮
                </p>
              </div>

              {/* Ingredients */}
              <div className="flex flex-col gap-3">
                <p className="text-black text-lg font-semibold font-poppins">
                  Орц
                </p>
                <p className="bg-[#F6F6F6] text-[#767676] text-base font-normal p-3 rounded">
                  {selectedFood.ingredient}
                </p>
              </div>

              {/* Quantity Counter */}
              <div className="flex flex-col gap-4">
                <p className="text-black text-lg font-semibold font-poppins">
                  Тоо
                </p>
                <div className="flex gap-4 items-center">
                  <button
                    onClick={handleMinusCount}
                    className="flex bg-[#18BA51] w-[40px] h-[40px] justify-center items-center rounded-lg hover:bg-[#149E44] transition-colors"
                  >
                    <Minus size={20} color="white" />
                  </button>
                  <p className="flex-1 text-center min-w-[60px]">{counter}</p>
                  <button
                    onClick={handlePlusCount}
                    className="flex bg-[#18BA51] w-[40px] h-[40px] justify-center items-center rounded-lg hover:bg-[#149E44] transition-colors"
                  >
                    <Plus size={20} color="white" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full md:w-auto rounded-lg bg-[#18BA51] text-white text-base font-normal px-6 py-3 hover:bg-[#149E44] transition-colors mt-4"
              >
                Сагслах
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCardDetail;
