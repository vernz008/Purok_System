import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Register_Admin = () => {
  return (
    <section className="w-screen h-screen overflow-hidden bg-[#f4f3f3] ">
      {/* Main container */}
      <div className="w-full h-full flex justify-center items-center">
        {/* Input Container */}
        <div className="w-[60%] h-[80%] bg-white rounded-md shadow-md shadow-slate-400 border-none">
          <form className="w-full h-full flex flex-col justify-start items-center">
            <div className="w-full h-[12%] p-5 mb-1">
              <h1 className="mx-[2rem] text-[18px] font-bold">
                Create User Account
              </h1>
            </div>
            {/* 1st Set */}
            <fieldset className="border-[2px] border-gray-300 rounded-sm w-[80%] h-[26%]">
              <legend className="text-[16px] font-bold">User Full Name</legend>
              <div className="flex justify-between items-center p-5 w-full">
                <div className="flex flex-col w-[30%]">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="border-[1px] border-gray-300 rounded-sm shadow-md shadow-slate-300 h-[2rem] px-2 text-[14px] outline-none"
                    placeholder="Your First name"
                    required
                  />
                </div>
                <div className="flex flex-col w-[30%]">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    className="border-[1px] border-gray-300 rounded-sm shadow-md shadow-slate-300 h-[2rem] px-2 text-[14px] outline-none"
                    placeholder="Your Middle name"
                    required
                  />
                </div>
                <div className="flex flex-col w-[30%]">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="border-[1px] border-gray-300rounded-sm shadow-md shadow-slate-300 h-[2rem] px-2 text-[14px] outline-none"
                    placeholder="Your Last name"
                    required
                  />
                </div>
              </div>
            </fieldset>

            {/* 2nd Set */}
            <fieldset className="border-[2px] border-gray-300 rounded-sm w-[80%] h-[40%] mt-3">
              <legend className="text-[16px] font-bold">Account Info</legend>
              <div className="flex justify-between items-center p-5 h-[45%]">
                <div className="flex flex-col w-full">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    Account Role
                  </label>
                  <select
                    name=""
                    id=""
                    className="w-[25%] h-[2rem] text-[14px] border-[1px] border-gray-300 rounded-sm shadow-md shadow-slate-300 outline-none cursor-pointer"
                    required
                  >
                    <option value="">Select Roles</option>
                    <option value="">Admin</option>
                    <option value="">User</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between items-center p-5 h-[5em]">
                <div className="flex flex-col">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    Username
                  </label>
                  <input
                    type="text"
                    className="border-[1px] border-gray-300 rounded-sm shadow-md shadow-slate-300 h-[2rem] px-2 text-[14px] outline-none"
                    placeholder="Your username"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    className="border-[1px] border-gray-300 rounded-sm shadow-md shadow-slate-300 h-[2rem] px-2 text-[14px] outline-none"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="border-[1px] border-gray-300 rounded-sm shadow-md shadow-slate-300 h-[2rem] px-2 text-[14px] outline-none"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
            </fieldset>

            <div className="w-full h-[8%] flex justify-center items-center mt-6">
              <button className="w-[10rem] h-[2.5rem] bg-blue-500 text-white flex justify-center items-center rounded-md transition-all ease-in-out duration-300 hover:bg-blue-400">
                <p className="font-bold text-[18px]">Submit</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register_Admin;
