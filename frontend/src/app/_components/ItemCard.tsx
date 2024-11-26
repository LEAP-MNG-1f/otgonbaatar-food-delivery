type ItemCardProps = {
  name: string;
  price: number;
  imageUrl: string;
};

const ItemCard = ({ name, price, imageUrl }: ItemCardProps) => {
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
        <p className="text-[#18BA51] ont-poppins text-lg font-semibold leading-normal">
          {price}₮
        </p>
      </div>
    </div>
  );
};
export default ItemCard;
