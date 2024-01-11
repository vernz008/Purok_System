import React, { useEffect, useState } from "react";
import PurokLogoImg from "../../../assets/images/INC_logo_img.png";
import { GrSort } from "react-icons/gr";
import {
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaArrowAltCircleLeft,
  FaClipboardList,
  FaMapPin,
} from "react-icons/fa";
import { BsMenuButtonWideFill, BsFillMenuAppFill } from "react-icons/bs";
import { IoMdArrowDropleft, IoMdArrowDropdown } from "react-icons/io";
import axiosClient from "../../../utils/axios/axios-client";
import {
  API_GROUP,
  API_ORGANIZATION,
  API_PUROK,
} from "../../../utils/urls/api_url";

const Sidebar = ({
  sidebar_toggle,
  setSidebar_Toggle,
  setTab_Pages,
  purok_data,
  setPurok_Data,
  organization_data,
  setOrganization_Data,
  group_data,
  setGroup_Data,
  sidebar_buttons,
  setSidebar_Buttons,
  org_count,
  group_count,
  purok_count,
}) => {
  const [sort_toggle, setSort_Toggle] = useState(false);

  console.log(org_count);
  console.log(group_count);
  console.log(purok_count);

  return (
    <div className="w-full h-full flex flex-col justify-between border-r-[1px] bg-blue-500 text-white">
      {/* Side Bar Title */}
      <div
        className="w-full flex justify-between h-[80px] border-b-[2px]
      monitor_md:h-[65px]
      "
      >
        <span
          className={`cursor-default  ${
            sidebar_toggle === false
              ? "w-[0%] opacity-0"
              : "w-[80%] flex justify-center items-center text-[20px] font-bold"
          } 
          monitor_md:text-[18px]

          monitor_xxl:text-[25px]
          monitor_xxsm:font-extrabold 
          `}
        >
          Dashboard
        </span>
        <button
          onClick={() => {
            setSidebar_Toggle(true);
            sidebar_toggle === true
              ? setSidebar_Toggle(false)
              : setSidebar_Toggle(true);

            sidebar_toggle === false ? setSort_Toggle(false) : "";
          }}
          className={`${
            sidebar_toggle === false
              ? "w-[100%] flex justify-center items-center "
              : "w-[35%] flex justify-center items-center "
          } `}
        >
          {sidebar_toggle === true ? (
            <span className="w-[70%] h-[60%] flex justify-center items-center  transition ease-in-out rounded-md duration-300 hover:bg-blue-400">
              <BsFillMenuAppFill
                className="
              monitor_md:text-[22px]

              monitor_xxl:text-[25px]
              "
              />
            </span>
          ) : (
            <span className="w-[70%] h-[60%] flex justify-center items-center  transition ease-in-out rounded-md duration-300 hover:bg-blue-400">
              <BsMenuButtonWideFill
                className="
              monitor_md:text-[22px]

              monitor_xxl:text-[25px] 
              "
              />
            </span>
          )}
        </button>
      </div>
      {/* Side Bar Title */}

      {/* Sidebar Function Buttons */}
      <div className="w-full h-[70%]">
        {/* 
        
        
        Assignmenets Button
        
        
        */}
        <div className="w-full h-[10%] flex justify-center items-center">
          <div
            className={`${
              sidebar_toggle === false
                ? "w-[90%] h-[70%] flex justify-between items-center"
                : "w-[90%] h-[60%] flex justify-between items-center transition ease-in-out rounded-md duration-300 hover:bg-blue-300"
            } monitor_md:h-[90%] monitor_md:w-[80%]`}
          >
            <button
              disabled={sidebar_buttons.assignments}
              onClick={() => {
                setSort_Toggle(false);
                sort_toggle === false
                  ? setSort_Toggle(true)
                  : setSort_Toggle(false);
                setTab_Pages(1);
              }}
              className={`${
                sidebar_toggle === false
                  ? "flex justify-center items-center w-full h-full"
                  : "flex justify-between items-center w-full h-[2.5rem] font-extrabold"
              } `}
            >
              <span
                className={`${
                  sidebar_toggle === false
                    ? "w-[80%] h-[90%] flex justify-center items-center transition ease-in-out rounded-full duration-300 hover:bg-blue-300"
                    : "w-[20%] flex justify-center items-center h-full"
                } `}
              >
                <FaMapPin
                  className="text-[25px]
              monitor_md:text-[20px]

              monitor_xxl:text-[25px]
              "
                />
              </span>
              <p
                className={`${
                  sidebar_toggle === false
                    ? "hidden"
                    : " w-[75%] text-[20px] flex items-center h-full"
                } 
                monitor_md:text-[16px]
                `}
              >
                Assignments
              </p>
            </button>
          </div>
        </div>

        {/* 
        
        
        Masterlist Button Sidebar
        
        
        */}
        <div className="w-full h-[10%] flex justify-center items-center">
          <div
            className={`${
              sidebar_toggle === false
                ? "w-[90%] h-[70%] flex justify-between items-center"
                : "w-[90%] h-[60%] flex justify-between items-center transition ease-in-out rounded-md duration-300 hover:bg-blue-300"
            } monitor_md:h-[90%] monitor_md:w-[80%]`}
          >
            <button
              disabled={sidebar_buttons.masterlist}
              onClick={() => {
                setSort_Toggle(false);
                sort_toggle === false
                  ? setSort_Toggle(true)
                  : setSort_Toggle(false);
                setTab_Pages(2);
              }}
              className={`
              ${
                sidebar_buttons.masterlist === true
                  ? "rounded-md bg-gray-300 opacity-80"
                  : ""
              }
              ${
                sidebar_toggle === false
                  ? "flex justify-center items-center w-full h-full"
                  : "flex justify-between items-center w-full h-[2.5rem] font-extrabold"
              } disabled:cursor-not-allowed`}
            >
              <span
                className={`${
                  sidebar_toggle === false
                    ? "w-[80%] h-[90%] flex justify-center items-center transition ease-in-out rounded-full duration-300 hover:bg-blue-300"
                    : "w-[20%] flex justify-center items-center h-full"
                } `}
              >
                <FaClipboardList
                  className="text-[25px]
              monitor_md:text-[20px]

              monitor_xxl:text-[25px]
              "
                />
              </span>
              <p
                className={`${
                  sidebar_toggle === false
                    ? "hidden"
                    : " w-[75%] text-[20px] flex items-center h-full"
                } 
                monitor_md:text-[16px]
                `}
              >
                Masterlist
              </p>
              {/* {sort_toggle === false ? (
                <span
                  className={`${
                    sidebar_toggle === false
                      ? "hidden"
                      : "w-[10%] flex justify-center items-center"
                  } `}
                >
                  <IoMdArrowDropleft size={25} />
                </span>
              ) : (
                <span
                  className={`${
                    sidebar_toggle === false
                      ? "hidden"
                      : "w-[10%] flex justify-center items-center"
                  } `}
                >
                  <IoMdArrowDropdown size={25} />
                </span>
              )} */}
            </button>
          </div>
        </div>
      </div>
      {/* Sidebar Function Buttons */}

      {/* Sidebar Footer */}
      <div className="w-full flex justify-center items-center h-[5rem] border-t-[2px]">
        <div className="flex justify-between items-center h-full w-full">
          <div
            className={`transform transition-all ease-in-out duration-300 ${
              sidebar_toggle === false
                ? "w-full h-full flex justify-center items-center"
                : "w-[30%] px-1 h-full flex justify-center items-center"
            } `}
          >
            <img
              src={PurokLogoImg}
              alt=""
              className={`${
                sidebar_toggle === false
                  ? "w-[3.5rem] bg-white rounded-full"
                  : "w-[3.5rem] bg-white rounded-full"
              }
              monitor_md:w-[2.2rem]

              monitor_xxl:w-[3rem]
              `}
            />
          </div>
          <span
            className={`${
              sidebar_toggle === false
                ? "hidden"
                : "w-[70%] flex justify-start items-center px-3 font-bold text-[16px]"
            } 
            monitor_md:text-[14px]
            monitor_md:px-1

            monitor_xxl:text-[18px]
            monitor_xxl:font-bold
            `}
          >
            User Admin
          </span>
        </div>
      </div>
      {/* Sidebar Footer */}
    </div>
  );
};

