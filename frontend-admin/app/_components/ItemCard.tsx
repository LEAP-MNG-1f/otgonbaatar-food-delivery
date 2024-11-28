type ItemCardProps = {
  name?: string;
  price?: number;
  imageUrl?: string;
  isLoading?: boolean;
};
const ItemCard = ({ name, price, imageUrl, isLoading }: ItemCardProps) => {
  if (isLoading) {
    return (
      <div className="flex flex-col w-[282px] h-auto gap-[14px] cursor-pointer animate-pulse">
        <div className="w-full h-[186px] bg-gray-300 rounded-2xl"></div>
        <div className="flex flex-col gap-2">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col w-[282px] h-auto gap-[14px] cursor-pointer hover:border-b hover:border-green-400">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "186px",
        }}
        className="w-full h-auto rounded-2xl"
      ></div>
      <div className="flex flex-col">
        <p className="text-black font-poppins text-lg font-semibold leading-normal">
          {name}
        </p>
        <p className="text-[#18BA51] font-poppins text-lg font-semibold leading-normal">
          {price}₮
        </p>
      </div>
    </div>
  );
};
export default ItemCard;
