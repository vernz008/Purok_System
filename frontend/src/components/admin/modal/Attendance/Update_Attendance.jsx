import React, { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import axiosClient from "../../../../utils/axios/axios-client";
import Cookies from "js-cookie";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  API_ATTENDANCE,
  API_MEMBER,
  API_MEMBER_RECORDS,
  API_RECORD,
  API_USER,
} from "../../../../utils/urls/api_url";
import {
  MdEditDocument,
  MdPersonRemoveAlt1,
  MdFormatListBulletedAdd,
} from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { FaUserPlus, FaUserMinus } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import moment from "moment";

const Update_Attendance = ({
  setModal_Update,
  modal_update,
  setAttendance_Data,
}) => {
  const [loading_data, setLoading_Data] = useState(true);
  const [loading_trigger_update, setLoading_Trigger_Update] = useState(false);
  const [loading_trigger_update_title, setLoading_Trigger_Update_Title] =
    useState(false);
  const [loading_trigger_update_schedule, setLoading_Trigger_Update_Schedule] =
    useState(false);
  const [attendance_title, setAttendance_Title] = useState("");
  const [attendance_schedule, setAttendance_Schedule] = useState("");
  // const [attendance_id, setAttendance_Id] = useState(0);
  const [user_data, setUser_Data] = useState([]);
  // const [member_data, setMember_Data] = useState([]);
  // const [record_data, setRecord_Data] = useState([]);
  const [update_trigger, setUpdate_Trigger] = useState(false);
  const [update_trigger_schedule, setUpdate_Trigger_Schedule] = useState(false);
  const [button_attend_member, setButton_Attend_Member] = useState({
    loading: false,
    id: 0,
  });
  // const [record_member_data, setRecord_Member_Data] = useState({
  //   member_count: 0,
  //   member_attended: 0,
  //   member_attended_list: [],
  // });

  //  .filter((val, index, self) => {
  //     index ===
  //     self.findIndex(
  //       (m) => m.member_Id === val.member_Id
  //     );
  //   return index;
  // })

  useEffect(() => {
    axiosClient
      .get(API_USER + `/${Cookies.get("user_id")}`)
      .then((res) => {
        setUser_Data(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axiosClient
      .get(API_ATTENDANCE + `/${modal_update.id}`)
      .then((res) => {
        setAttendance_Title(res.data.pamagat);
        setAttendance_Schedule(res.data.schedule);
        // setAttendance_Id(res.data.id);
        setLoading_Data(false);
      })
      .catch((error) => {
        console.log(error);
      });

    // axiosClient
    //   .get(API_RECORD)
    //   .then((res) => {
    //     const total_members_count = res.data.length;
    //     const total_attendee = res.data.filter(
    //       (fil) => fil.attendance_Id === attendance_id
    //     ).length;
    //     const total_attendee_list = res.data.filter(
    //       (val) => val.attendance_Id === attendance_id
    //     );

    //   setRecord_Data(res.data);
    //   setRecord_Member_Data({
    //     ...record_member_data,
    //     member_attended: total_attendee,
    //     member_count: total_members_count,
    //     member_attended_list: total_attendee_list,
    //   });
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }, []);

  return (
    <div className="bg-black/50 w-screen h-screen absolute top-0 left-0 overflow-hidden flex justify-center items-center">
      <div
        className="bg-white rounded-md
      monitor_md:h-[45%]
      monitor_md:w-[25%]
      "
      >
        <div>
          {/* modal header */}
          <div
            className="w-full bg-blue-500 flex justify-between items-center rounded-tr-md rounded-tl-md
            monitor_md:h-[3rem]
            monitor_md:px-3
            "
          >
            <span>
              <h1
                className="text-white font-bold
            monitor_md:text-[18px]
            "
              >
                Attendance Details
              </h1>
            </span>
            <span>
              <button
                className="text-red-500 bg-white rounded-full transition-all ease-in-out duration-300 hover:text-red-400"
                onClick={() => {
                  setModal_Update(false);
                }}
              >
                <FaTimesCircle className="monitor_md:text-[1.5rem]" />
              </button>
            </span>
          </div>
          {/* modal header */}

          {/* modal body */}
          {loading_data === true ? (
            <>
              <div
                className="flex justify-center items-center w-full
                monitor_md:h-[14rem]
                "
              >
                <span>
                  <AiOutlineLoading3Quarters className="animate-spin text-[2.5rem]" />
                </span>
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center h-full w-full">
              <div
                className="h-full flex justify-center items-center
                  monitor_md:py-5
                  monitor_md:w-[95%]
                  "
              >
                <div
                  className=" h-full 
                  monitor_md:w-[90%]
                  "
                >
                  {/* 1st  */}
                  <div
                    className="border-[1px] border-gray-300 flex flex-col items-start justify-center shadow-md shadow-slate-300
                    monitor_md:px-[1rem]
                    monitor_md:h-[4rem]
                    "
                  >
                    <div className="flex">
                      <span
                        className="font-bold 
                        monitor_md:text-[16px]
                        "
                      >
                        <label htmlFor="">Created By : </label>
                      </span>
                      <span
                        className="
                        monitor_md:ml-1 
                        monitor_md:text-[16px]
                        "
                      >
                        <p>{user_data.username}</p>
                      </span>
                    </div>

                    <div className="flex"></div>
                  </div>
                  {/* 1st  */}

                  {/* 2nd  */}

                  <div
                    className="border-[1px] border-gray-300 shadow-md shadow-slate-300 w-full flex flex-col justify-center items-center
                    monitor_md:mt-3
                    monitor_md:h-[6.5rem]
                    "
                  >
                    {/* 
                    
                    
                    
                    
                    Title
                    
                    
                    
                    
                    */}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();

                        setLoading_Trigger_Update_Title(true);

                        axiosClient
                          .put(API_ATTENDANCE + `/${modal_update.id}`, {
                            pamagat: attendance_title,
                            schedule: attendance_schedule,
                            user_id: Cookies.get("user_id"),
                          })
                          .then((res) => {
                            setAttendance_Data(res.data);
                            setLoading_Trigger_Update_Title(false);
                            setUpdate_Trigger(false);
                          })
                          .catch((error) => {
                            console.log(error.response.status);
                          });
                      }}
                      className="flex flex-col 
                          monitor_md:w-[90%]
                          monitor_md:h-[1.8rem]
                          "
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        {loading_trigger_update_title === true ? (
                          <div
                            className="h-full flex justify-center items-center
                          monitor_md:w-[70%]
                          "
                          >
                            <AiOutlineLoading3Quarters className="animate-spin text-[1.5rem]" />
                          </div>
                        ) : (
                          <>
                            {update_trigger === true ? (
                              <>
                                <input
                                  type="text"
                                  required
                                  onChange={(e) =>
                                    setAttendance_Title(e.target.value)
                                  }
                                  value={attendance_title}
                                  className="border-[1px] outline-none shadow-md shadow-slate-300
                                  monitor_md:h-[1.6rem]
                                  monitor_md:px-2
                                  monitor_md:text-[14px]
                                  monitor_md:w-[70%]
                                  "
                                />
                              </>
                            ) : (
                              <span
                                className=" flex flex-col justify-center
                                monitor_md:w-[70%]
                                monitor_md:h-full
                                "
                              >
                                <p className="font-bold">{attendance_title}</p>
                              </span>
                            )}
                          </>
                        )}
                        <div className="w-[30%] flex justify-evenly items-center">
                          {update_trigger === true ? (
                            <>
                              {loading_trigger_update === true ? (
                                <>
                                  <div className="w-full h-full flex justify-center items-center">
                                    <AiOutlineLoading3Quarters className="text-[30px] animate-spin" />
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="w-full flex">
                                    <div
                                      className="w-full flex justify-evenly items-center
                                      monitor_md:text-[1.2rem]
                                      "
                                    >
                                      <button
                                        type="submit"
                                        disabled={
                                          loading_trigger_update_title === true
                                            ? true
                                            : false
                                        }
                                        className="flex justify-center items-center rounded-full border-[2px] border-green-600 text-green-600 transition-all ease-in-out duration-500 hover:bg-green-600 hover:text-white disabled:cursor-not-allowed
                                        monitor_md:h-[1.7rem]
                                        monitor_md:w-[1.7rem]
                                        monitor_md:text-[1rem]
                                        "
                                      >
                                        <IoIosSave />
                                      </button>
                                      <button
                                        type="button"
                                        disabled={
                                          loading_trigger_update_title === true
                                            ? true
                                            : false
                                        }
                                        onClick={() => {
                                          setUpdate_Trigger(false);
                                        }}
                                        className="flex justify-center items-center rounded-full border-[2px] border-red-600 text-red-600 transition-all ease-in-out duration-500 hover:bg-red-600 hover:text-white
                                        monitor_md:h-[1.7rem]
                                        monitor_md:w-[1.7rem]
                                        monitor_md:text-[1rem]
                                        "
                                      >
                                        <FaTimesCircle />
                                      </button>
                                    </div>
                                  </div>
                                </>
                              )}
                            </>
                          ) : (
                            <div>
                              <button
                                type="button"
                                disabled={
                                  loading_trigger_update_title === true
                                    ? true
                                    : false
                                }
                                onClick={() => {
                                  setUpdate_Trigger(true);
                                }}
                                className=" flex justify-center items-center rounded-full border-[2px] border-yellow-500 text-yellow-500 transition-all ease-in-out duration-500 hover:bg-yellow-500 hover:text-white 
                                monitor_md:h-[1.7rem]
                                monitor_md:w-[1.7rem]
                                monitor_md:text-[1rem]
                              "
                              >
                                <MdEditDocument />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </form>

                    {/* 
                    
                    
                    
                    
                    Date n Time
                    
                    
                    
                    
                    */}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();

                        setLoading_Trigger_Update_Schedule(true);

                        axiosClient
                          .put(API_ATTENDANCE + `/${modal_update.id}`, {
                            pamagat: attendance_title,
                            schedule: attendance_schedule,
                            user_id: Cookies.get("user_id"),
                          })
                          .then((res) => {
                            setAttendance_Data(res.data);
                            setLoading_Trigger_Update_Schedule(false);
                            setUpdate_Trigger_Schedule(false);

                            setUpdate_Trigger(false);
                          })
                          .catch((error) => {
                            console.log(error.response.status);
                          });
                      }}
                      className="flex flex-col 
                          monitor_md:w-[90%]
                          monitor_md:h-[1.8rem]
                          monitor_md:mt-2
                          "
                    >
                      <div className="w-full h-full flex">
                        {loading_trigger_update_schedule === true ? (
                          <div
                            className="h-full flex justify-center items-center
monitor_md:w-[70%]
"
                          >
                            <AiOutlineLoading3Quarters className="animate-spin text-[1.5rem]" />
                          </div>
                        ) : (
                          <>
                            {update_trigger_schedule === true ? (
                              <input
                                type="datetime-local"
                                required
                                onChange={(e) =>
                                  setAttendance_Schedule(e.target.value)
                                }
                                value={attendance_schedule}
                                className="border-[1px] outline-none shadow-md shadow-slate-300
                            monitor_md:h-[1.6rem]
                            monitor_md:px-2
                            monitor_md:text-[14px]
                            monitor_md:w-[70%]
                            "
                              />
                            ) : (
                              <span
                                className=" flex flex-col justify-center
                            monitor_md:w-[70%]
                            monitor_md:h-full
                            "
                              >
                                <p
                                  className="font-semibold
                            monitor_md:text-[14px]
                            "
                                >
                                  {moment(attendance_schedule).format(
                                    "MMM DD, YYYY (HH:mm)"
                                  )}
                                </p>
                              </span>
                            )}
                          </>
                        )}
                        <div className="w-[30%] flex justify-evenly items-center">
                          {update_trigger_schedule === true ? (
                            <>
                              <div className="w-full flex">
                                <div
                                  className="w-full flex justify-evenly items-center
                                      monitor_md:text-[1.2rem]
                                      "
                                >
                                  <button
                                    type="submit"
                                    disabled={
                                      loading_trigger_update_schedule === true
                                        ? true
                                        : false
                                    }
                                    className="flex justify-center items-center rounded-full border-[2px] border-green-600 text-green-600 transition-all ease-in-out duration-500 hover:bg-green-600 hover:text-white disabled:cursor-not-allowed
                                        monitor_md:h-[1.7rem]
                                        monitor_md:w-[1.7rem]
                                        monitor_md:text-[1rem]
                                        "
                                  >
                                    <IoIosSave />
                                  </button>
                                  <button
                                    disabled={
                                      loading_trigger_update_schedule === true
                                        ? true
                                        : false
                                    }
                                    onClick={() => {
                                      setUpdate_Trigger_Schedule(false);
                                    }}
                                    className="flex justify-center items-center rounded-full border-[2px] border-red-600 text-red-600 transition-all ease-in-out duration-500 hover:bg-red-600 hover:text-white
                                        monitor_md:h-[1.7rem]
                                        monitor_md:w-[1.7rem]
                                        monitor_md:text-[1rem]
                                        "
                                  >
                                    <FaTimesCircle />
                                  </button>
                                </div>
                              </div>
                            </>
                          ) : (
                            <div>
                              <button
                                type="button"
                                disabled={
                                  loading_trigger_update_schedule === true
                                    ? true
                                    : false
                                }
                                onClick={() => {
                                  setUpdate_Trigger_Schedule(true);
                                }}
                                className=" flex justify-center items-center rounded-full border-[2px] border-yellow-500 text-yellow-500 transition-all ease-in-out duration-500 hover:bg-yellow-500 hover:text-white 
                                monitor_md:h-[1.7rem]
                                monitor_md:w-[1.7rem]
                              monitor_md:text-[1rem]
                              "
                              >
                                <MdEditDocument />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* modal body */}
        </div>
      </div>
    </div>
  );
};

export default Update_Attendance;

/*

  <div className="w-full flex">
                                <input
                                  type="datetime-local"
                                  // required
                                  // onChange={(e) =>
                                  //   setAttendance_Title(e.target.value)
                                  // }
                                  // value={attendance_title}
                                  className="border-[1px] outline-none shadow-md shadow-slate-300
                                monitor_md:h-[2rem]
                                monitor_md:px-2
                                monitor_md:text-[14px]
                                monitor_md:w-[70%]
                                "
                                />
                                <div
                                  className="w-[30%] flex justify-evenly items-center
                                monitor_md:text-[1.2rem]
                                "
                                >
                                  <button
                                    type="submit"
                                    className="flex justify-center items-center rounded-full border-[2px] border-green-600 text-green-600 transition-all ease-in-out duration-500 hover:bg-green-600 hover:text-white
                                  monitor_md:h-[1.8rem]
                                  monitor_md:w-[1.8rem]
                                  "
                                  >
                                    <IoIosSave />
                                  </button>
                                  <button
                                    onClick={() => {
                                      setUpdate_Trigger(false);
                                    }}
                                    className="flex justify-center items-center rounded-full border-[2px] border-red-600 text-red-600 transition-all ease-in-out duration-500 hover:bg-red-600 hover:text-white
                                  monitor_md:h-[1.8rem]
                                  monitor_md:w-[1.8rem]
                                  "
                                  >
                                    <FaTimesCircle />
                                  </button>
                                </div>
                              </div>

*/
