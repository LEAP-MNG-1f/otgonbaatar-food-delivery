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
    <div className="w-full max-w-[480px] h-auto flex flex-col gap-6 rounded-2xl shadow-xl bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-center w-12 h-12 rounded-full border border-blue-500">
          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-500">Алхам 2</p>
          <h2 className="text-lg font-medium text-gray-800">
            Захиалга баталгаажуулах
          </h2>
          <p className="text-sm text-blue-500">Хүлээгдэж байна</p>
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col h-full justify-between gap-4 p-6">
        <div className="flex flex-col w-full h-[500px] overflow-y-auto gap-4">
          {cartItems.length > 0 ? (
            cartItems.map((food: any) => (
              <div
                key={food._id}
                className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg shadow-sm"
              >
                <div
                  style={{
                    backgroundImage: `url(${food.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-20 h-20 rounded-lg"
                ></div>
                <div className="flex flex-col flex-1">
                  <p className="text-base font-semibold text-gray-800">
                    {food.name}
                  </p>
                  <p className="text-sm text-gray-500">{food.ingredient}</p>
                  <p className="mt-auto text-lg font-bold text-green-500">
                    {food.price}₮
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Сагс хоосон байна</p>
          )}
        </div>

        {/* Total Price and Order Button */}
        <div className="flex items-  justify-between mt-4 h-14">
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Нийт төлөх дүн</p>
            <p className="text-lg font-bold text-gray-900">
              {cartItems.reduce(
                (acc, item: any) => acc + item.price * (item.quantity || 1),
                0
              )}
              ₮
            </p>
          </div>
          <button
            className={`w-40 px-4 py-2 rounded-lg transition ${
              isAllFieldsFilled
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isAllFieldsFilled || loading}
            onClick={createOrder}
          >
            {loading ? "Төлөвлөх..." : "Захиалах"}
          </button>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p className="mt-4 text-sm text-center text-red-500">
            {errorMessage}
          </p>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default OrderConfirmation;
