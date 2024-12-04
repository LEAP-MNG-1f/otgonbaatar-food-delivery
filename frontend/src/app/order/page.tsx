"use client";
import OrderInformation from "../_components/Order/OrderInformation";
import OrderConfirmation from "../_components/Order/OrderConfirmation";
import { useState } from "react";

const Order = () => {
  // State to manage the form data
  const [formData, setFormData] = useState({
    district: "",
    committee: "",
    apartment: "",
    phoneNumber: "",
    additionalInfo: "",
    paymentMethod: "cash",
  });

  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);

  // Update the formData state when a field changes
  const handleFieldChange = (field: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));

    // Check if all required fields are filled
    checkAllFieldsFilled();
  };

  // Check if all required fields are filled
  const checkAllFieldsFilled = () => {
    const { district, committee, apartment, phoneNumber } = formData;
    if (district && committee && apartment && phoneNumber) {
      setIsAllFieldsFilled(true);
    } else {
      setIsAllFieldsFilled(false);
    }
  };

  return (
    <div className="w-full h-auto flex gap-52 px-[120px] justify-center my-14 container">
      <OrderInformation
        formData={formData}
        setFormData={handleFieldChange}
        setIsAllFieldsFilled={setIsAllFieldsFilled}
        isAllFieldsFilled={isAllFieldsFilled}
      />
      <OrderConfirmation
        isAllFieldsFilled={isAllFieldsFilled}
        formData={formData} // Pass formData to OrderConfirmation
      />
    </div>
  );
};

export default Order;
