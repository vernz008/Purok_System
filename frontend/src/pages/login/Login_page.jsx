import React, { useState } from "react";
import PurokCommunityImg from "../../assets/gifs/Community.gif";
import LoginLogoImg from "../../assets/images/INC_logo_img.png";
import axiosClient from "../../utils/axios/axios-client";
import { API_LOGIN } from "../../utils/urls/api_url";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login_page = () => {
  const navigate = useNavigate();

  const [login_input, setLogin_Input] = useState({
    username: "",
    password: "",
  });

  const Login_User = (e) => {
    e.preventDefault();

    axiosClient
      .post(API_LOGIN, {
        username: login_input.username,
        password: login_input.password,
      })
      .then((res) => {
        const token = res.data.split("|")[1];
        Cookies.set("access_token", token);

        navigate("/admin-dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <section className="h-screen w-screen bg-[#f4f3f3]">
        <div className="w-full h-full flex justify-center items-center">
          <form
            action=""
            onSubmit={Login_User}
            className="bg-white flex rounded-lg shadow-lg shadow-gray-400
            monitor_sm:w-[55%]
            monitor_sm:h-[70%]

            monitor_md:w-[55%]
            monitor_md:h-[70%]

            monitor_xxl:w-[65%]
            monitor_xxl:h-[75%]
            "
          >
            {/* Right */}
            <div className="w-[50%] border-r-[2px] border-r-slate-300 flex justify-center items-center ">
              <img
                src={PurokCommunityImg}
                alt=""
                className="h-[95%] w-[95%] bg-gray-100 object-contain rounded-lg"
              />
            </div>
            {/* Right */}

            {/* Left */}
            <div className="w-[50%] flex flex-col justify-center items-center">
              {/* Logo Container */}
              <div
                className="flex justify-center items-center
              monitor_sm:h-[20%]  
              monitor_sm:w-[80%]  
              
              monitor_md:h-[25%]
              monitor_md:w-[80%]


              monitor_xxl:h-[28%]
              monitor_xxl:w-[80%]
              "
              >
                <img
                  src={LoginLogoImg}
                  alt=""
                  className="
                monitor_sm:w-[25%]  

                monitor_md:w-[35%]

                monitor_xxl:w-[42%]
                "
                />
              </div>

              {/* Container of input fields */}
              <div
                className="flex flex-col justify-evenly items-center border-[1px] border-gray-300 
              monitor_sm:mt-2 
              monitor_sm:p-2  
              monitor_sm:w-[80%]  
              monitor_sm:h-[45%]  
             
              monitor_md:h-[50%]
              monitor_md:w-[80%]
              monitor_md:mt-2
              monitor_md:p-3

              monitor_xxl:h-[42%]
              monitor_xxl:p-5
              monitor_xxl:mt-5 
              "
              >
                {/* Input Fields */}
                <div
                  className="
                monitor_sm:w-full 

                monitor_md:w-full 
                "
                >
                  <div className="flex flex-col justify-start items-start">
                    <label
                      htmlFor=""
                      className="
                  monitor_sm:text-[12px]

                  monitor_md:text-[12px]

                  monitor_xxl:text-[14px]
                  monitor_xxl:font-bold"
                    >
                      Username:
                    </label>
                    <input
                      type="text"
                      required
                      onChange={(e) =>
                        setLogin_Input({
                          ...login_input,
                          username: e.target.value,
                        })
                      }
                      placeholder="Enter username . . ."
                      className="w-full border-[1px] border-gray-300 shadow-md shadow-gray-300 px-[1rem] outline-none
                    monitor_sm:h-[2rem]
                    monitor_sm:text-[12px]

                    monitor_md:h-[2rem]
                    monitor_md:text-[12px]

                    monitor_xxl:h-[3rem]
                    monitor_xxl:text-[14px]
                    "
                    />
                  </div>
                  <div
                    className="flex flex-col justify-start items-start w-full
                 monitor_sm:mt-2

                 monitor_md:mt-2
                 monitor_md:h-[auto] 

                 monitor_xxl:mt-5
                "
                  >
                    <label
                      htmlFor=""
                      className="
                  monitor_sm:text-[12px]

                  monitor_md:text-[12px]
                  
                  monitor_xxl:text-[14px]
                  monitor_xxl:font-bold
                  "
                    >
                      Password:
                    </label>
                    <input
                      type="password"
                      required
                      onChange={(e) =>
                        setLogin_Input({
                          ...login_input,
                          password: e.target.value,
                        })
                      }
                      placeholder="Enter password . . ."
                      className="h-[3rem] w-full border-[1px] border-gray-300 shadow-md shadow-gray-300 px-[1rem] outline-none
                    monitor_sm:h-[2rem]
                    monitor_sm:text-[12px]

                    monitor_md:h-[2rem]
                    monitor_md:text-[12px]

                    monitor_xxl:h-[3rem]
                    monitor_xxl:text-[14px]
                    "
                    />
                  </div>
                </div>

                <div
                  className="flex flex-col justify-center items-center w-full
                  monitor_sm:mt-2

                  monitor_md:mt-3
                  monitor_md:h-[3.5rem] 

                  monitor_xxl:mt-5
                  monitor_xxl:h-[4.5rem]
                "
                >
                  <div className="flex justify-start items-center w-full h-[2rem]">
                    <input type="checkbox" name="" id="" className="mr-2" />
                    <label
                      htmlFor=""
                      className="
                      monitor_sm:text-[11px]

                      monitor_md:text-[11px]

                      monitor_xxl:text-[14px]
                    "
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full font-bold bg-blue-500 text-white rounded-sm transition duration-300 cursor-pointer hover:opacity-80
                  monitor_sm:h-[2rem]
                  monitor_sm:text-[12px]

                  monitor_md:text-[14px]
                  monitor_md:h-[2.5rem]

                  monitor_xxl:text-[18px]
                  monitor_xxl:h-[4rem]
                  "
                  >
                    Sign in
                  </button>
                </div>
                {/* Input Fields */}

                {/* Buttons and Checkbox */}
              </div>
              <div
                className="h-[10%] w-[65%] flex items-center justify-center mt-5 border-[1px] border-gray-300 p-5
                monitor_sm:w-[80%] 
                monitor_sm:mt-2 

                monitor_md:mt-2
                monitor_md:w-[80%]
              "
              >
                <div className="">
                  <span className="flex">
                    <p
                      className="
                      monitor_sm:text-[12px]

                      monitor_md:text-[12px]

                      monitor_xxl:text-[14px] 
                    "
                    >
                      Don't Have an Account?
                    </p>
                    <a
                      href="/#"
                      className="ml-2 hover:underline text-blue-500 font-bold hover:text-blue-400
                      monitor_sm:text-[12px]
                     
                      monitor_md:text-[12px]

                      monitor_xxl:text-[14px] 
                      "
                    >
                      Sign up
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* Left */}
          </form>
        </div>
      </section>
    </>
  );
};

export default Login_page;
