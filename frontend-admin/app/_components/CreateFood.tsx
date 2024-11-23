import { CloseIcon } from "@/public/Icons/Icons";

type props = {
  setIsModalOpen: (value: boolean) => void;
};
const CreateFood = (props: props) => {
  return (
    <div
      //   onClick={() => props.setIsModalOpen(false)}
      id="popup-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="relative flex flex-col w-[587px] h-[854px] bg-white rounded-2xl">
        <div className="flex justify-between px-6 py-4 items-center">
          <div></div>
          <p className="text-[#272727] text-2xl font-bold leading-normal">
            Create food
          </p>
          <button className="flex items-center">
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-col px-6 py-6 gap-4">
          <div className="flex flex-col w-full h-auto gap-2">
            <p className="text-[#121316] text-sm font-normal leading-5">
              Хоолны нэр
            </p>
            <input
              type="text"
              name=""
              id=""
              className="h-14 bg-[#F4F4F4] outline-none px-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full h-auto gap-2">
            <p className="text-[#121316] text-sm font-normal leading-5">
              Хоолны ангилал
            </p>
            <input
              type="text"
              name=""
              id=""
              className="h-14 bg-[#F4F4F4] outline-none px-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full h-auto gap-2">
            <p className="text-[#121316] text-sm font-normal leading-5">
              Хоолны орц
            </p>
            <input
              type="text"
              name=""
              id=""
              className="h-14 bg-[#F4F4F4] outline-none px-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full h-auto gap-2">
            <p className="text-[#121316] text-sm font-normal leading-5">
              Хоолны үнэ
            </p>
            <input
              type="text"
              name=""
              id=""
              className="h-14 bg-[#F4F4F4] outline-none px-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full h-auto gap-2">
            <p className="text-[#121316] text-sm font-normal leading-5">
              Хямдралтай эсэх
            </p>
            <input
              type="text"
              name=""
              id=""
              className="h-14 bg-[#F4F4F4] outline-none px-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full h-auto gap-2">
            <p className="text-[#121316] text-sm font-normal leading-5">
              Хоолны зураг
            </p>
            <div className="w-[284px] h-[122px]">
              <p className="text-[#525252] text-base font-bold leading-6">
                Add image for the food
              </p>
              <div className="w-[144px] text-[#FFFFFF] bg-[#393939] text-base font-bold leading-6 px-3 py-2 rounded-lg">
                Add image
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateFood;
