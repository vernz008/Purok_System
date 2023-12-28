import React from "react";
import PurokCommunityImg from "../../assets/gifs/Community.gif";
import LoginLogoImg from "../../assets/images/INC_logo_img.png";

const Login_page = () => {
  return (
    <>
      <section className="h-screen w-screen bg-[#f4f3f3]">
        <div className="w-full h-full flex justify-center items-center">
          <form
            action=""
            className="w-[65%] h-[75%] bg-white flex rounded-lg shadow-lg shadow-gray-400"
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
                className="w-[65%] h-[25%] flex justify-center items-center
              monitor_md:h-[25%]

              monitor_xxl:h-[25%]
              "
              >
                <img
                  src={LoginLogoImg}
                  alt=""
                  className="w-[12rem] h-auto
                monitor_md:w-[40%]

                monitor_xxl:w-[45%]
                "
                />
              </div>

              {/* Container of input fields */}
              <div
                className="w-[65%] flex flex-col justify-start items-center border-[1px] border-gray-300 
              monitor_md:h-[45%]
              monitor_md:mt-2
              monitor_md:p-3

              monitor_xxl:h-[42%]
              monitor_xxl:p-5
              monitor_xxl:mt-5 
              "
              >
                {/* Input Fields */}
                <div
                  className="flex flex-col justify-start items-start w-full 
                xl:h-[auto] 
                "
                >
                  <label
                    htmlFor=""
                    className="
                  monitor_md:text-[12px]

                  monitor_xxl:text-[14px]
                  monitor_xxl:font-bold"
                  >
                    Username:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter username . . ."
                    className="h-[3rem] w-full border-[1px] border-gray-300 shadow-md shadow-gray-300 px-[1rem] outline-none
                    monitor_md:h-[2rem]
                    monitor_md:text-[12px]

                    monitor_xxl:h-[3rem]
                    monitor_xxl:text-[14px]
                    "
                  />
                </div>
                <div
                  className="flex flex-col justify-start items-start w-full
                monitor_md:mt-2
                monitor_md:h-[auto] 

                monitor_xxl:mt-5
                "
                >
                  <label
                    htmlFor=""
                    className="
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
                    placeholder="Enter password . . ."
                    className="h-[3rem] w-full border-[1px] border-gray-300 shadow-md shadow-gray-300 px-[1rem] outline-none
                    monitor_md:h-[2rem]
                    monitor_md:text-[12px]

                    monitor_xxl:h-[3rem]
                    monitor_xxl:text-[14px]
                    "
                  />
                </div>

                <div
                  className="flex flex-col justify-center items-center w-full
                  monitor_md:mt-3
                  monitor_md:h-[3.5rem] 

                  monitor_xxl:mt-5
                "
                >
                  <div className="flex justify-start items-center w-full h-[2rem]">
                    <input type="checkbox" name="" id="" className="mr-2" />
                    <label
                      htmlFor=""
                      className="
                      monitor_md:text-[11px]

                      monitor_xxl:text-[14px]
                    "
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    className="w-full font-bold bg-blue-500 text-white rounded-sm transition duration-300 cursor-pointer hover:opacity-80
                    monitor_md:text-[14px]
                    monitor_md:h-[2.5rem]

                  monitor_xxl:text-[18px]
                  monitor_xxl:h-[3rem]
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
                monitor_md:mt-2
              "
              >
                <div className="">
                  <span className="flex">
                    <p
                      className="
                      monitor_md:text-[12px]

                      monitor_xxl:text-[14px] 
                    "
                    >
                      Don't Have an Account?
                    </p>
                    <a
                      href="/#"
                      className="ml-2 hover:underline text-blue-500 font-bold hover:text-blue-400
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
