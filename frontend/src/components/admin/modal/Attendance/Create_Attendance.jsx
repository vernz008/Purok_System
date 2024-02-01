import React, { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import axiosClient from "../../../../utils/axios/axios-client";
import { API_ATTENDANCE, API_USER } from "../../../../utils/urls/api_url";
import Cookies from "js-cookie";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Create_Attendance = ({ setModal_Create, setAttendance_Data }) => {
  const [user_data, setUser_Data] = useState([]);
  const [loading_data, setLoading_Data] = useState(true);
  const [attendance_title, setAttendance_Title] = useState("");

  useEffect(() => {
    axiosClient
      .get(API_USER + `/${Cookies.get("user_id")}`)
      .then((res) => {
        setLoading_Data(false);
        setUser_Data(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-black/50 w-screen h-screen absolute top-0 left-0 overflow-hidden flex justify-center items-center">
      <div
        className="bg-white rounded-md
      monitor_md:h-[60%]
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
                Create Attendee
              </h1>
            </span>
            <span>
              <button
                className="text-red-500 bg-white rounded-full transition-all ease-in-out duration-300 hover:text-red-400"
                onClick={() => {
                  setModal_Create(false);
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
              monitor_md:h-[19.5rem]
              "
              >
                <span>
                  <AiOutlineLoading3Quarters className="animate-spin text-[2.5rem]" />
                </span>
              </div>
            </>
          ) : (
            <>
              <div
                className="w-full h-full flex justify-center items-center
            monitor_md:py-5
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
              monitor_md:px-[1.5rem]
              monitor_md:h-[4.5rem]
              "
                  >
                    <div
                      className="flex
                "
                    >
                      <span
                        className="font-bold 
                monitor_md:text-[14px]
                "
                      >
                        <label htmlFor="">User : </label>
                      </span>
                      <span
                        className="
                monitor_md:ml-1 
                monitor_md:text-[14px]
                "
                      >
                        <p>{user_data.username}</p>
                      </span>
                    </div>

                    <div className="flex">
                      <span
                        className="font-bold 
                monitor_md:text-[14px]
                "
                      >
                        <label htmlFor=""> Role : </label>
                      </span>
                      <span
                        className="
                monitor_md:ml-1 
                monitor_md:text-[14px]
                "
                      >
                        <p>{user_data.role}</p>
                      </span>
                    </div>
                  </div>
                  {/* 1st  */}

                  {/* 2nd  */}
                  <form
                    id="attendance"
                    onSubmit={(e) => {
                      e.preventDefault(e);

                      axiosClient
                        .post(API_ATTENDANCE, {
                          pamagat: attendance_title,
                          userid: Cookies.get("user_id"),
                        })
                        .then((res) => {
                          setAttendance_Data(res.data);
                          alert("created");
                        })
                        .catch((error) => {
                          console.log(error.response.status);
                        });
                    }}
                    className="border-[1px] border-gray-300 shadow-md shadow-slate-300 w-full flex flex-col justify-center items-center
              monitor_md:mt-2
              monitor_md:h-[7rem]
              "
                  >
                    {/* Title */}
                    <div
                      className="flex flex-col 
                monitor_md:w-[90%]
                monitor_md:h-[4rem]
                "
                    >
                      <span
                        className=" font-bold
                  monitor_md:text-[14px] 
                  "
                      >
                        <label htmlFor="">Attendance Title</label>
                      </span>
                      <input
                        type="text"
                        required
                        onChange={(e) => setAttendance_Title(e.target.value)}
                        value={attendance_title}
                        className="border-[1px] outline-none shadow-md shadow-slate-300
                  monitor_md:h-[2rem]
                  monitor_md:px-2
                  monitor_md:text-[14px]
                  "
                      />
                    </div>
                  </form>
                  {/* 2nd  */}

                  {/* 3rd  */}
                  <div
                    className="border-[1px] border-gray-300 flex items-center shadow-md shadow-slate-300 justify-center 
              monitor_md:px-[1.5rem]
              monitor_md:h-[4.5rem]
              monitor_md:mt-2
              "
                  >
                    <button
                      form="attendance"
                      type="submit"
                      className="bg-green-600 rounded-md font-bold text-white transition-all ease-in-out duration-300 hover:bg-green-500
                monitor_md:w-[80%]
                monitor_md:h-[2.5rem]
                monitor_md:text-[16px]
                "
                    >
                      Submit
                    </button>
                  </div>
                  {/* 3rd  */}
                </div>
              </div>
            </>
          )}

          {/* modal body */}
        </div>
      </div>
    </div>
  );
};

export default Create_Attendance;

/*
notes:

attendance module

create user folder
fill the title

in created user folder
fill members record who attended

user ownership of created folder
*/
