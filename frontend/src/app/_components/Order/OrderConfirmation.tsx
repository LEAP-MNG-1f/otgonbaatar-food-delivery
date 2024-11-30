const OrderConfirmation = ({
  isAllFieldsFilled,
}: {
  isAllFieldsFilled: boolean;
}) => {
  return (
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
          <button
            className={`w-[187px] px-4 py-2 ${
              isAllFieldsFilled
                ? "bg-[#18BA51] text-[#FFFFFF]"
                : "bg-[#EEEFF2] text-[#1C20243D] cursor-not-allowed"
            } rounded-[4px] text-base font-normal font-sf-pro`}
            disabled={!isAllFieldsFilled}
          >
            Захиалах
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
