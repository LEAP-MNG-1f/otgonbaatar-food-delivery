import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MapIcon, CheckIcon } from "../../../../public/Icons/Icons";
import Checkbox from "@mui/material/Checkbox";

const OrderInformation = ({
  formData,
  setFormData,
  setIsAllFieldsFilled,
  isAllFieldsFilled,
}: {
  formData: any;
  setFormData: (field: string, value: string) => void;
  setIsAllFieldsFilled: React.Dispatch<React.SetStateAction<boolean>>;
  isAllFieldsFilled: boolean;
}) => {
  const {
    district,
    committee,
    apartment,
    phoneNumber,
    additionalInfo,
    paymentMethod,
  } = formData;

  const handleChange = (field: string, value: string) => {
    setFormData(field, value);
  };

  const handlePaymentMethodChange = (method: string) => {
    setFormData("paymentMethod", method); // Update the paymentMethod in formData
  };

  // Mapping for district, committee, and apartment
  const districtOptions: { [key: string]: string } = {
    1: "Баянзүрх дүүрэг",
    2: "Хан-Уул дүүрэг",
    3: "Баянгол дүүрэг",
    4: "Сонгинохайрхан дүүрэг",
    5: "Чингэлтэй дүүрэг",
  };

  const committeeOptions: { [key: string]: string } = {
    1: "1-р хороо",
    2: "2-р хороо",
    3: "3-р хороо",
    4: "4-р хороо",
  };

  const apartmentOptions: { [key: string]: string } = {
    1: "Нархан хотхон",
    2: "26-р байр",
    3: "Хоймор хотхон",
  };

  return (
    <div className="w-[432px] h-auto flex flex-col gap-6">
      <div className="flex w-full px-6 py-4 gap-4 justify-center items-center">
        <div className="w-12">
          {isAllFieldsFilled ? (
            <div className="flex w-12 h-12 items-center justify-center rounded-[50px] bg-[#18BA51]">
              <CheckIcon />
            </div>
          ) : (
            <div className="flex w-12 h-12 items-center justify-center rounded-[50px] border border-[#0468C8]">
              <div className="w-6 h-6 rounded-[50px] bg-[#0468C8]"></div>
            </div>
          )}
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-[#8B8E95] text-sm font-normal font-sf-pro">
            Алхам 1
          </p>
          <p className="text-black text-xl font-normal font-sf-pro">
            Хаягийн мэдээлэл оруулах
          </p>
          <p
            className={`text-base font-normal font-sf-pro ${
              isAllFieldsFilled ? "text-[#18BA51]" : "text-[#0468C8]"
            }`}
          >
            {isAllFieldsFilled ? "Оруулсан" : "Хүлээгдэж байна"}
          </p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col w-[432px] h-[712px] rounded-2xl shadow-xl p-6 gap-10">
        <div className="flex flex-col gap-4">
          {/* District */}
          <div className="flex items-center gap-1 w-full h-18 py-2 rounded-md">
            <FormControl fullWidth sx={{ backgroundColor: "#F7F7F8" }}>
              <InputLabel id="district-label">
                <div className="flex items-center gap-2">
                  <MapIcon /> Дүүрэг сонгоно уу
                </div>
              </InputLabel>
              <Select
                labelId="district-label"
                value={district}
                label="District"
                onChange={(e) =>
                  handleChange("district", districtOptions[e.target.value])
                }
              >
                {Object.entries(districtOptions).map(([value, label]) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* Committee */}
          <div className="flex items-center gap-1 w-full h-18 py-2 rounded-md">
            <FormControl fullWidth sx={{ backgroundColor: "#F7F7F8" }}>
              <InputLabel id="committee-label">
                <div className="flex items-center gap-2">
                  <MapIcon /> Хороо сонгоно уу
                </div>
              </InputLabel>
              <Select
                labelId="committee-label"
                value={committee}
                onChange={(e) =>
                  handleChange("committee", committeeOptions[e.target.value])
                }
              >
                {Object.entries(committeeOptions).map(([value, label]) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* Apartment */}
          <div className="flex items-center gap-1 w-full h-18 py-2 rounded-md">
            <FormControl fullWidth sx={{ backgroundColor: "#F7F7F8" }}>
              <InputLabel id="apartment-label">
                <div className="flex items-center gap-2">
                  <MapIcon /> Байр сонгоно уу
                </div>
              </InputLabel>
              <Select
                labelId="apartment-label"
                value={apartment}
                onChange={(e) =>
                  handleChange("apartment", apartmentOptions[e.target.value])
                }
              >
                {Object.entries(apartmentOptions).map(([value, label]) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex flex-col gap-1">
          <label className="text-black text-sm font-sf-pro">
            Нэмэлт мэдээлэл
          </label>
          <textarea
            rows={4}
            value={additionalInfo}
            onChange={(e) => handleChange("additionalInfo", e.target.value)}
            className="block p-2.5 w-full text-sm text-[#8B8E95] bg-[#F7F7F8] rounded-lg border border-gray-400 outline-none"
            placeholder="Орц, давхар, орцны код ..."
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="text-black text-sm font-sf-pro">
            Утасны дугаар*
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
            className="block w-full p-2.5 text-sm text-[#8B8E95] bg-[#F7F7F8] border border-gray-400 rounded-lg outline-none"
            placeholder="Утасны дугаар"
          />
        </div>

        {/* Payment Method */}
        <div className=" flex flex-col gap-2">
          <label className="text-black text-sm font-normal font-sf-pro">
            Төлбөр төлөх
          </label>
          <div className="flex gap-8">
            <div className="flex items-center w-1/2">
              <Checkbox
                checked={paymentMethod === "cash"}
                onChange={() => handlePaymentMethodChange("cash")}
                color="default"
                sx={{ color: "#1C1B1F" }}
              />
              <label
                htmlFor="red-checkbox"
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Бэлнээр
              </label>
            </div>
            <div className="flex items-center w-1/2">
              <Checkbox
                checked={paymentMethod === "card"}
                onChange={() => handlePaymentMethodChange("card")}
                color="default"
                sx={{ color: "#1C1B1F" }}
              />
              <label
                htmlFor="red-checkbox"
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Картаар
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
