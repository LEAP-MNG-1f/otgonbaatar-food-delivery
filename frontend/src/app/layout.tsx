"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Checkout from "./_components/Checkout/Checkout";
import { useEffect, useState } from "react";
import Loader from "./_components/Loader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Food-Delivery",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <div className="flex flex-col flex-grow justify-center">
          <div className="flex flex-col flex-grow">
            <div className="flex justify-center items-center">
              <div className="flex items-center container justify-center px-[120px]">
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
                    <Link href="/login">
                      <div
                        className={`flex px-4 py-2 gap-2 items-center cursor-pointer ${
                          pathname === "/login" ? "text-[#18BA51]" : ""
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
            <div className="flex flex-col justify-center items-center">
              {loading && <Loader />}
              {children}
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${"background.svg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "545px",
            }}
            className="flex w-full h-[545px] bg-[#18BA51] mt-auto"
          >
            <div className="flex flex-col justify-center w-full mx-32 my-28 gap-10">
              <div className="flex items-center justify-center">
                <Image
                  src="/Logo/LogoPineconeAcademy.svg"
                  alt="Food Delivery Logo"
                  width={200}
                  height={100}
                />
              </div>
              <div className="flex justify-between">
                <Link href={"/"}>
                  <div className="text-white text-center text-base font-sf-pro font-semibold leading-normal underline">
                    Нүүр
                  </div>
                </Link>

                <div className="text-white text-center text-base font-sf-pro font-semibold leading-normal underline">
                  Холбоо барих
                </div>
                <Link href={"/food-menu"}>
                  <div className="text-white text-center text-base font-sf-pro font-semibold leading-normal underline">
                    Хоолны цэс
                  </div>
                </Link>
                <div className="text-white text-center text-base font-sf-pro font-semibold leading-normal underline">
                  Үйлчилгээний нөхцөл
                </div>
                <Link href={"/delivery-zone"}>
                  <div className="text-white text-center text-base font-sf-pro font-semibold leading-normal underline">
                    Хүргэлтийн бүс
                  </div>
                </Link>

                <div className="text-white text-center text-base font-sf-pro font-semibold leading-normal underline">
                  Нууцлагын бодлого
                </div>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <Image
                  src="/Logo/facebook.svg"
                  alt="Food Delivery Logo"
                  width={35}
                  height={46}
                />
                <Image
                  src="/Logo/instagram.svg"
                  alt="Food Delivery Logo"
                  width={35}
                  height={46}
                />
                <Image
                  src="/Logo/twitter.svg"
                  alt="Food Delivery Logo"
                  width={35}
                  height={46}
                />
              </div>
              <div className="w-full border-t border-white h-1"></div>
              <div className="flex flex-col gap-2">
                <p className="text-white text-center text-base font-sf-pro font-normal">
                  © 2024 Pinecone Foods LLC{" "}
                </p>
                <p className="text-white text-center text-base font-sf-pro font-normal">
                  Зохиогчийн эрх хуулиар хамгаалагдсан.
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
