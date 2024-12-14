"use client";

import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById(
      "password-toggle"
    ) as HTMLInputElement | null;
    const eyeOpen = document.getElementById("eye-open") as HTMLElement | null;
    const eyeClosed = document.getElementById(
      "eye-closed"
    ) as HTMLElement | null;

    if (passwordInput && eyeOpen && eyeClosed) {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeOpen.classList.remove("hidden");
        eyeClosed.classList.add("hidden");
      } else {
        passwordInput.type = "password";
        eyeOpen.classList.add("hidden");
        eyeClosed.classList.remove("hidden");
      }
    }
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="flex flex-col w-[448px] h-[549px] gap-12 p-8">
      <p className="flex items-center justify-center text-3xl font-bold">
        Нэвтрэх
      </p>
      <div className="flex flex-col gap-4">
        <div className="max-w-sm">
          <label className="block text-sm mb-2">Имэйл</label>
          <div className="relative">
            <input
              id="email"
              type="email"
              className="py-3 pl-4 pr-10 w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Имэйл хаягаа оруулна уу"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="max-w-sm">
          <label className="block text-sm mb-2">Нууц үг</label>
          <div className="relative">
            <input
              id="password-toggle"
              type="password"
              className="py-3 pl-4 pr-10 w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Нууц үг"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 focus:outline-none focus:text-blue-600"
            >
              <svg
                id="eye-icon"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  id="eye-open"
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"
                  className="hidden"
                />
                <path
                  id="eye-closed"
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm10.93 4.36a13.09 13.09 0 0 0-1.53-2.36m-2.66-2.89A9.99 9.99 0 0 0 12 5c-2.21 0-4.28.89-5.74 2.39M9.75 15.52a3 3 0 0 1-4.23 0m2.24-2.06c-1.16-.91-2.4-2.14-3.7-3.61"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-end text-sm mt-2 cursor-pointer">
            Нууц үг сэргээх
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <button
          className={`text-center px-4 py-2 rounded ${
            isFormValid
              ? "bg-[#18BA51] text-[#FFFFFF]"
              : "bg-[#EEEFF2] text-[#1C20243D]"
          }`}
          disabled={!isFormValid}
        >
          Нэвтрэх
        </button>
        <p className="flex justify-center text-[#3F4145] text-sm font-normal">
          Эсвэл
        </p>
        <Link href={"sign-up"}>
          <button className=" w-full text-center text-[#272727] px-4 py-2 rounded border border-[#18BA51] hover:bg-[#18BA51] hover:text-[#FFFFFF] transition-all duration-100">
            Бүртгүүлэх
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
