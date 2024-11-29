import { MinusICon, PlusIcon } from "../../../public/Icons/Icons";

type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
};

type ItemCardDetailProps = {
  foodData: Food[];
  setIsModalOpen: (value: boolean) => void;
};

const ItemCardDetail: React.FC<ItemCardDetailProps> = ({
  foodData,
  setIsModalOpen,
}) => {
  return (
    <div
      id="popup-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      {foodData.map((food) => {
        return (
          <div className="relative p-8 max-h-full w-[981px] h-[564px] bg-white rounded-2xl shadow">
            <div className="w-full h-full flex gap-[33px]">
              <div
                style={{
                  backgroundImage: `url(${"/Images/food.png"})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "500px",
                  height: "500px",
                }}
              ></div>
              <div className="w-auto h-full flex flex-col">
                <div className="w-full flex justify-end items-end">
                  <button
                    onClick={() => setIsModalOpen(false)} // Close modal on click
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
                      {food.name}
                    </p>
                    <p className="text-[#18BA51] text-lg font-poppins font-semibold">
                      {food.price}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-[#000000] text-lg font-semibold font-poppins">
                      Орц
                    </p>
                    <p className="bg-[#F6F6F6] text-[#767676] text-base font-normal p-2">
                      Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
                    </p>
                  </div>
                  <p className="text-[#000000] text-lg font-semibold font-poppins">
                    Тоо
                  </p>
                  <div className="flex gap-5 ">
                    <button className="flex bg-[#18BA51] w-[45px] h-[40px] justify-center items-center rounded-[10px]">
                      <MinusICon />
                    </button>
                    <p className="flex justify-center items-center w-[254px] px-[30px] py-2">
                      1
                    </p>
                    <button className="flex bg-[#18BA51] w-[45px] h-[40px] justify-center items-center rounded-[10px]">
                      <PlusIcon />
                    </button>
                  </div>
                  <button className="w-[384px] rounded-md bg-[#18BA51] text-white text-base font-normal font-sf-pro px-4 py-2">
                    Сагслах
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemCardDetail;
