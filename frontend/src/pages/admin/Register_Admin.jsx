import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa6";
import axiosClient from "../../utils/axios/axios-client";
import { API_USER } from "../../utils/urls/api_url";
import { useNavigate } from "react-router-dom";

const Register_Admin = () => {
  const navigate = useNavigate();
  const [register_input, setRegister_Input] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    user_role: "",
    username: "",
    email: "",
    password: "",
  });

  const Register_User = (e) => {
    e.preventDefault();

    axiosClient
      .post(API_USER, {
        firstname: register_input.firstname,
        middlename: register_input.middlename,
        lastname: register_input.lastname,
        username: register_input.username,
        email: register_input.email,
        password: register_input.password,
        role: register_input.user_role,
      })
      .then((res) => {
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="w-screen h-screen overflow-hidden bg-[#f4f3f3] ">
      {/* Main container */}
      <div className="w-full h-full flex justify-center items-center">
        {/* Input Container */}
        <div
          className="bg-white rounded-md shadow-md shadow-slate-400 border-none
        monitor_md:w-[55%] h-[70%]
        "
        >
          <form
            onSubmit={Register_User}
            className="w-full h-full flex flex-col justify-start items-center"
          >
            <div
              className="w-full
            monitor_md:h-[12%]
            monitor_md:p-5 
            monitor_md:mb-2 
            "
            >
              <h1
                className="font-bold
              monitor_md:text-[18px]
              monitor_md:mx-[2rem] 
              "
              >
                Create User Account
              </h1>
            </div>
            {/* 1st Set */}
            <fieldset
              className="border-[2px] border-gray-300 rounded-sm  
            monitor_md:w-[85%]
            monitor_md:h-[6.5rem]
            "
            >
              <legend className="text-[16px] font-bold">User Full Name</legend>
              <div
                className="flex justify-between items-center w-full
              monitor_md:p-2
              monitor_md:px-5
              "
              >
                <div className="flex flex-col w-[30%]">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    First Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setRegister_Input({
                        ...register_input,
                        firstname: e.target.value,
                      });
                    }}
                    className="border-[1px] border-gray-300 rounded-sm shadow-md shadow-slate-300  outline-none
                    monitor_md:h-[1.8rem]
                    monitor_md:text-[14px]
                    monitor_md:px-2
                    "
                    placeholder="Your First name"
                    required
                  />
                </div>
                <div className="flex flex-col w-[30%]">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setRegister_Input({
                        ...register_input,
                        middlename: e.target.value,
                      });
                    }}
                    className="border-[1px] border-gray-300 rounded-sm shadow-md shadow-slate-300  outline-none
                    monitor_md:h-[1.8rem]
                    monitor_md:text-[14px]
                    monitor_md:px-2
                    "
                    placeholder="Your Middle name"
                    required
                  />
                </div>
                <div className="flex flex-col w-[30%]">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setRegister_Input({
                        ...register_input,
                        lastname: e.target.value,
                      });
                    }}
                    className="border-[1px] border-gray-300 rounded-sm shadow-md shadow-slate-300  outline-none
                    monitor_md:h-[1.8rem]
                    monitor_md:text-[14px]
                    monitor_md:px-2
                    "
                    placeholder="Your Last name"
                    required
                  />
                </div>
              </div>
            </fieldset>

            {/* 2nd Set */}
            <fieldset
              className="border-[2px] border-gray-300 rounded-sm 
            monitor_md:w-[85%] 
            monitor_md:h-[10.5rem] 
            monitor_md:mt-3
            "
            >
              <legend className="text-[16px] font-bold">Account Info</legend>
              <div
                className="flex justify-between items-center 
              monitor_md:p-2
              monitor_md:px-5
              monitor_md: h-[45%]
              "
              >
                <div className="flex flex-col w-full">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    Account Role
                  </label>
                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      setRegister_Input({
                        ...register_input,
                        user_role: e.target.value,
                      });
                    }}
                    className="border-[1px] border-gray-300 rounded-sm shadow-md shadow-slate-300 outline-none cursor-pointer
                    monitor_md:text-[12px]
                    monitor_md:w-[25%]
                    monitor_md:h-[1.8rem]
                    "
                    required
                  >
                    <option value="" selected disabled>
                      Select Roles
                    </option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between items-center px-5 h-[4.5rem]">
                <div className="flex flex-col">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    Username
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setRegister_Input({
                        ...register_input,
                        username: e.target.value,
                      });
                    }}
                    className="border-[1px] border-gray-300 rounded-sm shadow-md shadow-slate-300  outline-none
                    monitor_md:h-[1.8rem]
                    monitor_md:text-[14px]
                    monitor_md:px-2
                    "
                    placeholder="Your username"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setRegister_Input({
                        ...register_input,
                        email: e.target.value,
                      });
                    }}
                    className="border-[1px] border-gray-300 rounded-sm shadow-md shadow-slate-300  outline-none
                    monitor_md:h-[1.8rem]
                    monitor_md:text-[14px]
                    monitor_md:px-2
                    "
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-[14px] font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => {
                      setRegister_Input({
                        ...register_input,
                        password: e.target.value,
                      });
                    }}
                    className="border-[1px] border-gray-300 rounded-sm shadow-md shadow-slate-300  outline-none
                    monitor_md:h-[1.8rem]
                    monitor_md:text-[14px]
                    monitor_md:px-2
                    "
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
            </fieldset>

            <div
              className="w-full  flex justify-center items-center
            monitor_md:mt-5 
            monitor_md:h-[8%]
            "
            >
              <button
                type="submit"
                className=" bg-blue-500 text-white flex justify-center items-center rounded-md transition-all ease-in-out duration-300 hover:bg-blue-400
                monitor_md:h-[2rem]
                monitor_md:w-[10rem]
                "
              >
                <FaClipboardCheck className="mr-2" />
                <p
                  className="font-bold 
                monitor_md:text-[16px]
                "
                >
                  Submit
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register_Admin;
