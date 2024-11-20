"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MapIcon } from "../../../public/Icons/Icons";

const Checkout = () => {
  const [district, setDistrict] = React.useState("");
  const [committee, setCommittee] = React.useState("");
  const [apartment, setApartment] = React.useState("");

  const handleChangeDistrict = (event: SelectChangeEvent) => {
    setDistrict(event.target.value as string);
  };

  const handleChangeCommittee = (event: SelectChangeEvent) => {
    setCommittee(event.target.value as string);
  };

  const handleChangeApartment = (event: SelectChangeEvent) => {
    setApartment(event.target.value as string);
  };

  return (
    <div className="w-full h-auto flex gap-40 px-[120px] justify-center my-14">
      <div className="w-[432px] h-auto flex flex-col gap-6">
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
        <div className="flex flex-col w-[432px] h-[612px] rounded-2xl shadow-xl p-6 gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-normal font-sf-pro">
              Хаяг аа оруулна уу
            </p>
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
              className="block p-2.5 w-full text-sm text-[#8B8E95] bg-[#F7F7F8] rounded-lg border border-gray-400 outline-none"
              placeholder="Орц, давхар, орцны код ..."
            ></textarea>
          </div>
          <div className="">
            <div>
              <label className="text-black text-sm font-norma font-sf-pro">
                Утасны дугаар*
              </label>
              <input
                type="tel"
                id="phone"
                className="block w-full p-2.5 text-sm text-[#8B8E95] bg-[#F7F7F8] rounded-lg border border-gray-400 outline-none"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[432px] h-auto flex flex-col gap-6">
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
        <div className="flex flex-col justify-between w-[432px] h-[612px] rounded-2xl shadow-xl p-6">
          <div className="flex w-full h-auto py-4 gap-4 border-b border-[#D6D8DB]">
            <div
              style={{
                backgroundImage: `url("/Images/food.png")`,
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
                  Main Pizza
                </p>
                <p className="text-[#18BA51] text-lg font-poppins font-semibold">
                  34,800₮
                </p>
              </div>
              <div className="text-[#767676] text-base font-normal font-sf-pro">
                Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex gap-[10px]">
            <div className="flex flex-col w-[187px]">
              <p className="text-[#5E6166] text-lg font-normal font-poppins">
                Нийт төлөх дүн
              </p>
              <p className="text-[#121316] text-lg font-bold font-poppins">
                34,800₮
              </p>
            </div>
            <button className="w-[187px] px-4 py-2 bg-[#EEEFF2] rounded-[4px] text-[#1C20243D] text-base font-normal font-sf-pro">
              Захиалах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
