"use client";
import { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
export default function Form() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <>
      <div className="flex flex-row space-x-7 m-7">
        <Image src="/logo.svg" alt="" width={192} height={60} />
        <Image src="/cib.svg" alt="" width={71} height={69} />
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center w-full h-dvh bg-white-100">
        <div className="flex justify-start items-center mt-50">
          <Image src="/goupe.svg" alt="Logo" width={527} height={227} className="mr-20 mb-60" />
        </div>

        <div className="flex items-center">
          <div className="inline-flex flex-col items-start gap-[38px] mb-48">
            <form onSubmit={handleSubmit} className="space-y-4 ml-56">
              <Image src="/white-logo.svg" alt="Logo" width={227} height={127} />

              <div>
                <h2 className="text-[#404040] font-poppins text-[32px] font-semibold leading-normal">WELCOME Agent!</h2>
                <p className="text-[#404040] font-poppins text-[20px] font-normal leading-normal mb-8">Let's get you logged in</p>
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700"></label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="flex w-[412px] h-[50px] pb-[9px] justify-center items-center flex-shrink-0 border-solid border-2 border-zinc-300 rounded"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700"></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="flex w-[412px] h-[50px] pb-[9px] justify-center items-center flex-shrink-0 border-solid border-2 border-zinc-300 rounded"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
                <p className="flex-1 justify-between  text-center underline">forgot password?</p>
              </div>

              <Link href="/client" className="flex w-[375px] px-[20px] py-[13px] justify-center items-center gap-[6px] rounded-[4px] bg-[#E2211C] text-white">
                Sign in as client
                <FaArrowRight className="ml-2" />
              </Link>

              <Link href="/agent" className="flex w-[375px] px-[20px] py-[13px] justify-center items-center gap-[6px] rounded-[4px] bg-white border-red-500 border-2 text-red-600">
                Sign in as agent
                <FaArrowRight className="text-red-600 ml-2 " />
              </Link>

              <p className="flex justify-center mr-20 mt-4">Not a member?</p>
            </form>
            <div className="flex justify-center items-center space-x-2 mb-48 bg-[#FAF5F5] rounded-lg p-3  mr-20 ">
              <FaArrowLeft />
              <span>Back To Home Page</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
