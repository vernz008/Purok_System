import React, { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import Profile_Pic from "../../../assets/images/testPic.jpeg";
import Create_Attendee from "../modal/Attendance/Create_Attendee";

const Attendance_Content = () => {
  const [modal_create, setModal_Create] = useState(false);
  return (
    <div className="w-[95%] h-[90%] bg-white rounded-md shadow-md shadow-gray-400 flex flex-col justify-between items-center">
      <div
        className="w-full h-[15%] p-6
        monitor_md:p-4
        monitor_md:h-[18%]
        "
      >
        <div
          className="w-full h-auto border-t-[1px] border-r-[1px] border-l-[1px] shadow-lg shadow-slate-300 p-3 flex justify-start items-center
        monitor_md:h-[4.5rem]

        monitor_xxl:h-[5.5rem] 
        "
        >
          <div
            className="w-[12%] h-[3rem]
          monitor_md:h-[2.5rem]
          monitor_md:w-[10rem]

          monitor_xxl:h-[2.5rem]
          "
          >
            <button
              onClick={() => setModal_Create(true)}
              className="w-full h-full flex justify-center items-center rounded-md transition-all ease-in-out duration-300 bg-green-600 text-white hover:bg-green-500"
            >
              <MdAssignmentAdd
                className="mr-4 text-[20px]
              monitor_md:text-[16px]

              monitor_xxl:text-[20px]
              "
              />
              <p
                className="font-bold
              monitor_md:text-[14px]

              monitor_xxl:text-[16px]
              "
              >
                Add Attendance
              </p>
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-full h-[90%] p-2
    "
      >
        <h1
          className="px-5 text-[25px] font-bold
        monitor_md:text-[22px]
        "
        >
          Attendance
        </h1>
        <div
          className="w-full 
        monitor_md:h-[24.5rem]
        "
        >
          <div
            className="w-full h-full overflow-auto
          monitor_md:p-5
          "
          >
            {/* Card */}
            <div
              className="rounded-sm border-[2px] border-slate-300 shadow-lg shadow-slate-400
            monitor_md:h-[16.5rem] 
            monitor_md:w-[12rem] 
            "
            >
              <div className="h-[45%] w-full bg-gray-200 ">
                <div className="w-full h-full flex justify-center items-center border-b-[2px]">
                  <img
                    src={Profile_Pic}
                    alt=""
                    className="rounded-full 
                    monitor_md:h-[5.5rem]
                    monitor_md:w-[5.5rem]
                    "
                  />
                </div>
                <div
                  className="w-full flex justify-center items-center
                monitor_md:mt-1
                "
                >
                  <div>
                    <p className="text-[14px] font-bold">Name of Attendee</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card */}
          </div>
        </div>
      </div>
      {modal_create === true ? (
        <Create_Attendee setModal_Create={setModal_Create} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Attendance_Content;
