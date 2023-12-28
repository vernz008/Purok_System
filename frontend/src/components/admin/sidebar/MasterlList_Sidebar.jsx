import React, { useState } from "react";
import PurokLogoImg from "../../../assets/images/INC_logo_img.png";
import { GrSort } from "react-icons/gr";
import {
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import { BsMenuButtonWideFill, BsFillMenuAppFill } from "react-icons/bs";
import { IoMdArrowDropleft, IoMdArrowDropdown } from "react-icons/io";

const MasterlList_Sidebar = ({ sidebar_toggle, setSidebar_Toggle }) => {
  const [sort_toggle, setSort_Toggle] = useState(false);
  return (
    <div className="w-full h-full flex flex-col justify-between border-r-[1px] bg-green-900 text-white">
      {/* Side Bar Title */}
      <div className="w-full flex justify-between h-[80px] border-b-[2px]">
        <span
          className={`${
            sidebar_toggle === false
              ? "w-[0%] opacity-0"
              : "w-[80%] flex justify-center items-center text-[20px] font-bold"
          } `}
        >
          Master List
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
              ? "w-[100%] flex justify-center items-center"
              : "w-[35%] flex justify-center items-center"
          } `}
        >
          {sidebar_toggle === true ? (
            <BsFillMenuAppFill size={25} />
          ) : (
            <BsMenuButtonWideFill size={25} />
          )}
        </button>
      </div>
      {/* Side Bar Title */}

      {/* Sidebar Function Buttons */}
      <div className="w-full h-[70%]">
        <div className="w-full h-[10%] flex justify-center items-center">
          <div className="w-[90%] h-[60%] flex justify-between items-center">
            <button
              onClick={() => {
                setSort_Toggle(false);
                sort_toggle === false
                  ? setSort_Toggle(true)
                  : setSort_Toggle(false);
              }}
              className="flex justify-between items-center w-full h-[3rem] px-2 font-extrabold transition ease-in-out rounded-md duration-300 hover:bg-green-500"
            >
              <span
                className={`${
                  sidebar_toggle === false
                    ? "w-full flex justify-center items-center"
                    : "w-[20%] flex justify-center items-center h-full"
                } `}
              >
                <GrSort size={25} />
              </span>
              <p
                className={`${
                  sidebar_toggle === false
                    ? "hidden"
                    : " w-[70%] text-[25px] flex items-center h-full ml-2"
                }`}
              >
                Sort
              </p>
              {sort_toggle === false ? (
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
              )}
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
                sidebar_toggle === false ? "w-[4rem]" : "w-[4rem]"
              } `}
            />
          </div>
          <span
            className={`${
              sidebar_toggle === false
                ? "hidden"
                : "w-[70%] flex justify-start items-center px-3 font-bold text-[16px]"
            } `}
          >
            User Admin
          </span>
        </div>
      </div>
      {/* Sidebar Footer */}
    </div>
  );
};

export default MasterlList_Sidebar;

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
