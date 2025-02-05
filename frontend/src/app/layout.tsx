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
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import { CartProvider } from "./_components/ItemCard/CartContext";

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
            <Header />
            <div className="flex flex-col justify-center items-center mt-10">
              {loading && <Loader />}
              <CartProvider>{children}</CartProvider>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
