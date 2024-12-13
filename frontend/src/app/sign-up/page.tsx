"use client";
import { Checkbox } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const router = useRouter();

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

  const toggleRePasswordVisibility = () => {
    const passwordInput = document.getElementById(
      "repassword-toggle"
    ) as HTMLInputElement | null;
    const eyeOpen = document.getElementById(
      "repassword-eye-open"
    ) as HTMLElement | null;
    const eyeClosed = document.getElementById(
      "repassword-eye-closed"
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

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Form submitted"); // Debugging line to check if this is triggered

    if (password !== rePassword) {
      toast.error("Нууц үг хоорондоо таарахгүй байна.");
      return;
    }

    const userData = { name, email, phoneNumber, password };
    try {
      const response = await fetch("http://localhost:8000/api/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Амжилттай бүртгэгдлээ!");
        resetForm();
        setTimeout(() => {
          router.push("/sign-in"); // Redirect to sign-in page
        }, 3000);
      } else {
        toast.error(data.message || "Бүртгэл үүсгэхэд алдаа гарлаа.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  const isFormValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    phoneNumber.trim() !== "" &&
    password.trim() !== "" &&
    rePassword.trim() !== "" &&
    termsAgreed;

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setRePassword("");
    setTermsAgreed(false);
  };

  return (
    <div className="flex flex-col w-[448px] h-auto gap-12 p-8">
      <p className="flex items-center justify-center text-3xl font-bold">
        Бүртгүүлэх
      </p>
      <form onSubmit={submitForm} className="flex flex-col gap-4">
        <div className="max-w-sm">
          <label className="block text-sm mb-2">Нэр</label>
          <div className="relative">
            <input
              id="name"
              type="text"
              className="py-3 pl-4 pr-10 w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Нэрээ оруулна уу"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="max-w-sm">
          <label className="block text-sm mb-2">И-мэйл</label>
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
          <label className="block text-sm mb-2">Утасны дугаар</label>
          <div className="relative">
            <input
              id="email"
              type="phone"
              className="py-3 pl-4 pr-10 w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Та утасны дугаар оруулна уу"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
        </div>
        <div className="max-w-sm">
          <label className="block text-sm mb-2">Нууц үг давтах</label>
          <div className="relative">
            <input
              id="repassword-toggle"
              type="repassword"
              className="py-3 pl-4 pr-10 w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Нууц үг"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
            <button
              type="button"
              onClick={toggleRePasswordVisibility}
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
                  id="repassword-eye-open"
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"
                  className="hidden"
                />
                <path
                  id="repassword-eye-closed"
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm10.93 4.36a13.09 13.09 0 0 0-1.53-2.36m-2.66-2.89A9.99 9.99 0 0 0 12 5c-2.21 0-4.28.89-5.74 2.39M9.75 15.52a3 3 0 0 1-4.23 0m2.24-2.06c-1.16-.91-2.4-2.14-3.7-3.61"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center w-full">
          <Checkbox
            checked={termsAgreed}
            onChange={(e) => setTermsAgreed(e.target.checked)}
            color="default"
            sx={{ color: "#1C1B1F" }}
          />
          <label
            htmlFor="terms-checkbox"
            className="text-sm font-medium text-gray-900"
          >
            Үйлчилгээний нөхцөл зөвшөөрөх
          </label>
        </div>
        <div className="flex flex-col gap-8">
          <button
            type="submit"
            className={`text-center px-4 py-2 rounded ${
              isFormValid
                ? "bg-[#18BA51] text-[#FFFFFF]"
                : "bg-[#EEEFF2] text-[#1C20243D]"
            }`}
            disabled={!isFormValid}
          >
            Бүртгүүлэх
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default SignUp;
