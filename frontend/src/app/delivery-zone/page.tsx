"use client";
import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import Image from "next/image";

const Zone = ({
  name,
  onClick,
}: {
  name: string;
  onClick: (address: string) => void;
}) => (
  <div
    className="flex flex-col w-[262px] items-start gap-4 cursor-pointer"
    onClick={() => onClick(name)}
  >
    {[
      "Нархан хотхон",
      "26-р байр",
      "45-р байр",
      "3-р байр",
      "Хоймор хотхон",
      "Хангай хотхон",
    ].map((item, idx) => (
      <p
        key={idx}
        className="text-black text-center text-base font-sf-pro font-normal leading-normal"
      >
        {item}
      </p>
    ))}
  </div>
);

const DeliveryZone = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef<any>(null);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [currentMarker, setCurrentMarker] = useState<google.maps.Marker | null>(
    null
  );

  const addresses = [
    { name: "Нархан хотхон", lat: 47.92164442983421, lng: 106.8995205699435 },
    { name: "26-р байр", lat: 47.920969, lng: 106.918565 },
    { name: "45-р байр", lat: 47.922331, lng: 106.91794 },
    { name: "3-р байр", lat: 47.923045, lng: 106.921867 },
    { name: "Хоймор хотхон", lat: 47.920111, lng: 106.904756 },
    { name: "Хангай хотхон", lat: 47.91906343008927, lng: 106.9114124810029 },
  ];

  const geocoder = useRef<google.maps.Geocoder | null>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || "",
        version: "weekly",
        libraries: ["places"],
      });

      const { Map } = await loader.importLibrary("maps");
      geocoder.current = new google.maps.Geocoder();

      const mapOptions = {
        center: { lat: 47.91996922842304, lng: 106.91756534492119 },
        zoom: 13,
      };

      if (mapRef.current && !mapInstance.current) {
        mapInstance.current = new Map(mapRef.current, mapOptions);
      }

      addresses.forEach(({ name, lat, lng }) => {
        new google.maps.Marker({
          position: { lat, lng },
          map: mapInstance.current,
          title: name,
        });
      });
    };

    initMap();
  }, []);

  const handleAddressClick = (address: string) => {
    setSelectedAddress(address);

    if (geocoder.current) {
      geocoder.current.geocode({ address }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results) {
          const { geometry } = results[0];
          const lat = geometry.location.lat();
          const lng = geometry.location.lng();

          mapInstance.current.setCenter({ lat, lng });

          if (currentMarker) {
            currentMarker.setMap(null);
          }

          const marker = new google.maps.Marker({
            position: { lat, lng },
            map: mapInstance.current,
            title: address,
          });

          setCurrentMarker(marker);
        } else {
          alert("хаяг байхгүй байна");
        }
      });
    }
  };

  return (
    <div className="flex flex-col container w-full h-auto px-[120px] my-10 gap-8">
      <div ref={mapRef} className="w-full h-[616px]" />
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
          {["А бүс", "Б бүс"].map((zone, idx) => (
            <div
              key={idx}
              className="flex flex-col w-[588px] h-[388px] p-6 items-start rounded-2xl shadow-md gap-4"
            >
              <div className="w-full text-text-secondary font-poppins text-22 font-bold leading-normal py-4 border-b border-[#18BA51]">
                {zone}
              </div>
              <div className="flex gap-4">
                <Zone name={zone} onClick={handleAddressClick} />
                <Zone name={zone} onClick={handleAddressClick} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedAddress && (
        <div className="mt-4 p-4 bg-white shadow-lg rounded-xl">
          <p className="text-xl font-bold">Таны сонгосон хаяг:</p>
          <p className="text-lg">{selectedAddress}</p>
        </div>
      )}
    </div>
  );
};

export default DeliveryZone;
