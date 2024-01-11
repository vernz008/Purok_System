import React, { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import axiosClient from "../../../../utils/axios/axios-client";
import { API_MEMBER } from "../../../../utils/urls/api_url";
import { MdEditDocument } from "react-icons/md";
const Update_MasterList = ({
  setUpdate_MasterList_Modal,
  update_masterList_Modal,
  purok_data,
  organization_data,
  group_data,
}) => {
  const [memberById_data, setMemberByID_Data] = useState([]);
  const [update_inputData, setUpdate_InputData] = useState({
    purok_id: "",
    org_id: "",
    group_id: "",
  });
  const [toggle_update, setToggle_Update] = useState({
    update_org: false,
    update_purok: false,
    update_group: false,
  });

  console.log(update_masterList_Modal.id);

  useEffect(() => {
    axiosClient
      .get(API_MEMBER + `/${update_masterList_Modal.id}`)
      .then((res) => {
        setMemberByID_Data(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const submit_update_member = (e) => {
    e.prevenDefault();
  };
  return (
    <>
      <div className="absolute !top-0 !left-0 w-screen h-screen z-999 bg-black/50 flex justify-center items-center overflow-hidden">
        <div
          className="h-[75%] w-[65%] bg-white rounded-md
      monitor_md:h-[75%]
      monitor_md:w-[60%]
      "
        >
          {/* Headers */}
          <div
            className="w-full h-[6.5rem] flex justify-between items-center bg-blue-600 rounded-tl-md rounded-tr-md
        monitor_md:h-[4rem]
        "
          >
            <span className="w-[90%] px-5">
              <p
                className="text-white text-[25px] underline font-bold
            monitor_md:text-[20px]
            "
              >
                Masterlist
              </p>
              <p
                className="text-white text-[16px] font-semibold
            monitor_md:text-[14px]
            "
              >
                Update Member Info
              </p>
            </span>
            <div className="h-full w-[5%] flex justify-end items-start p-2">
              <button
                className="bg-white border-[1.5px] border-red-500 rounded-full transition-all ease-in-out duration-300 text-red-500 hover:text-red-400"
                onClick={() =>
                  setUpdate_MasterList_Modal({
                    ...update_masterList_Modal,
                    activator: false,
                    id: 0,
                  })
                }
              >
                <FaTimesCircle
                  className="text-[25px]
              monitor_md:text-[22px]
              "
                />
              </button>
            </div>
          </div>
          {/* Body */}
          <div
            className="w-full h-[85%] p-5
        monitor_md:p-2
        monitor_md:px-5
        "
          >
            <form action="" onSubmit={submit_update_member} className="w-full">
              <div className="w-full">
                <div className="w-full">
                  <fieldset
                    className="border-[2px] px-10 h-[8.5rem] rounded-md
                monitor_md:h-[5.5rem]
                "
                  >
                    <legend
                      className="text-[18px] font-bold
                  monitor_md:text-[16px]
                  "
                    >
                      Assignment
                    </legend>

                    {/* Assignments */}
                    <div
                      className="w-full h-[5.5rem] flex justify-between items-center
                  monitor_md:h-[3.5rem]
                  "
                    >
                      {/* 
                    
                    
                    Purok
                    
                    
                    */}
                      {toggle_update.update_purok === true ? (
                        <div className="flex flex-col  w-[25%]">
                          <label
                            htmlFor=""
                            className="text-[16px] font-semibold
                        monitor_md:text-[14px]
                      "
                          >
                            Purok / District
                          </label>
                          <select
                            name=""
                            id=""
                            required
                            value={update_inputData.purok_id}
                            onChange={(e) => {
                              setUpdate_InputData({
                                ...update_inputData,
                                purok_id: parseInt(e.target.value),
                              });
                            }}
                            className="border-[1px] shadow-md shadow-slate-400 w-[67%] h-[2.5rem] outline-none cursor-pointer text-[14px] px-1
                        monitor_md:h-[1.5rem]
                        monitor_md:text-[12px]
                        monitor_md:w-full
                        "
                          >
                            <option value="" disabled selected>
                              Select Purok / District . . . .
                            </option>
                            {purok_data.map((data) => {
                              return (
                                <>
                                  <option key={data.id} value={data.id}>
                                    {data.purok}
                                  </option>
                                </>
                              );
                            })}
                          </select>
                        </div>
                      ) : (
                        <>
                          {/* Update toggle true */}
                          <div className="flex  w-[25%]">
                            <div className="w-[80%] ">
                              <label
                                htmlFor=""
                                className="text-[16px] font-semibold underline
                        monitor_md:text-[14px]
                      "
                              >
                                Purok / District
                              </label>
                              <span>
                                <p
                                  className="text-[16px] font-semibold
                        monitor_md:text-[16px]
                      "
                                >
                                  Data
                                </p>
                              </span>
                            </div>
                            <div className="w-[20%] flex justify-center items-center">
                              <button
                                className=" rounded-full flex justify-center items-center border-[2px] border-yellow-500 text-yellow-500 transition-all ease-in-out duration-500 hover:bg-yellow-500 hover:text-white
                              monitor_md:w-[2rem]
                              monitor_md:h-[2rem]
                              "
                              >
                                <MdEditDocument className="" />
                              </button>
                            </div>
                          </div>
                        </>
                      )}

                      {/* 
                    
                    
                    Organization
                    
                    
                    */}
                      {toggle_update.update_org === true ? (
                        <div className="flex flex-col w-[25%]">
                          <label
                            htmlFor=""
                            className="text-[16px] font-semibold
                        monitor_md:text-[14px]
                      "
                          >
                            Organization
                          </label>
                          <select
                            name=""
                            id=""
                            required
                            value={update_inputData.org_id}
                            onChange={(e) => {
                              setUpdate_InputData({
                                ...update_inputData,
                                org_id: parseInt(e.target.value),
                              });
                            }}
                            className="border-[1px] shadow-md shadow-slate-400 w-[67%] h-[2.5rem] outline-none cursor-pointer text-[14px] px-1
                        monitor_md:h-[1.5rem]
                        monitor_md:text-[12px]
                        monitor_md:w-full
                        "
                          >
                            <option value="" disabled selected>
                              Select Organization . . . .
                            </option>
                            {organization_data.map((data) => {
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
                      ) : (
                        <>
                          {/* Update toggle true */}
                          <div className="flex  w-[25%]">
                            <div className="w-[80%] ">
                              <label
                                htmlFor=""
                                className="text-[16px] font-semibold underline
                        monitor_md:text-[14px]
                      "
                              >
                                Organization
                              </label>
                              <span>
                                <p
                                  className="text-[16px] font-semibold
                        monitor_md:text-[16px]
                      "
                                >
                                  Data
                                </p>
                              </span>
                            </div>
                            <div className="w-[20%] flex justify-center items-center">
                              <button
                                className=" rounded-full flex justify-center items-center border-[2px] border-yellow-500 text-yellow-500 transition-all ease-in-out duration-500 hover:bg-yellow-500 hover:text-white
                              monitor_md:w-[2rem]
                              monitor_md:h-[2rem]
                              "
                              >
                                <MdEditDocument className="" />
                              </button>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Group */}
                      <div className="flex flex-col w-[25%]">
                        <label
                          htmlFor=""
                          className="text-[16px] font-semibold
                        monitor_md:text-[14px]
                      "
                        >
                          Group
                        </label>
                        <select
                          name=""
                          id=""
                          required
                          value={update_inputData.group_id}
                          onChange={(e) => {
                            setUpdate_InputData({
                              ...update_inputData,
                              group_id: parseInt(e.target.value),
                            });
                          }}
                          className="border-[1px] shadow-md shadow-slate-400 w-[67%] h-[2.5rem] outline-none cursor-pointer text-[14px] px-1
                        monitor_md:h-[1.5rem]
                        monitor_md:text-[12px]
                        monitor_md:w-full
                        "
                        >
                          <option value="" disabled selected>
                            Select Group . . . .
                          </option>
                          {group_data.map((data) => {
                            return (
                              <>
                                <option key={data.id} value={data.id}>
                                  {data.group}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    {/* Assignments */}
                  </fieldset>

                  <fieldset
                    className="border-[2px] px-10 h-[14rem] rounded-md
                monitor_md:h-[8.5rem] 
                "
                  >
                    <legend
                      className="text-[18px] font-bold
                  monitor_md:text-[16px]
                  "
                    >
                      Personal Info
                    </legend>
                    {/* Full name */}
                    <div
                      className="w-full h-[5.5rem] flex justify-between items-center
                  monitor_md:h-[3rem]
                  "
                    >
                      <div className="flex flex-col w-[25%]">
                        <label
                          htmlFor=""
                          className="text-[16px] font-semibold
                        monitor_md:text-[14px]
                      "
                        >
                          Firstname
                        </label>
                        <input
                          type="text"
                          required
                          className="h-[2.2rem] shadow-md shadow-slate-400 outline-none px-2 border-[1px] text-[14px]
                        monitor_md:h-[1.5rem]
                        monitor_md:text-[12px]
                        "
                        />
                      </div>
                      <div className="flex flex-col w-[25%]">
                        <label
                          htmlFor=""
                          className="text-[16px] font-semibold
                        monitor_md:text-[14px]
                      "
                        >
                          Middlename
                        </label>
                        <input
                          type="text"
                          required
                          className="h-[2.2rem] shadow-md shadow-slate-400 outline-none px-2 border-[1px] text-[14px]
                        monitor_md:h-[1.5rem]
                        monitor_md:text-[12px]
                        "
                        />
                      </div>
                      <div className="flex flex-col w-[25%]">
                        <label
                          htmlFor=""
                          className="text-[16px] font-semibold
                        monitor_md:text-[14px]
                      "
                        >
                          Lastname
                        </label>
                        <input
                          type="text"
                          required
                          className="h-[2.2rem] shadow-md shadow-slate-400 outline-none px-2 border-[1px] text-[14px]
                        monitor_md:h-[1.5rem]
                        monitor_md:text-[12px]
                        "
                        />
                      </div>
                    </div>
                    {/* Full name */}

                    <div
                      className="flex w-full
                  monitor_md:mt-1
                  "
                    >
                      {/* Birthdate */}
                      <div className="w-[50%]">
                        <div className="flex flex-col">
                          <label
                            htmlFor=""
                            className="text-[16px] font-semibold
                          monitor_md:text-[14px]
                        "
                          >
                            Birth Date
                          </label>
                          <input
                            type="date"
                            name=""
                            id=""
                            required
                            className="h-[2.5rem] w-[66%] shadow-md shadow-slate-400 outline-none px-2 border-[1px] text-[14px]
                          monitor_md:h-[1.5rem]
                          monitor_md:text-[12px]
                          "
                          />
                        </div>
                      </div>
                      {/* Birthdate */}

                      {/* Gender */}
                      <div className="w-[83%]">
                        <div className="flex flex-col">
                          <label
                            htmlFor=""
                            className="text-[16px] font-semibold
                        monitor_md:text-[14px]
                        "
                          >
                            Gender
                          </label>
                          <select
                            name=""
                            id=""
                            required
                            className="border-[1px] shadow-md shadow-slate-400 w-[40%] h-[2.5rem] outline-none cursor-pointer text-[14px] px-1
                          monitor_md:h-[1.5rem]
                          monitor_md:text-[12px]
                          "
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

                  <fieldset
                    className="border-[2px] px-10 h-[8.5rem] rounded-md
                monitor_md:h-[5.2rem]
                "
                  >
                    <legend
                      className="text-[18px] font-bold
                  monitor_md:text-[16px]
                  "
                    >
                      Address
                    </legend>

                    {/* Address */}
                    <div
                      className="w-full h-[5.5rem] flex justify-between items-center
                  monitor_md:h-[2.6rem]
                  "
                    >
                      <div className="flex flex-col w-[25%]">
                        <label
                          htmlFor=""
                          className="text-[16px] font-semibold
                         monitor_md:text-[14px]
                      "
                        >
                          Street
                        </label>
                        <input
                          type="text"
                          required
                          className="h-[2.2rem] shadow-md shadow-slate-400 outline-none px-2 border-[1px] text-[14px]
                        monitor_md:h-[1.5rem]
                        monitor_md:text-[12px]
                        "
                        />
                      </div>
                      <div className="flex flex-col w-[25%]">
                        <label
                          htmlFor=""
                          className="text-[16px] font-semibold
                         monitor_md:text-[14px]
                      "
                        >
                          Barangay
                        </label>
                        <input
                          type="text"
                          required
                          className="h-[2.2rem] shadow-md shadow-slate-400 outline-none px-2 border-[1px] text-[14px]
                        monitor_md:h-[1.5rem]
                        monitor_md:text-[12px]
                        "
                        />
                      </div>
                      <div className="flex flex-col w-[25%]">
                        <label
                          htmlFor=""
                          className="text-[16px] font-semibold
                         monitor_md:text-[14px]
                      "
                        >
                          Municipality
                        </label>
                        <input
                          type="text"
                          className="h-[2.2rem] shadow-md shadow-slate-400 outline-none px-2 border-[1px] text-[14px]
                        monitor_md:h-[1.5rem]
                        monitor_md:text-[12px]
                        "
                        />
                      </div>
                    </div>
                    {/*Address */}
                  </fieldset>
                </div>
                {/* <div
                  className="w-full h-[2.5rem] flex justify-center items-center mt-5
              monitor_md:mt-4
              monitor_md:h-[2rem]
              "
                >
                  <button
                    type="submit"
                    required
                    className="w-[20%] h-full bg-blue-500 transition-all duration-300 text-white font-bold text-[18px] rounded-md hover:bg-blue-400
                  monitor_md:text-[16px]
                  "
                  >
                    Submit
                  </button>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update_MasterList;
