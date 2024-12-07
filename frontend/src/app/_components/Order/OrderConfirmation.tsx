import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderConfirmation = ({
  isAllFieldsFilled,
  formData,
}: {
  isAllFieldsFilled: boolean;
  formData: any;
}) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const cartData = JSON.parse(storedCart);
      setCartItems(cartData);
    }
  }, []);

  const createOrder = async () => {
    setLoading(true);

    try {
      const orderData = {
        userId: "6744e90d0fcf8e11c199b18c",
        orderNumber: Math.floor(Math.random() * 100000),
        foodIds: cartItems.map((item: any) => item._id),
        totalPrice: cartItems.reduce(
          (acc, item: any) => acc + item.price * (item.quantity || 1),
          0
        ),
        process: "Waiting",
        createdDate: new Date(),
        district: formData.district,
        khoroo: formData.committee,
        apartment: formData.apartment,
        // district: formData.district,
        // khoroo: formData.khoroo,
        // apartment: formData.apartment,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.removeItem("cart");
        setCartItems([]);

        toast.success("Захиалга амжилттай баталгаажлаа!");
      } else {
        setErrorMessage("Захиалга үүсгэхэд алдаа гарлаа. Дахин оролдоно уу.");
      }
    } catch (error) {
      setErrorMessage("Алдаа гарлаа. Та дахин оролдоно уу.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[432px] h-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex w-full px-6 py-4 gap-4 justify-center items-center">
        <div className="w-12">
          <div className="flex w-12 h-12 items-center justify-center rounded-[50px] border border-[#0468C8]">
            <div className="w-6 h-6 rounded-[50px] bg-[#0468C8]"></div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-[#8B8E95] text-sm font-normal font-sf-pro">
            Алхам 2
          </p>
          <p className="text-black text-xl font-normal font-sf-pro">
            Захиалга баталгаажуулах
          </p>
          <p className="text-[#0468C8] text-base font-normal font-sf-pro">
            Хүлээгдэж байна
          </p>
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col justify-between w-[432px] h-[612px] rounded-2xl shadow-xl p-6">
        <div className="flex flex-col w-full h-auto py-4 gap-4 ">
          {cartItems.length > 0 ? (
            cartItems.map((food: any) => (
              <div
                key={food._id}
                className="flex w-full h-[84px] border-b border-[#D6D8DB] pb-2 gap-4"
              >
                <div
                  style={{
                    backgroundImage: `url(${food.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "184px",
                    height: "100%",
                  }}
                  className="w-[184px] h-full"
                ></div>
                <div className="flex flex-col w-[184px] h-auto">
                  <div className="flex flex-col">
                    <p className="text-black text-lg font-poppins font-semibold">
                      {food.name}
                    </p>
                    <p className="text-[#18BA51] text-lg font-poppins font-semibold">
                      {food.price}₮
                    </p>
                  </div>
                  <div className="text-[#767676] text-base font-normal font-sf-pro">
                    {food.ingredient}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Сагс хоосон байна</p>
          )}
        </div>

        {/* Total Price and Order Button */}
        <div className="w-full h-auto flex gap-[10px]">
          <div className="flex flex-col w-[187px]">
            <p className="text-[#5E6166] text-lg font-normal font-poppins">
              Нийт төлөх дүн
            </p>
            <p className="text-[#121316] text-lg font-bold font-poppins">
              {cartItems.reduce(
                (acc, item: any) => acc + item.price * (item.quantity || 1),
                0
              )}
              ₮
            </p>
          </div>
          <button
            className={`w-[187px] px-4 py-2 ${
              isAllFieldsFilled
                ? "bg-[#18BA51] text-[#FFFFFF]"
                : "bg-[#EEEFF2] text-[#1C20243D] cursor-not-allowed"
            }`}
            disabled={!isAllFieldsFilled || loading}
            onClick={createOrder}
          >
            {loading ? "Төлөвлөх..." : "Захиалах"}
          </button>
        </div>

        {errorMessage && (
          <div className="text-red-500 text-sm mt-2 text-center">
            {errorMessage}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default OrderConfirmation;
