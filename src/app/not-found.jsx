"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="bg-error bg-cover bg-no-repeat bg-center min-h-screen flex flex-col justify-center items-center">
      <p className="font-Poppins font-semibold text-lg leading-[122%] text-black mt-96">
        Oops! Page Not Found
      </p>
      <button
        onClick={() => router.push("/")}
        className="bg-[#64ccc5] px-10 py-3 rounded-full text-white font-Poppins font-semibold mt-10 cursor-pointer hover:bg-[#44e6db] transition-colors duration-300"
      >
        BACK TO HOME
      </button>
    </div>
  );
};

export default NotFound;
