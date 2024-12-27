import Image from "next/image";
import Link from "next/link";
import Checkout from "../Checkout/Checkout";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-center items-center fixed w-full bg-white z-10">
      <div className="flex items-center container justify-center px-[120px]">
        {/* <div className="flex items-center container justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32"> */}
        <div className="w-full flex justify-between">
          <div className="flex gap-2 py-2 px-6 items-center">
            <Link href={"/"}>
              <Image
                src="/Icons/Logo.svg"
                alt="Food Delivery Logo"
                width={31.26}
                height={26.76}
              />
            </Link>
            <Link href={"/"}>
              <button
                className={`px-4 py-2 ${
                  pathname === "/" ? "text-[#18BA51]" : ""
                }`}
              >
                НҮҮР
              </button>
            </Link>
            <Link href={"/food-menu"}>
              <button
                className={`px-4 py-2 ${
                  pathname === "/food-menu" ? "text-[#18BA51]" : ""
                }`}
              >
                ХООЛНЫ ЦЭС
              </button>
            </Link>
            <Link href={"/delivery-zone"}>
              <button
                className={`px-4 py-2 ${
                  pathname === "/delivery-zone" ? "text-[#18BA51]" : ""
                }`}
              >
                ХҮРГЭЛТИЙН БҮС
              </button>
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <div
              className={`flex ${
                pathname === "/checkout" ? "text-[#18BA51]" : ""
              }`}
            >
              <Checkout />
            </div>
            <Link href="/sign-in">
              <div
                className={`flex px-4 py-2 gap-2 items-center cursor-pointer ${
                  pathname === "/sign-in" ? "text-[#18BA51]" : ""
                }`}
              >
                <Image
                  src="/Icons/UserIcon.svg"
                  alt="User Icon"
                  width={16}
                  height={16}
                />
                Нэвтрэх
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
