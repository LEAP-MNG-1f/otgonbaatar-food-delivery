"use client";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MapIcon, CheckIcon } from "../../../../public/Icons/Icons";
import Checkbox from "@mui/material/Checkbox";

const OrderInformation = ({
  setIsAllFieldsFilled,
  isAllFieldsFilled,
}: {
  setIsAllFieldsFilled: React.Dispatch<React.SetStateAction<boolean>>;
  isAllFieldsFilled: boolean;
}) => {
  const [district, setDistrict] = React.useState("");
  const [committee, setCommittee] = React.useState("");
  const [apartment, setApartment] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [additionalInfo, setAdditionalInfo] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState<"cash" | "card">(
    "cash"
  );

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleChangeDistrict = (event: SelectChangeEvent) => {
    setDistrict(event.target.value as string);
    checkAllFieldsFilled();
  };

  const handleChangeCommittee = (event: SelectChangeEvent) => {
    setCommittee(event.target.value as string);
    checkAllFieldsFilled();
  };

  const handleChangeApartment = (event: SelectChangeEvent) => {
    setApartment(event.target.value as string);
    checkAllFieldsFilled();
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
    checkAllFieldsFilled();
  };

  const handleAdditionalInfoChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAdditionalInfo(event.target.value);
    checkAllFieldsFilled();
  };

  const checkAllFieldsFilled = () => {
    if (district && committee && apartment && phoneNumber) {
      setIsAllFieldsFilled(true);
    } else {
      setIsAllFieldsFilled(false);
    }
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
      <div className="flex flex-col w-[432px] h-[712px] rounded-2xl shadow-xl p-6 gap-10">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-normal font-sf-pro">Хаяг аа оруулна уу</p>
          <div className="flex items-center gap-1 w-full h-18 py-2 rounded-md">
            <FormControl
              fullWidth
              sx={{ backgroundColor: "#F7F7F8", width: "full" }}
            >
              <InputLabel id="demo-simple-select-label">
                <div className="flex items-center gap-2">
                  <MapIcon /> Дүүрэг сонгоно уу
                </div>
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={district}
                label="District"
                onChange={handleChangeDistrict}
              >
                <MenuItem value={10}>Баянзүрх дүүрэг</MenuItem>
                <MenuItem value={20}>Хан-Уул дүүрэг</MenuItem>
                <MenuItem value={30}>Баянгол дүүрэг</MenuItem>
                <MenuItem value={40}>Сонгинохайрхан дүүрэг</MenuItem>
                <MenuItem value={50}>Чингэлтэй дүүрэг</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex items-center gap-1 w-full h-18 py-2 rounded-md">
            <FormControl
              fullWidth
              sx={{ backgroundColor: "#F7F7F8", width: "full" }}
            >
              <InputLabel id="demo-simple-select-label">
                <div className="flex items-center gap-2">
                  <MapIcon /> Хороо сонгоно уу
                </div>
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={committee}
                label="Committee"
                onChange={handleChangeCommittee}
              >
                <MenuItem value={1}>1-р хороо</MenuItem>
                <MenuItem value={2}>2-р хороо</MenuItem>
                <MenuItem value={3}>3-р хороо</MenuItem>
                <MenuItem value={4}>4-р хороо</MenuItem>
                <MenuItem value={5}>5-р хороо</MenuItem>
                <MenuItem value={6}>6-р хороо</MenuItem>
                <MenuItem value={7}>7-р хороо</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex items-center gap-1 w-full h-18 py-2 rounded-md">
            <FormControl
              fullWidth
              sx={{
                backgroundColor: "#F7F7F8",
                width: "full",
              }}
            >
              <InputLabel id="demo-simple-select-label">
                <div className="flex items-center gap-2">
                  <MapIcon /> Байр, гудамж сонгоно уу
                </div>
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={apartment}
                label="Apartment"
                onChange={handleChangeApartment}
              >
                <MenuItem value={1}>Нархан хотхон</MenuItem>
                <MenuItem value={2}>26-р байр</MenuItem>
                <MenuItem value={3}>Хоймор хотхон</MenuItem>
                <MenuItem value={4}>45-р байр</MenuItem>
                <MenuItem value={5}>Зайсан хотхон </MenuItem>
                <MenuItem value={6}>Mega City хотхон</MenuItem>
                <MenuItem value={7}>Hunnu хотхон</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-black text-sm font-norma font-sf-pro">
            Нэмэлт мэдээлэл
          </label>
          <textarea
            id="message"
            rows={4}
            value={additionalInfo}
            onChange={handleAdditionalInfoChange}
            className="block p-2.5 w-full text-sm text-[#8B8E95] bg-[#F7F7F8] rounded-lg border border-gray-400 outline-none"
            placeholder="Орц, давхар, орцны код ..."
          ></textarea>
        </div>
        <div>
          <label className="text-black text-sm font-norma font-sf-pro">
            Утасны дугаар*
          </label>
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="block w-full p-2.5 text-sm text-[#8B8E95] bg-[#F7F7F8] rounded-lg border border-gray-400 outline-none"
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label className="text-black text-sm font-normal font-sf-pro">
            Төлбөр төлөх
          </label>
          <div className="flex gap-8">
            <div className="flex items-center w-1/2">
              <Checkbox
                {...label}
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
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
                {...label}
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
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
