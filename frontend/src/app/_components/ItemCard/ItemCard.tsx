type ItemCardProps = {
  name?: string;
  price?: number;
  imageUrl?: string;
  isLoading?: boolean;
};

const ItemCard = ({ name, price, imageUrl, isLoading }: ItemCardProps) => {
  if (isLoading) {
    return (
      <div className="w-[282px] flex flex-col h-auto gap-[14px] cursor-pointer animate-pulse">
        <div className="w-full h-[186px] bg-gray-300 rounded-2xl"></div>
        <div className="flex flex-col gap-2">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative w-[282px] h-auto cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-2xl overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-[186px] rounded-t-2xl relative"
      >
        {/* Хямдрал эсвэл статус бэлгэдэл нэмж болно */}
      </div>

      <div className="p-3 bg-white">
        <div className="flex justify-between items-center">
          <h3 className="text-black font-poppins text-lg font-semibold leading-normal truncate max-w-[180px]">
            {name}
          </h3>

          {/* Favorite болон cart дээр нэмэх товч */}
          <div className="flex space-x-2">
            <button className="text-gray-500 hover:text-red-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-green-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p className="text-[#18BA51] font-poppins text-lg font-semibold leading-normal">
            {price}₮
          </p>
        </div>
      </div>

      {/* Hover effect дээр нэмэлт мэдээлэл гарах */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-green-500 hover:text-white transition-colors">
          Дэлгэрэнгүй үзэх
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
