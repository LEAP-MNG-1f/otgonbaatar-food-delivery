"use client";
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import Image from "next/image";

const DeliveryZone = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyBeK6kNAnqtWp2xZpPHmcXOjESpg5cu6ek", // Replace with your Google Maps API Key
        version: "weekly",
      });
      const { Map } = await loader.importLibrary("maps");

      const mapOptions = {
        center: { lat: 47.91996922842304, lng: 106.91756534492119 },
        zoom: 13,
      };

      if (mapRef.current && !mapInstance.current) {
        mapInstance.current = new Map(mapRef.current, mapOptions);
      }
    };

    initMap();
  }, []);

  return (
    <div className="flex flex-col w-full h-auto px-[120px] my-10 gap-8">
      <div ref={mapRef} className="w-full h-[616px]"></div>
      <div className="flex flex-col gap-10">
        <div className="flex text-text-secondary font-poppins text-22 font-bold leading-normal gap-1">
          <Image
            src="/Icons/Star.svg"
            alt="Food Delivery Logo"
            width={20}
            height={20}
          />
          Хүргэлтийн бүс дэх хаягууд
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="flex flex-col w-[588px] h-[388px] p-6 items-start rounded-2xl shadow-md gap-4">
            <div className="w-full text-text-secondary font-poppins text-22 font-bold leading-normal py-4 border-b border-[#18BA51]">
              А бүс
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col w-[262px] items-start gap-4">
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  Нархан хотхон
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  26-р байр
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  26-р байр
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  45-р байр
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  3-р байр
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  Хоймор хотхон
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  Хангай хотхон
                </p>
              </div>
              <div className="flex flex-col w-[262px] items-start gap-4">
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  Нархан хотхон
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  26-р байр
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  26-р байр
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  45-р байр
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  3-р байр
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  Хоймор хотхон
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  Хангай хотхон
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[588px] h-[388px] p-6 items-start rounded-2xl shadow-md gap-4">
            <div className="w-full text-text-secondary font-poppins text-22 font-bold leading-normal py-4 border-b border-[#18BA51]">
              Б бүс
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col w-[262px] items-start gap-4">
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  Нархан хотхон
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  26-р байр
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  26-р байр
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  45-р байр
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  3-р байр
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  Хоймор хотхон
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  Хангай хотхон
                </p>
              </div>
              <div className="flex flex-col w-[262px] items-start gap-4">
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  Нархан хотхон
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  26-р байр
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  26-р байр
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  45-р байр
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  3-р байр
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  Хоймор хотхон
                </p>
                <p className="text-black text-center text-base font-sf-pro font-normal leading-normal">
                  Хангай хотхон
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryZone;