export default Sidebar;

// <div className="w-full h-full flex flex-col border-r-[1px] bg-green-900">
//   <div className="w-full h-[15rem] flex justify-center items-center border-b-[2px] ">
//     <img
//       src={PurokLogoImg}
//       alt=""
//       className="h-[8rem] w-[50%] bg-white rounded-full"
//     />
//   </div>
//   {/* Sort Button */}
//   <div className="h-[4rem] w-full">
//     <div className="flex justify-center items-center w-full h-full">
//       <button
//         onClick={() => {
//           setSort_Toggle(true);
//           sort_toggle === true
//             ? setSort_Toggle(false)
//             : setSort_Toggle(true);
//         }}
//         className={`flex p-3 w-[90%] h-[65%] justify-between items-center transition-all ease-in-out duration-300 hover:bg-green-600 hover:rounded-sm
//         ${sort_toggle === true ? "bg-green-600 rounded-sm" : ""}
//         `}
//       >
//         <span className="text-[22px] font-bold text-white">
//           Sort Options
//         </span>
//         <span className="flex justify-center items-center">
//           {sort_toggle === false ? (
//             <IoMdArrowDropleftCircle size={30} color={"white"} />
//           ) : (
//             <IoMdArrowDropdownCircle size={30} color={"white"} />
//           )}
//         </span>
//       </button>
//     </div>
//   </div>
//   {/* Sort Button Content */}
//   <div
//     className={` w-full transform transition-all duration-500 ${
//       sort_toggle === true ? "h-[10%]" : "h-[0%]"
//     }`}
//   >
//     <div
//       className={`transform transition-all ease-in-out duration-200 ${
//         sort_toggle === false
//           ? "opacity-0"
//           : "flex flex-col justify-evenly items-center"
//       }  w-full h-full`}
//     >
//       <div className="w-full h-[50%] flex justify-center items-center p-2">
//         <button className="w-[95%] h-[2.5rem] flex justify-between items-center transition-all ease-in-out duration-300 hover:bg-green-500 hover:rounded-sm px-3">
//           <p className="text-[16px] font-bold text-white">Sort by Name</p>
//           <span>
//             <FaSortAlphaDown size={18} color="white" />
//           </span>
//         </button>
//       </div>
//       <div className="w-full h-[50%] flex justify-center items-center p-2">
//         <button className="w-[95%] h-[2.5rem] flex justify-between items-center transition-all ease-in-out duration-300 hover:bg-green-500 hover:rounded-sm p-3">
//           <p className="text-[16px] font-bold text-white">Sort by ID</p>
//           <span>
//             <FaSortAlphaDown size={18} color="white" />
//           </span>
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
