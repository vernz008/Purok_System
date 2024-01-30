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
import {
  IoMdArrowDropleft,
  IoMdArrowDropdown,
  IoMdLogOut,
} from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import axiosClient from "../../../utils/axios/axios-client";
import {
  API_GROUP,
  API_LOGOUT,
  API_ORGANIZATION,
  API_PUROK,
  API_USER,
} from "../../../utils/urls/api_url";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

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
  const [logout_button, setLogout_Button] = useState({
    loadinng: false,
    disabled: false,
    trigger: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      axiosClient
        .get(API_USER)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
          const response = error.response.status;
          const Auth = error.response.statusText;
          if (Auth === "Unauthorized") {
            navigate("/");
          } else if (response === 500) {
            navigate("/error-500");
          }
        });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

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
      <div
        className={`w-full 
      monitor_md:h-[25rem]
     
      `}
      >
        {/* 
        
        
        Assignmenets Button
        
        
        */}
        <div
          className="w-full flex justify-center items-center
        monitor_md:h-[4rem]
        "
        >
          <div
            className={`${
              sidebar_toggle === false
                ? "w-[90%] h-[70%] flex justify-between items-center"
                : "w-[90%] h-[60%] flex justify-between items-center transition ease-in-out rounded-md duration-300 hover:bg-blue-300"
            } monitor_md:h-[60%] monitor_md:w-[80%]`}
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
        
        
        Assignmenets Button
        
        
        */}

        {/* 
        
        
        Masterlist Button Sidebar
        
        
        */}
        <div
          className="w-full flex justify-center items-center
          monitor_md:h-[4rem]
        "
        >
          <div
            className={`${
              sidebar_toggle === false
                ? "w-[90%] h-[70%] flex justify-between items-center"
                : "w-[90%] h-[60%] flex justify-between items-center transition ease-in-out rounded-md duration-300 hover:bg-blue-300"
            } monitor_md:h-[60%] monitor_md:w-[80%]`}
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
            </button>
          </div>
        </div>
        {/* 
        
        
        Masterlist Button Sidebar
        
        
        */}

        {/* 
        
        
        Attendance 


        
        */}
        <div
          className="w-full flex justify-center items-center
          monitor_md:h-[4rem]
        "
        >
          <div
            className={`${
              sidebar_toggle === false
                ? "w-[90%] h-[70%] flex justify-between items-center"
                : "w-[90%] h-[60%] flex justify-between items-center transition ease-in-out rounded-md duration-300 hover:bg-blue-300"
            } monitor_md:h-[60%] monitor_md:w-[80%]`}
          >
            <button
              disabled={sidebar_buttons.masterlist}
              onClick={() => {
                setSort_Toggle(false);
                sort_toggle === false
                  ? setSort_Toggle(true)
                  : setSort_Toggle(false);
                setTab_Pages(3);
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
                <FaPeopleGroup
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
                Attendance
              </p>
            </button>
          </div>
        </div>
        {/* 
        
        
        Attendance 

        
        
        */}
      </div>
      {/* 
      
      
      Logout Button 
      
      
      */}

      <div
        className="w-full flex justify-center items-center
        monitor_md:h-[4rem]
        "
      >
        <div
          className={`${
            sidebar_toggle === false
              ? "w-[90%] h-[70%] flex justify-between items-center"
              : "w-[90%] h-[60%] flex justify-between items-center transition ease-in-out rounded-md duration-300 hover:bg-blue-300"
          } monitor_md:h-[60%] monitor_md:w-[80%]`}
        >
          <button
            onClick={() => {
              axiosClient
                .post(API_LOGOUT)
                .then((res) => {
                  alert("Logout  Successfully");
                  Cookies.remove("access_token");
                  navigate("/");
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
            className={`
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
              <IoMdLogOut
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
              Logout
            </p>
          </button>
        </div>
      </div>

      {/* 
      
      
      Logout Button 
      
      
      */}
      {/* Sidebar Function Buttons */}

      {/* Sidebar Footer */}
      <div
        className="w-full flex justify-center items-center border-t-[2px] 
      monitor_md: h-[4rem]
      "
      >
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
              className={`cursor-pointer ${
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
