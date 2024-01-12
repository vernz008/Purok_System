import React, { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import axiosClient from "../../../../utils/axios/axios-client";
import { API_MEMBER, API_PUROK } from "../../../../utils/urls/api_url";
import { MdEditDocument } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import moment from "moment";

const Update_MasterList = ({
  setUpdate_MasterList_Modal,
  setMasterList_Data,
  update_masterList_Modal,
  purok_data,
  organization_data,
  group_data,
}) => {
  const [memberById_data, setMemberByID_Data] = useState([]);
  const [memberById_data_view, setMemberByID_Data_View] = useState([]);
  const [update_inputData, setUpdate_InputData] = useState({
    purok_id: 0,
    org_id: 0,
    group_id: 0,
    firstname: "",
    middlename: "",
    lastname: "",
    birthday: "",
    gender: "",
    house_no: "",
    street: "",
    barangay: "",
    status: "",
  });
  const [toggle_update, setToggle_Update] = useState({
    update_org: false,
    update_purok: false,
    update_group: false,
    update_firstname: false,
    update_middlename: false,
    update_lastname: false,
    update_birthday: false,
    update_gender: false,
    update_house_no: false,
    update_street: false,
    update_barangay: false,
    update_status: false,
  });
  console.log(update_inputData);
  console.log(memberById_data_view);
  console.log(memberById_data);

  useEffect(() => {
    axiosClient
      .get(API_MEMBER + `/${update_masterList_Modal.id}`)
      .then((res) => {
        console.log(res.data);
        // Raw Data
        setMemberByID_Data_View(res.data.member_info);

        // Data For Viewing
        setMemberByID_Data(res.data.member_info_raw);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const submit_update_member = (e) => {
    e.preventDefault();
    alert("GG");

    // axiosClient
    //   .put(API_MEMBER + `/${update_masterList_Modal.id}`, {
    //     firstname: update_inputData.firstname,
    //     middlename: update_inputData.middlename,
    //     lastname: update_inputData.lastname,
    //     gender: update_inputData.gender,
    //     birthday: update_inputData.birthday,
    //     address:
    //       update_inputData.house_no +
    //       "/" +
    //       update_inputData.street +
    //       "/" +
    //       update_inputData.barangay,
    //     purok_id: update_inputData.purok_id,
    //     group_id: update_inputData.group_id,
    //     org_id: update_inputData.org_id,
    //     status: update_inputData.status,
    //   })
    //   .then((res) => {
    //     setMemberByID_Data(res.data.member_info_raw);
    //     setMemberByID_Data_View(res.data.member_info);
    //     setToggle_Update({
    //       ...toggle_update,
    //       update_firstname: false,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <>
      <div className="absolute !top-0 !left-0 w-screen h-screen z-999 bg-black/50 flex justify-center items-center overflow-hidden">
        <div
          className="h-[75%] w-[65%] bg-white rounded-md
      monitor_md:h-[80%]
      monitor_md:w-[70%]
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
                onClick={() => {
                  setUpdate_MasterList_Modal({
                    ...update_masterList_Modal,
                    activator: false,
                    id: 0,
                  });
                }}
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
            {/* ********************************************************************************************************* */}
            <fieldset
              className="border-[2px] px-10 h-[8.5rem] rounded-md
                monitor_md:h-[6.5rem]
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
                className="w-full h-[6rem] flex justify-between items-center
                  monitor_md:h-[4rem]
                  "
              >
                {/* 
                    
                    
                    Purok
                    
                    
                    */}
                <div className="flex  w-[32%]">
                  <div className="flex flex-col w-[80%]">
                    <label
                      htmlFor=""
                      className={`text-[16px] font-semibold ${
                        toggle_update.update_purok === true ? "" : "underline"
                      }
                        monitor_md:text-[14px]
                      `}
                    >
                      Purok / District
                    </label>
                    {toggle_update.update_purok === true ? (
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
                        className="border-[1px] shadow-md shadow-slate-400 w-full h-[2.5rem] outline-none cursor-pointer text-[14px] px-1
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
                    ) : (
                      <>
                        <span className="text-[16px] font-bold w-full">
                          <h1>{memberById_data_view.purok}</h1>
                        </span>
                      </>
                    )}
                  </div>
                  <div className="w-[40%] flex justify-evenly items-center">
                    {toggle_update.update_purok === true ? (
                      <>
                        <button
                          className="rounded-full flex justify-center items-center border-[2px] border-green-600 text-green-600 transition-all ease-in-out duration-300 hover:bg-green-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <IoIosSave />
                        </button>
                        <button
                          onClick={() =>
                            setToggle_Update({
                              ...toggle_update,
                              update_purok: false,
                            })
                          }
                          className="rounded-full flex justify-center items-center border-[2px] border-red-600 text-red-600 transition-all ease-in-out duration-300 hover:bg-red-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <FaTimesCircle />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setToggle_Update({
                            ...toggle_update,
                            update_purok: true,
                          });
                          setUpdate_InputData({
                            ...update_inputData,
                            purok_id: memberById_data.purok_id,
                            org_id: memberById_data.org_id,
                            group_id: memberById_data.group_id,
                            firstname: memberById_data.firstname,
                            middlename: memberById_data.middlename,
                            lastname: memberById_data.lastname,
                            birthday: memberById_data.birthday,
                            gender: memberById_data.gender,
                            house_no: memberById_data?.address?.split("/")[0],
                            street: memberById_data?.address?.split("/")[1],
                            barangay: memberById_data?.address?.split("/")[2],
                            status: memberById_data.status,
                          });
                        }}
                        className="rounded-full flex justify-center items-center border-[2px] border-yellow-500 text-yellow-500 transition-all ease-in-out duration-300 hover:bg-yellow-500 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                      >
                        <MdEditDocument />
                      </button>
                    )}
                  </div>
                </div>
                {/* 
                    
                    
                    Purok
                    
                    
                    */}

                {/* 
                    
                    
                    Organization
                    
                    
                    */}
                <div className="flex  w-[32%]">
                  <div className="flex flex-col w-[80%]">
                    <label
                      htmlFor=""
                      className={`text-[16px] font-semibold ${
                        toggle_update.update_org === true ? "" : "underline"
                      }
                        monitor_md:text-[14px]
                      `}
                    >
                      Organization
                    </label>
                    {toggle_update.update_org === true ? (
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
                    ) : (
                      <span className="text-[16px] font-bold w-full">
                        <h1>{memberById_data_view.kapisanan}</h1>
                      </span>
                    )}
                  </div>
                  <div className="w-[40%] flex justify-evenly items-center">
                    {toggle_update.update_org === true ? (
                      <>
                        <button
                          className="rounded-full flex justify-center items-center border-[2px] border-green-600 text-green-600 transition-all ease-in-out duration-300 hover:bg-green-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <IoIosSave />
                        </button>
                        <button
                          onClick={() =>
                            setToggle_Update({
                              ...toggle_update,
                              update_org: false,
                            })
                          }
                          className="rounded-full flex justify-center items-center border-[2px] border-red-600 text-red-600 transition-all ease-in-out duration-300 hover:bg-red-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <FaTimesCircle />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setToggle_Update({
                            ...toggle_update,
                            update_org: true,
                          });
                          setUpdate_InputData({
                            ...update_inputData,
                            purok_id: memberById_data.purok_id,
                            org_id: memberById_data.org_id,
                            group_id: memberById_data.group_id,
                            firstname: memberById_data.firstname,
                            middlename: memberById_data.middlename,
                            lastname: memberById_data.lastname,
                            birthday: memberById_data.birthday,
                            gender: memberById_data.gender,
                            house_no: memberById_data?.address?.split("/")[0],
                            street: memberById_data?.address?.split("/")[1],
                            barangay: memberById_data?.address?.split("/")[2],
                            status: memberById_data.status,
                          });
                        }}
                        className="rounded-full flex justify-center items-center border-[2px] border-yellow-500 text-yellow-500 transition-all ease-in-out duration-300 hover:bg-yellow-500 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                      >
                        <MdEditDocument />
                      </button>
                    )}
                  </div>
                </div>
                {/* 
                    
                    
                    Organization
                    
                    
                    */}

                {/* 
                    
                    
                    Group
                    
                    
                    */}
                <div className="flex  w-[32%]">
                  <div className="flex flex-col w-[80%]">
                    <label
                      htmlFor=""
                      className={`text-[16px] font-semibold ${
                        toggle_update.update_group === true ? "" : "underline"
                      }
                        monitor_md:text-[14px]
                      `}
                    >
                      Group
                    </label>
                    {toggle_update.update_group === true ? (
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
                    ) : (
                      <>
                        <span className="text-[16px] font-bold w-full">
                          <h1>{memberById_data_view.group}</h1>
                        </span>
                      </>
                    )}
                  </div>
                  <div className="w-[40%] flex justify-evenly items-center">
                    {toggle_update.update_group === true ? (
                      <>
                        <button
                          className="rounded-full flex justify-center items-center border-[2px] border-green-600 text-green-600 transition-all ease-in-out duration-300 hover:bg-green-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <IoIosSave />
                        </button>
                        <button
                          onClick={() =>
                            setToggle_Update({
                              ...toggle_update,
                              update_group: false,
                            })
                          }
                          className="rounded-full flex justify-center items-center border-[2px] border-red-600 text-red-600 transition-all ease-in-out duration-300 hover:bg-red-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <FaTimesCircle />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setToggle_Update({
                            ...toggle_update,
                            update_group: true,
                          });
                          setUpdate_InputData({
                            ...update_inputData,
                            purok_id: memberById_data.purok_id,
                            org_id: memberById_data.org_id,
                            group_id: memberById_data.group_id,
                            firstname: memberById_data.firstname,
                            middlename: memberById_data.middlename,
                            lastname: memberById_data.lastname,
                            birthday: memberById_data.birthday,
                            gender: memberById_data.gender,
                            house_no: memberById_data?.address?.split("/")[0],
                            street: memberById_data?.address?.split("/")[1],
                            barangay: memberById_data?.address?.split("/")[2],
                            status: memberById_data.status,
                          });
                        }}
                        className="rounded-full flex justify-center items-center border-[2px] border-yellow-500 text-yellow-500 transition-all ease-in-out duration-300 hover:bg-yellow-500 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                      >
                        <MdEditDocument />
                      </button>
                    )}
                  </div>
                </div>
                {/* 
                    
                    
                    Group
                    
                    
                    */}
              </div>
              {/* Assignments */}
            </fieldset>
            {/* ********************************************************************************************************* */}

            {/* ********************************************************************************************************* */}
            <fieldset
              className="border-[2px] px-10 h-[14rem] rounded-md
                monitor_md:h-[11rem] 
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
                className="w-full h-[6rem] flex justify-between items-center
                  monitor_md:h-[4rem]
                  "
              >
                {/* 
                    
                    
                    Firstname
                    
                    
                    */}
                <form onSubmit={submit_update_member} className="flex  w-[32%]">
                  <div className="flex flex-col w-[80%]">
                    <label
                      htmlFor=""
                      className={`text-[16px] font-semibold ${
                        toggle_update.update_firstname === true
                          ? ""
                          : "underline"
                      }
                        monitor_md:text-[14px]
                      `}
                    >
                      First Name
                    </label>
                    {toggle_update.update_firstname === true ? (
                      <input
                        type="text"
                        required
                        value={update_inputData.firstname}
                        onChange={(e) => {
                          setUpdate_InputData({
                            ...update_inputData,
                            firstname: e.target.value,
                          });
                        }}
                        placeholder="First Name. . . ."
                        className="border-[1px] w-full shadow-md shadow-slate-400 outline-none
                            monitor_md:h-[1.8rem] 
                            monitor_md:text-[12px] 
                            monitor_md:px-2 
                            "
                      />
                    ) : (
                      <>
                        <span className="text-[16px] font-bold w-full">
                          <h1>{memberById_data_view.firstname}</h1>
                        </span>
                      </>
                    )}
                  </div>
                  <div className="w-[40%] flex justify-evenly items-center">
                    {toggle_update.update_firstname === true ? (
                      <>
                        <button
                          type="submit"
                          className="rounded-full flex justify-center items-center border-[2px] border-green-600 text-green-600 transition-all ease-in-out duration-300 hover:bg-green-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <IoIosSave />
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setToggle_Update({
                              ...toggle_update,
                              update_firstname: false,
                            })
                          }
                          className="rounded-full flex justify-center items-center border-[2px] border-red-600 text-red-600 transition-all ease-in-out duration-300 hover:bg-red-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <FaTimesCircle />
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setToggle_Update({
                            ...toggle_update,
                            update_firstname: true,
                          });
                          setUpdate_InputData({
                            ...update_inputData,
                            purok_id: memberById_data.purok_id,
                            org_id: memberById_data.org_id,
                            group_id: memberById_data.group_id,
                            firstname: memberById_data.firstname,
                            middlename: memberById_data.middlename,
                            lastname: memberById_data.lastname,
                            birthday: memberById_data.birthday,
                            gender: memberById_data.gender,
                            house_no: memberById_data?.address?.split("/")[0],
                            street: memberById_data?.address?.split("/")[1],
                            barangay: memberById_data?.address?.split("/")[2],
                            status: memberById_data.status,
                          });
                        }}
                        className="rounded-full flex justify-center items-center border-[2px] border-yellow-500 text-yellow-500 transition-all ease-in-out duration-300 hover:bg-yellow-500 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                      >
                        <MdEditDocument />
                      </button>
                    )}
                  </div>
                </form>

                {/* 
                    
                    
                    Middlename
                    
                    
                    */}
                <form
                  className="flex  w-[32%]"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="flex flex-col w-[80%]">
                    <label
                      htmlFor=""
                      className={`text-[16px] font-semibold ${
                        toggle_update.update_middlename === true
                          ? ""
                          : "underline"
                      }
                        monitor_md:text-[14px]
                      `}
                    >
                      Middle Name
                    </label>
                    {toggle_update.update_middlename === true ? (
                      <input
                        type="text"
                        required
                        value={update_inputData.middlename}
                        onChange={(e) => {
                          setUpdate_InputData({
                            ...update_inputData,
                            middlename: e.target.value,
                          });
                        }}
                        placeholder="Middle Name. . . ."
                        className="border-[1px] w-full shadow-md shadow-slate-400 outline-none
                          monitor_md:h-[1.8rem] 
                          monitor_md:text-[12px] 
                          monitor_md:px-2 
                          "
                      />
                    ) : (
                      <>
                        <span className="text-[16px] font-bold w-full">
                          <h1>{memberById_data_view.middlename}</h1>
                        </span>
                      </>
                    )}
                  </div>
                  <div className="w-[40%] flex justify-evenly items-center">
                    {toggle_update.update_middlename === true ? (
                      <>
                        <button
                          className="rounded-full flex justify-center items-center border-[2px] border-green-600 text-green-600 transition-all ease-in-out duration-300 hover:bg-green-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <IoIosSave />
                        </button>
                        <button
                          onClick={() =>
                            setToggle_Update({
                              ...toggle_update,
                              update_middlename: false,
                            })
                          }
                          className="rounded-full flex justify-center items-center border-[2px] border-red-600 text-red-600 transition-all ease-in-out duration-300 hover:bg-red-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <FaTimesCircle />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setToggle_Update({
                            ...toggle_update,
                            update_middlename: true,
                          });
                          setUpdate_InputData({
                            ...update_inputData,
                            purok_id: memberById_data.purok_id,
                            org_id: memberById_data.org_id,
                            group_id: memberById_data.group_id,
                            firstname: memberById_data.firstname,
                            middlename: memberById_data.middlename,
                            lastname: memberById_data.lastname,
                            birthday: memberById_data.birthday,
                            gender: memberById_data.gender,
                            house_no: memberById_data?.address?.split("/")[0],
                            street: memberById_data?.address?.split("/")[1],
                            barangay: memberById_data?.address?.split("/")[2],
                            status: memberById_data.status,
                          });
                        }}
                        className="rounded-full flex justify-center items-center border-[2px] border-yellow-500 text-yellow-500 transition-all ease-in-out duration-300 hover:bg-yellow-500 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                      >
                        <MdEditDocument />
                      </button>
                    )}
                  </div>
                </form>

                {/* 
                
                
                
                Lastname 
                
                
                
                */}
                <form
                  className="flex  w-[32%]"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="flex flex-col w-[80%]">
                    <label
                      htmlFor=""
                      className={`text-[16px] font-semibold ${
                        toggle_update.update_lastname === true
                          ? ""
                          : "underline"
                      }
                        monitor_md:text-[14px]
                      `}
                    >
                      Last Name
                    </label>
                    {toggle_update.update_lastname === true ? (
                      <input
                        type="text"
                        required
                        value={update_inputData.lastname}
                        onChange={(e) => {
                          setUpdate_InputData({
                            ...update_inputData,
                            lastname: e.target.value,
                          });
                        }}
                        placeholder="Last Name. . . ."
                        className="border-[1px] w-full shadow-md shadow-slate-400 outline-none
                          monitor_md:h-[1.8rem] 
                          monitor_md:text-[12px] 
                          monitor_md:px-2 
                          "
                      />
                    ) : (
                      <>
                        <span className="text-[16px] font-bold w-full">
                          <h1>{memberById_data_view.lastname}</h1>
                        </span>
                      </>
                    )}
                  </div>
                  <div className="w-[40%] flex justify-evenly items-center">
                    {toggle_update.update_lastname === true ? (
                      <>
                        <button
                          className="rounded-full flex justify-center items-center border-[2px] border-green-600 text-green-600 transition-all ease-in-out duration-300 hover:bg-green-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <IoIosSave />
                        </button>
                        <button
                          onClick={() =>
                            setToggle_Update({
                              ...toggle_update,
                              update_lastname: false,
                            })
                          }
                          className="rounded-full flex justify-center items-center border-[2px] border-red-600 text-red-600 transition-all ease-in-out duration-300 hover:bg-red-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <FaTimesCircle />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setToggle_Update({
                            ...toggle_update,
                            update_lastname: true,
                          });
                          setUpdate_InputData({
                            ...update_inputData,
                            purok_id: memberById_data.purok_id,
                            org_id: memberById_data.org_id,
                            group_id: memberById_data.group_id,
                            firstname: memberById_data.firstname,
                            middlename: memberById_data.middlename,
                            lastname: memberById_data.lastname,
                            birthday: memberById_data.birthday,
                            gender: memberById_data.gender,
                            house_no: memberById_data?.address?.split("/")[0],
                            street: memberById_data?.address?.split("/")[1],
                            barangay: memberById_data?.address?.split("/")[2],
                            status: memberById_data.status,
                          });
                        }}
                        className="rounded-full flex justify-center items-center border-[2px] border-yellow-500 text-yellow-500 transition-all ease-in-out duration-300 hover:bg-yellow-500 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                      >
                        <MdEditDocument />
                      </button>
                    )}
                  </div>
                </form>
                {/* 
                
                
                
                Lastname 
                
                
                
                */}
              </div>
              {/* Full name */}

              {/* Bday Gender Status */}
              <div
                className="flex justify-between w-full
                  monitor_md:mt-1
                  "
              >
                <div
                  className="w-full h-[6rem] flex justify-between items-center
                  monitor_md:h-[4rem]
                  "
                >
                  {/* 
                    
                    
                    Birthday
                    
                    
                    */}
                  <form
                    className="flex  w-[32%]"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div className="flex flex-col w-[80%]">
                      <label
                        htmlFor=""
                        className={`text-[16px] font-semibold ${
                          toggle_update.update_birthday === true
                            ? ""
                            : "underline"
                        }
                          monitor_md:text-[14px]
                        `}
                      >
                        Birthday
                      </label>
                      {toggle_update.update_birthday === true ? (
                        <input
                          type="date"
                          required
                          value={update_inputData.birthday}
                          onChange={(e) => {
                            setUpdate_InputData({
                              ...update_inputData,
                              birthday: e.target.value,
                            });
                          }}
                          className="border-[1px] w-full shadow-md shadow-slate-400 outline-none
                          monitor_md:h-[1.8rem] 
                          monitor_md:text-[12px] 
                          monitor_md:px-2 
                          "
                        />
                      ) : (
                        <>
                          <span className="text-[16px] font-bold w-full">
                            <h1>
                              {moment(memberById_data_view.birthday).format(
                                "MMMM d, YYYY"
                              )}
                            </h1>
                          </span>
                        </>
                      )}
                    </div>
                    <div className="w-[40%] flex justify-evenly items-center">
                      {toggle_update.update_birthday === true ? (
                        <>
                          <button
                            className="rounded-full flex justify-center items-center border-[2px] border-green-600 text-green-600 transition-all ease-in-out duration-300 hover:bg-green-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                          >
                            <IoIosSave />
                          </button>
                          <button
                            onClick={() =>
                              setToggle_Update({
                                ...toggle_update,
                                update_birthday: false,
                              })
                            }
                            className="rounded-full flex justify-center items-center border-[2px] border-red-600 text-red-600 transition-all ease-in-out duration-300 hover:bg-red-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                          >
                            <FaTimesCircle />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => {
                            setToggle_Update({
                              ...toggle_update,
                              update_birthday: true,
                            });
                            setUpdate_InputData({
                              ...update_inputData,
                              purok_id: memberById_data.purok_id,
                              org_id: memberById_data.org_id,
                              group_id: memberById_data.group_id,
                              firstname: memberById_data.firstname,
                              middlename: memberById_data.middlename,
                              lastname: memberById_data.lastname,
                              birthday: memberById_data.birthday,
                              gender: memberById_data.gender,
                              house_no: memberById_data?.address?.split("/")[0],
                              street: memberById_data?.address?.split("/")[1],
                              barangay: memberById_data?.address?.split("/")[2],
                              status: memberById_data.status,
                            });
                          }}
                          className="rounded-full flex justify-center items-center border-[2px] border-yellow-500 text-yellow-500 transition-all ease-in-out duration-300 hover:bg-yellow-500 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <MdEditDocument />
                        </button>
                      )}
                    </div>
                  </form>
                  {/* 
                    
                    
                    Birthday
                    
                    
                    */}

                  {/* 
                    
                    
                    Gender
                    
                    
                    */}
                  <div className="flex  w-[32%]">
                    <div className="flex flex-col w-[80%]">
                      <label
                        htmlFor=""
                        className={`text-[16px] font-semibold ${
                          toggle_update.update_gender === true
                            ? ""
                            : "underline"
                        }
                          monitor_md:text-[14px]
                        `}
                      >
                        Gender
                      </label>
                      {toggle_update.update_gender === true ? (
                        <select
                          name=""
                          id=""
                          required
                          value={update_inputData.gender}
                          onChange={(e) => {
                            setUpdate_InputData({
                              ...update_inputData,
                              gender: e.target.value,
                            });
                          }}
                          className="border-[1px] shadow-md shadow-slate-400 w-[67%] h-[2.5rem] outline-none cursor-pointer text-[14px] px-1
                        monitor_md:h-[1.5rem]
                        monitor_md:text-[12px]
                        monitor_md:w-full
                        "
                        >
                          <option value="" disabled selected>
                            Select Gender . . . .
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      ) : (
                        <>
                          <span className="text-[16px] font-bold w-full">
                            <h1>{memberById_data_view.gender}</h1>
                          </span>
                        </>
                      )}
                    </div>
                    <div className="w-[40%] flex justify-evenly items-center">
                      {toggle_update.update_gender === true ? (
                        <>
                          <button
                            className="rounded-full flex justify-center items-center border-[2px] border-green-600 text-green-600 transition-all ease-in-out duration-300 hover:bg-green-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                          >
                            <IoIosSave />
                          </button>
                          <button
                            onClick={() =>
                              setToggle_Update({
                                ...toggle_update,
                                update_gender: false,
                              })
                            }
                            className="rounded-full flex justify-center items-center border-[2px] border-red-600 text-red-600 transition-all ease-in-out duration-300 hover:bg-red-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                          >
                            <FaTimesCircle />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => {
                            setToggle_Update({
                              ...toggle_update,
                              update_gender: true,
                            });
                            setUpdate_InputData({
                              ...update_inputData,
                              purok_id: memberById_data.purok_id,
                              org_id: memberById_data.org_id,
                              group_id: memberById_data.group_id,
                              firstname: memberById_data.firstname,
                              middlename: memberById_data.middlename,
                              lastname: memberById_data.lastname,
                              birthday: memberById_data.birthday,
                              gender: memberById_data.gender,
                              house_no: memberById_data?.address?.split("/")[0],
                              street: memberById_data?.address?.split("/")[1],
                              barangay: memberById_data?.address?.split("/")[2],
                              status: memberById_data.status,
                            });
                          }}
                          className="rounded-full flex justify-center items-center border-[2px] border-yellow-500 text-yellow-500 transition-all ease-in-out duration-300 hover:bg-yellow-500 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <MdEditDocument />
                        </button>
                      )}
                    </div>
                  </div>
                  {/* 
                    
                    
                    Gender
                    
                    
                    */}

                  {/* 
                  
                  
                  Status
                  
                  
                  */}
                  <div className="flex  w-[32%]">
                    <div className="flex flex-col w-[80%]">
                      <label
                        htmlFor=""
                        className={`text-[16px] font-semibold ${
                          toggle_update.update_status === true
                            ? ""
                            : "underline"
                        }
                          monitor_md:text-[14px]
                        `}
                      >
                        Status
                      </label>
                      {toggle_update.update_status === true ? (
                        <select
                          name=""
                          id=""
                          required
                          value={update_inputData.status}
                          onChange={(e) => {
                            setUpdate_InputData({
                              ...update_inputData,
                              status: e.target.value,
                            });
                          }}
                          className="border-[1px] shadow-md shadow-slate-400 w-[67%] h-[2.5rem] outline-none cursor-pointer text-[14px] px-1
                        monitor_md:h-[1.5rem]
                        monitor_md:text-[12px]
                        monitor_md:w-full
                        "
                        >
                          <option value="" disabled selected>
                            Select Status . . . .
                          </option>
                          <option value="IN">IN</option>
                          <option value="OUT">OUT</option>
                        </select>
                      ) : (
                        <>
                          <span className="text-[16px] font-bold w-full">
                            <h1>{memberById_data_view.status}</h1>
                          </span>
                        </>
                      )}
                    </div>
                    <div className="w-[40%] flex justify-evenly items-center">
                      {toggle_update.update_status === true ? (
                        <>
                          <button
                            className="rounded-full flex justify-center items-center border-[2px] border-green-600 text-green-600 transition-all ease-in-out duration-300 hover:bg-green-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                          >
                            <IoIosSave />
                          </button>
                          <button
                            onClick={() =>
                              setToggle_Update({
                                ...toggle_update,
                                update_status: false,
                              })
                            }
                            className="rounded-full flex justify-center items-center border-[2px] border-red-600 text-red-600 transition-all ease-in-out duration-300 hover:bg-red-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                          >
                            <FaTimesCircle />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => {
                            setToggle_Update({
                              ...toggle_update,
                              update_status: true,
                            });
                            setUpdate_InputData({
                              ...update_inputData,
                              purok_id: memberById_data.purok_id,
                              org_id: memberById_data.org_id,
                              group_id: memberById_data.group_id,
                              firstname: memberById_data.firstname,
                              middlename: memberById_data.middlename,
                              lastname: memberById_data.lastname,
                              birthday: memberById_data.birthday,
                              gender: memberById_data.gender,
                              house_no: memberById_data?.address?.split("/")[0],
                              street: memberById_data?.address?.split("/")[1],
                              barangay: memberById_data?.address?.split("/")[2],
                              status: memberById_data.status,
                            });
                          }}
                          className="rounded-full flex justify-center items-center border-[2px] border-yellow-500 text-yellow-500 transition-all ease-in-out duration-300 hover:bg-yellow-500 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <MdEditDocument />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                {/* 
                  
                  
                  Status
                  
                  
                  */}
              </div>
              {/* 
              
              

              Bday Gender Status 
              

              
              */}
            </fieldset>
            {/* ********************************************************************************************************* */}

            {/* ********************************************************************************************************* */}
            <fieldset
              className="border-[2px] px-10 h-[8.5rem] rounded-md
                monitor_md:h-[6.5rem]
                "
            >
              <legend
                className="text-[18px] font-bold
                  monitor_md:text-[16px]
                  "
              >
                Address
              </legend>

              {/* 
              
              
              
              Address 
              
              
              
              */}
              <div
                className="w-full h-[6rem] flex justify-between items-center
                  monitor_md:h-[4rem]
                  "
              >
                {/* 
                    
                    
                    House Number / Lot Number
                    
                    
                    */}
                <form
                  className="flex  w-[32%]"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="flex flex-col w-[80%]">
                    <label
                      htmlFor=""
                      className={`text-[16px] font-semibold ${
                        toggle_update.update_house_no === true
                          ? ""
                          : "underline"
                      }
                        monitor_md:text-[14px]
                      `}
                    >
                      House No. / Lot No.
                    </label>
                    {toggle_update.update_house_no === true ? (
                      <input
                        type="text"
                        required
                        value={update_inputData.house_no}
                        onChange={(e) => {
                          setUpdate_InputData({
                            ...update_inputData,
                            house_no: e.target.value,
                          });
                        }}
                        placeholder="House / Lot No. . . ."
                        className="border-[1px] w-full shadow-md shadow-slate-400 outline-none
                          monitor_md:h-[1.8rem] 
                          monitor_md:text-[12px] 
                          monitor_md:px-2 
                          "
                      />
                    ) : (
                      <>
                        <span className="text-[16px] font-bold w-full">
                          <h1>
                            {memberById_data_view?.address?.split("/")[0]}
                          </h1>
                        </span>
                      </>
                    )}
                  </div>
                  <div className="w-[40%] flex justify-evenly items-center">
                    {toggle_update.update_house_no === true ? (
                      <>
                        <button
                          type="submit"
                          className="rounded-full flex justify-center items-center border-[2px] border-green-600 text-green-600 transition-all ease-in-out duration-300 hover:bg-green-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <IoIosSave />
                        </button>
                        <button
                          onClick={() =>
                            setToggle_Update({
                              ...toggle_update,
                              update_house_no: false,
                            })
                          }
                          className="rounded-full flex justify-center items-center border-[2px] border-red-600 text-red-600 transition-all ease-in-out duration-300 hover:bg-red-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <FaTimesCircle />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setToggle_Update({
                            ...toggle_update,
                            update_house_no: true,
                          });
                          setUpdate_InputData({
                            ...update_inputData,
                            purok_id: memberById_data.purok_id,
                            org_id: memberById_data.org_id,
                            group_id: memberById_data.group_id,
                            firstname: memberById_data.firstname,
                            middlename: memberById_data.middlename,
                            lastname: memberById_data.lastname,
                            birthday: memberById_data.birthday,
                            gender: memberById_data.gender,
                            house_no: memberById_data?.address?.split("/")[0],
                            street: memberById_data?.address?.split("/")[1],
                            barangay: memberById_data?.address?.split("/")[2],
                            status: memberById_data.status,
                          });
                        }}
                        className="rounded-full flex justify-center items-center border-[2px] border-yellow-500 text-yellow-500 transition-all ease-in-out duration-300 hover:bg-yellow-500 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                      >
                        <MdEditDocument />
                      </button>
                    )}
                  </div>
                </form>
                {/* 
                    
                    
                    House Number / Lot Number
                    
                    
                    */}

                {/* 
                    
                    
                    Street
                    
                    
                    */}
                <form
                  className="flex  w-[32%]"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="flex flex-col w-[80%]">
                    <label
                      htmlFor=""
                      className={`text-[16px] font-semibold ${
                        toggle_update.update_street === true ? "" : "underline"
                      }
                        monitor_md:text-[14px]
                      `}
                    >
                      Street
                    </label>
                    {toggle_update.update_street === true ? (
                      <input
                        type="text"
                        required
                        value={update_inputData.street}
                        onChange={(e) => {
                          setUpdate_InputData({
                            ...update_inputData,
                            street: e.target.value,
                          });
                        }}
                        placeholder="Street. . . ."
                        className="border-[1px] w-full shadow-md shadow-slate-400 outline-none
                          monitor_md:h-[1.8rem] 
                          monitor_md:text-[12px] 
                          monitor_md:px-2 
                          "
                      />
                    ) : (
                      <>
                        <span className="text-[16px] font-bold w-full">
                          <h1>
                            {memberById_data_view?.address?.split("/")[1]}
                          </h1>
                        </span>
                      </>
                    )}
                  </div>
                  <div className="w-[40%] flex justify-evenly items-center">
                    {toggle_update.update_street === true ? (
                      <>
                        <button
                          type="submit"
                          className="rounded-full flex justify-center items-center border-[2px] border-green-600 text-green-600 transition-all ease-in-out duration-300 hover:bg-green-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <IoIosSave />
                        </button>
                        <button
                          onClick={() =>
                            setToggle_Update({
                              ...toggle_update,
                              update_street: false,
                            })
                          }
                          className="rounded-full flex justify-center items-center border-[2px] border-red-600 text-red-600 transition-all ease-in-out duration-300 hover:bg-red-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <FaTimesCircle />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setToggle_Update({
                            ...toggle_update,
                            update_street: true,
                          });
                          setUpdate_InputData({
                            ...update_inputData,
                            purok_id: memberById_data.purok_id,
                            org_id: memberById_data.org_id,
                            group_id: memberById_data.group_id,
                            firstname: memberById_data.firstname,
                            middlename: memberById_data.middlename,
                            lastname: memberById_data.lastname,
                            birthday: memberById_data.birthday,
                            gender: memberById_data.gender,
                            house_no: memberById_data?.address?.split("/")[0],
                            street: memberById_data?.address?.split("/")[1],
                            barangay: memberById_data?.address?.split("/")[2],
                            status: memberById_data.status,
                          });
                        }}
                        className="rounded-full flex justify-center items-center border-[2px] border-yellow-500 text-yellow-500 transition-all ease-in-out duration-300 hover:bg-yellow-500 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                      >
                        <MdEditDocument />
                      </button>
                    )}
                  </div>
                </form>
                {/* 
                    
                    
                    Street
                    
                    
                    */}

                {/* 
                
                
                
                Barangay 
                
                
                
                
                */}
                <form
                  className="flex  w-[32%]"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="flex flex-col w-[80%]">
                    <label
                      htmlFor=""
                      className={`text-[16px] font-semibold ${
                        toggle_update.update_barangay === true
                          ? ""
                          : "underline"
                      }
                        monitor_md:text-[14px]
                      `}
                    >
                      Barangay
                    </label>
                    {toggle_update.update_barangay === true ? (
                      <input
                        type="text"
                        required
                        value={update_inputData.barangay}
                        onChange={(e) => {
                          setUpdate_InputData({
                            ...update_inputData,
                            barangay: e.target.value,
                          });
                        }}
                        placeholder="Barangay. . . ."
                        className="border-[1px] w-full shadow-md shadow-slate-400 outline-none
                          monitor_md:h-[1.8rem] 
                          monitor_md:text-[12px] 
                          monitor_md:px-2 
                          "
                      />
                    ) : (
                      <>
                        <span className="text-[16px] font-bold w-full">
                          <h1>
                            {memberById_data_view?.address?.split("/")[2]}
                          </h1>
                        </span>
                      </>
                    )}
                  </div>
                  <div className="w-[40%] flex justify-evenly items-center">
                    {toggle_update.update_barangay === true ? (
                      <>
                        <button
                          type="submit"
                          className="rounded-full flex justify-center items-center border-[2px] border-green-600 text-green-600 transition-all ease-in-out duration-300 hover:bg-green-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <IoIosSave />
                        </button>
                        <button
                          onClick={() =>
                            setToggle_Update({
                              ...toggle_update,
                              update_barangay: false,
                            })
                          }
                          className="rounded-full flex justify-center items-center border-[2px] border-red-600 text-red-600 transition-all ease-in-out duration-300 hover:bg-red-600 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                        >
                          <FaTimesCircle />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setToggle_Update({
                            ...toggle_update,
                            update_barangay: true,
                          });
                          setUpdate_InputData({
                            ...update_inputData,
                            purok_id: memberById_data.purok_id,
                            org_id: memberById_data.org_id,
                            group_id: memberById_data.group_id,
                            firstname: memberById_data.firstname,
                            middlename: memberById_data.middlename,
                            lastname: memberById_data.lastname,
                            birthday: memberById_data.birthday,
                            gender: memberById_data.gender,
                            house_no: memberById_data?.address?.split("/")[0],
                            street: memberById_data?.address?.split("/")[1],
                            barangay: memberById_data?.address?.split("/")[2],
                            status: memberById_data.status,
                          });
                        }}
                        className="rounded-full flex justify-center items-center border-[2px] border-yellow-500 text-yellow-500 transition-all ease-in-out duration-300 hover:bg-yellow-500 hover:text-white
                    monitor_md:h-[2rem]
                    monitor_md:w-[2rem]
                    monitor_md:text-[18px]
                    "
                      >
                        <MdEditDocument />
                      </button>
                    )}
                  </div>
                </form>
                {/* 
                
                
                
                Barangay 
                
                
                
                
                */}
              </div>
              {/* Address */}
            </fieldset>
            {/* ********************************************************************************************************* */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Update_MasterList;
