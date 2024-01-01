import React from "react";

const Register_Admin = () => {
  return (
    <section className="w-screen h-screen overflow-hidden bg-[#f4f3f3] ">
      {/* Main container */}
      <div className="w-full h-full flex justify-center items-center">
        {/* Input Container */}
        <div className="w-[65%] h-[80%] bg-white rounded-md shadow-md shadow-slate-400 border-none">
          {/* 1st Set */}
          <form className="w-full h-full flex flex-col justify-evenly items-center">
            <fieldset className="border-[2px] border-black rounded-sm w-[80%] h-[25%]">
              <legend>User Full Name</legend>
              <div className="flex justify-between items-center p-5 w-full">
                <div className="flex flex-col w-[30%]">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    className="border-[1px] border-black rounded-sm shadow-md shadow-slate-300 h-[2rem] px-2 text-[14px] outline-none"
                  />
                </div>
                <div className="flex flex-col w-[30%]">
                  <label htmlFor="">Middle Name</label>
                  <input
                    type="text"
                    className="border-[1px] border-black rounded-sm shadow-md shadow-slate-300 h-[2rem] px-2 text-[14px] outline-none"
                  />
                </div>
                <div className="flex flex-col w-[30%]">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    className="border-[1px] border-black rounded-sm shadow-md shadow-slate-300 h-[2rem] px-2 text-[14px] outline-none"
                  />
                </div>
              </div>
            </fieldset>

            {/* 2nd Set */}
            <fieldset className="border-[2px] border-black rounded-sm w-[80%] h-[45%]">
              <legend>Account Info</legend>
              <div className="flex justify-between items-center p-5 h-[50%]">
                <div className="flex flex-col w-full">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    Account Role
                  </label>
                  <select
                    name=""
                    id=""
                    className="w-[35%] h-[2rem] text-[14px] border-[1px] border-black rounded-sm shadow-md shadow-slate-300 outline-none cursor-pointer"
                  >
                    <option value="">Select Roles</option>
                    <option value="">Admin</option>
                    <option value="">User</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between items-center p-5">
                <div className="flex flex-col">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    Username
                  </label>
                  <input
                    type="text"
                    className="border-[1px] border-black rounded-sm shadow-md shadow-slate-300 h-[2rem] px-2 text-[14px] outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    className="border-[1px] border-black rounded-sm shadow-md shadow-slate-300 h-[2rem] px-2 text-[14px] outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    Password
                  </label>
                  <input
                    type="text"
                    className="border-[1px] border-black rounded-sm shadow-md shadow-slate-300 h-[2rem] px-2 text-[14px] outline-none"
                  />
                </div>
              </div>
            </fieldset>

            <div>
              <button>Next</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register_Admin;
