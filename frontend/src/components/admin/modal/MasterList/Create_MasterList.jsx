import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const Create_MasterList = ({
  setMasterList_Modal,
  transfer_data,
  purok_data,
  org_data,
}) => {
  return (
    <div className="absolute !top-0 !left-0 w-screen h-screen z-999 bg-black/50 flex justify-center items-center">
      <div className="h-[75%] w-[65%] bg-white rounded-md">
        {/* Headers */}
        <div className="w-full h-[6.5rem] flex justify-between items-center bg-blue-600 rounded-tl-md rounded-tr-md">
          <span className="w-[90%] px-5">
            <p className="text-white text-[25px] underline font-bold">
              Masterlist
            </p>
            <p className="text-white text-[16px] font-semibold">Add Member</p>
          </span>
          <div className="h-full w-[5%] flex justify-end items-start p-2">
            <button
              className="bg-white border-[1.5px] border-red-500 rounded-full transition-all ease-in-out duration-300 text-red-500 hover:text-red-400"
              onClick={() => setMasterList_Modal(false)}
            >
              <FaTimesCircle className="text-[25px] " />
            </button>
          </div>
        </div>
        {/* Body */}
        <div className="w-full h-[85%] p-5">
          <form action="" className="w-full">
            <div className="w-full">
              <div className="w-full">
                <fieldset className="border-[2px] px-10 h-[8.5rem] rounded-md">
                  <legend className="text-[18px] font-bold">Assignment</legend>

                  {/* Assignments */}
                  <div className="w-full h-[5.5rem] flex justify-start items-center">
                    <div className="flex flex-col w-[37%]">
                      <label htmlFor="" className="text-[16px] font-semibold">
                        Organization
                      </label>
                      <select
                        name=""
                        id=""
                        required
                        className="border-[1px] shadow-md shadow-slate-400 w-[67%] h-[2.5rem] outline-none cursor-pointer text-[14px] px-1"
                      >
                        <option value="" disabled selected>
                          Select Organization . . . .
                        </option>
                        {org_data.map((data) => {
                          return (
                            <>
                              <option key={data.id} value={data.id}>
                                {data.kapisanan}
                              </option>
                            </>
                          );
                        })}
                      </select>
                    </div>
                    <div className="flex flex-col w-[25%]">
                      <label htmlFor="" className="text-[16px] font-semibold">
                        Purok
                      </label>
                      <select
                        name=""
                        id=""
                        required
                        className="border-[1px] shadow-md shadow-slate-400 w-full h-[2.5rem] outline-none cursor-pointer text-[14px] px-1"
                      >
                        <option value="" disabled selected>
                          Select Purok . . . .
                        </option>
                        {purok_data.map((data) => {
                          return (
                            <>
                              <option key={data.id} value={data.id}>
                                {data.purok} - {data.group}
                              </option>
                            </>
                          );
                        })}
                      </select>
                    </div>
                    {/* <div className="flex flex-col w-[25%]">
                      <label htmlFor="" className="text-[16px] font-semibold">
                        Transfer
                      </label>
                      <select
                        name=""
                        id=""
                        className="border-[1px] shadow-md shadow-slate-400 w-full h-[2.5rem] outline-none cursor-pointer text-[14px] px-1"
                      >
                        <option value="" disabled selected>
                          Select Transfer . . . .
                        </option>
                        {transfer_data.map((data) => {
                          return (
                            <>
                              <option value={data.id}>{data.status}</option>
                            </>
                          );
                        })}
                      </select>
                    </div> */}
                  </div>
                  {/* Assignments */}
                </fieldset>

                <fieldset className="border-[2px] px-10 h-[14rem] rounded-md">
                  <legend className="text-[18px] font-bold">
                    Personal Info
                  </legend>
                  {/* Full name */}
                  <div className="w-full h-[5.5rem] flex justify-between items-center">
                    <div className="flex flex-col w-[25%]">
                      <label htmlFor="" className="text-[16px] font-semibold">
                        Firstname
                      </label>
                      <input
                        type="text"
                        required
                        className="h-[2.2rem] shadow-md shadow-slate-400 outline-none px-2 border-[1px] text-[14px]"
                      />
                    </div>
                    <div className="flex flex-col w-[25%]">
                      <label htmlFor="" className="text-[16px] font-semibold">
                        Middlename
                      </label>
                      <input
                        type="text"
                        required
                        className="h-[2.2rem] shadow-md shadow-slate-400 outline-none px-2 border-[1px] text-[14px]"
                      />
                    </div>
                    <div className="flex flex-col w-[25%]">
                      <label htmlFor="" className="text-[16px] font-semibold">
                        Lastname
                      </label>
                      <input
                        type="text"
                        required
                        className="h-[2.2rem] shadow-md shadow-slate-400 outline-none px-2 border-[1px] text-[14px]"
                      />
                    </div>
                  </div>
                  {/* Full name */}

                  <div className="flex w-full">
                    {/* Birthdate */}
                    <div className="w-[50%]">
                      <div className="flex flex-col">
                        <label htmlFor="" className="text-[16px] font-semibold">
                          Birth Date
                        </label>
                        <input
                          type="date"
                          name=""
                          id=""
                          required
                          className="h-[2.5rem] w-[66%] shadow-md shadow-slate-400 outline-none px-2 border-[1px] text-[14px]"
                        />
                      </div>
                    </div>
                    {/* Birthdate */}

                    {/* Gender */}
                    <div className="w-[83%]">
                      <div className="flex flex-col">
                        <label htmlFor="" className="text-[16px] font-semibold">
                          Gender
                        </label>
                        <select
                          name=""
                          id=""
                          required
                          className="border-[1px] shadow-md shadow-slate-400 w-[40%] h-[2.5rem] outline-none cursor-pointer text-[14px] px-1"
                        >
                          <option value="" selected disabled>
                            Select Gender . . . .
                          </option>
                          <option value="Male" className="">
                            Male
                          </option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>
                    {/* Gender */}
                  </div>
                </fieldset>

                <fieldset className="border-[2px] px-10 h-[8.5rem] rounded-md">
                  <legend className="text-[18px] font-bold">Address</legend>

                  {/* Address */}
                  <div className="w-full h-[5.5rem] flex justify-between items-center">
                    <div className="flex flex-col w-[25%]">
                      <label htmlFor="" className="text-[16px] font-semibold">
                        Street
                      </label>
                      <input
                        type="text"
                        required
                        className="h-[2.2rem] shadow-md shadow-slate-400 outline-none px-2 border-[1px] text-[14px]"
                      />
                    </div>
                    <div className="flex flex-col w-[25%]">
                      <label htmlFor="" className="text-[16px] font-semibold">
                        Barangay
                      </label>
                      <input
                        type="text"
                        required
                        className="h-[2.2rem] shadow-md shadow-slate-400 outline-none px-2 border-[1px] text-[14px]"
                      />
                    </div>
                    <div className="flex flex-col w-[25%]">
                      <label htmlFor="" className="text-[16px] font-semibold">
                        Municipality
                      </label>
                      <input
                        type="text"
                        className="h-[2.2rem] shadow-md shadow-slate-400 outline-none px-2 border-[1px] text-[14px]"
                      />
                    </div>
                  </div>
                  {/*Address */}
                </fieldset>
              </div>
              <div className="w-full h-[2.5rem] flex justify-center items-center mt-5">
                <button
                  type="submit"
                  required
                  className="w-[20%] h-full bg-blue-500 transition-all duration-300 text-white font-bold text-[18px] rounded-md hover:bg-blue-400"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create_MasterList;
