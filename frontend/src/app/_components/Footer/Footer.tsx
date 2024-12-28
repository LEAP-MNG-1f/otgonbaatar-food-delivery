import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url("background.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "545px",
      }}
      className="flex w-full h-[545px] bg-[#18BA51] mt-auto"
    >
      <div className="flex flex-col justify-center w-full mx-4 md:mx-16 lg:mx-32 my-10 lg:my-28 gap-10 backdrop-blur-[2px] p-8 md:p-14 lg:p-20 rounded-3xl border border-yellow-50">
        <div className="flex items-center justify-center">
          <Image
            src="/Logo/LogoPineconeAcademy.svg"
            alt="Food Delivery Logo"
            width={150}
            height={75}
            className="w-24 md:w-40"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Link href={"/"}>
            <div className="text-white text-center text-sm md:text-base font-sf-pro font-semibold leading-normal underline">
              Нүүр
            </div>
          </Link>
          <div className="text-white text-center text-sm md:text-base font-sf-pro font-semibold leading-normal underline">
            Холбоо барих
          </div>
          <Link href={"/food-menu"}>
            <div className="text-white text-center text-sm md:text-base font-sf-pro font-semibold leading-normal underline">
              Хоолны цэс
            </div>
          </Link>
          <div className="text-white text-center text-sm md:text-base font-sf-pro font-semibold leading-normal underline">
            Үйлчилгээний нөхцөл
          </div>
          <Link href={"/delivery-zone"}>
            <div className="text-white text-center text-sm md:text-base font-sf-pro font-semibold leading-normal underline">
              Хүргэлтийн бүс
            </div>
          </Link>
          <div className="text-white text-center text-sm md:text-base font-sf-pro font-semibold leading-normal underline">
            Нууцлагын бодлого
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Image
            src="/Logo/facebook.svg"
            alt="Food Delivery Logo"
            width={25}
            height={35}
            className="w-6 md:w-9"
          />
          <Image
            src="/Logo/instagram.svg"
            alt="Food Delivery Logo"
            width={25}
            height={35}
            className="w-6 md:w-9"
          />
          <Image
            src="/Logo/twitter.svg"
            alt="Food Delivery Logo"
            width={25}
            height={35}
            className="w-6 md:w-9"
          />
        </div>
        <div className="w-full border-t border-white"></div>
        <div className="flex flex-col gap-2">
          <p className="text-white text-center text-xs md:text-sm font-sf-pro font-normal">
            © 2024 Pinecone Foods LLC{" "}
          </p>
          <p className="text-white text-center text-xs md:text-sm font-sf-pro font-normal">
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
