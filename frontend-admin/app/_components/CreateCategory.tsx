import { useState } from "react";
import { CloseIcon } from "@/public/Icons/Icons";
import { createCategory } from "@/services/api"; // Import API function

type Props = {
  setIsModalOpenCategory: (value: boolean) => void;
};

const CreateCategory = (props: Props) => {
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClear = () => {
    setCategoryName("");
    setError("");
  };

  const handleSubmit = async () => {
    if (!categoryName.trim()) {
      setError("Category name is required.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const result = await createCategory({ name: categoryName, foodId: "" });
      console.log("Category created:", result);
      console.log(categoryName);

      props.setIsModalOpenCategory(false);
    } catch (err) {
      setError("Failed to create category. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="popup-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="flex flex-col relative w-[587px] h-auto bg-white rounded-2xl">
        <div className="flex justify-between px-6 py-4 items-center border-b">
          <div></div>
          <p className="text-[#272727] text-2xl font-bold leading-normal">
            Create new category
          </p>
          <button
            onClick={() => props.setIsModalOpenCategory(false)}
            className="flex items-center"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-col px-6 py-6 gap-4">
          <div className="flex flex-col w-full h-auto gap-2">
            <p className="text-[#121316] text-sm font-normal leading-5">
              Category name
            </p>
            <input
              type="text"
              value={categoryName}
              onChange={(event) => setCategoryName(event.target.value)}
              className="h-14 bg-[#F4F4F4] outline-none px-3 rounded-lg"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </div>
        <div className="flex px-6 py-6 gap-4 justify-end border-t">
          <button
            onClick={handleClear}
            className="px-2 py-[10px] text-[#3F4145] text-base font-bold leading-5 rounded-md"
          >
            Clear
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`bg-[#393939] px-4 py-[10px] text-[#FFFFFF] text-base font-bold leading-5 rounded-md ${
              loading ? "opacity-50" : ""
            }`}
          >
            {loading ? "Creating..." : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
