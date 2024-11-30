"use client";
import OrderInformation from "../_components/Order/OrderInformation";
import OrderConfirmation from "../_components/Order/OrderConfirmation";
import { useState } from "react";

const Order = () => {
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);

  return (
    <div className="w-full h-auto flex gap-52 px-[120px] justify-center my-14 container">
      <OrderInformation
        setIsAllFieldsFilled={setIsAllFieldsFilled}
        isAllFieldsFilled={isAllFieldsFilled}
      />
      <OrderConfirmation isAllFieldsFilled={isAllFieldsFilled} />
    </div>
  );
};

export default Order;
