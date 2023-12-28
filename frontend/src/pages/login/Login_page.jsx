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
              xl:h-[25%]
              2xl:h-[30%]
              "
              >
                <img
                  src={LoginLogoImg}
                  alt=""
                  className="w-[12rem] h-auto
                xl:w-[40%]
                2xl:w-[50%]
                "
                />
              </div>

              {/* Container of input fields */}
              <div
                className="w-[65%] flex flex-col justify-start items-center border-[1px] border-gray-300 
              xl:h-[45%]
              xl:mt-2
              xl:p-3

              2xl:h-[42%]
              2xl:p-5
              2xl:mt-5 
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
                  xl:text-[12px]

                  2xl:text-[14px]
                  2xl:font-bold"
                  >
                    Username:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter username . . ."
                    className="h-[3rem] w-full border-[1px] border-gray-300 shadow-md shadow-gray-300 px-[1rem] outline-none
                    xl:h-[2rem]
                    xl:text-[12px]

                    2xl:h-[3rem]
                    2xl:text-[14px]
                    "
                  />
                </div>
                <div
                  className="flex flex-col justify-start items-start w-full
                xl:mt-2
                xl:h-[auto] 

                2xl:mt-5
                "
                >
                  <label
                    htmlFor=""
                    className="
                  xl:text-[12px]
                  
                  2xl:text-[14px]
                  2xl:font-bold
                  "
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Enter password . . ."
                    className="h-[3rem] w-full border-[1px] border-gray-300 shadow-md shadow-gray-300 px-[1rem] outline-none
                    xl:h-[2rem]
                    xl:text-[12px]

                    2xl:h-[3rem]
                    2xl:text-[14px]
                    "
                  />
                </div>

                <div
                  className="flex flex-col justify-center items-center h-[30%] w-full
                xl:mt-4
                xl:h-auto 

                2xl:mt-5
                "
                >
                  <div className="flex justify-start items-center w-full h-[2rem]">
                    <input type="checkbox" name="" id="" className="mr-2" />
                    <label
                      htmlFor=""
                      className="
                    xl:text-[11px]

                    2xl:text-[14px]
                    "
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    className="w-full font-bold bg-blue-500 text-white rounded-sm transition duration-300 cursor-pointer hover:opacity-80
                  xl:text-[14px]
                  xl:h-[2rem]

                  2xl:text-[18px]
                  2xl:h-[3rem]
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
              xl:mt-2
              "
              >
                <div className="">
                  <span className="flex">
                    <p
                      className="
                    xl:text-[12px]

                    2xl:text-[14px] 
                    "
                    >
                      Don't Have an Account?
                    </p>
                    <a
                      href="/#"
                      className="ml-2 hover:underline text-blue-500 font-bold hover:text-blue-400
                      xl:text-[12px]

                      2xl:text-[14px] 
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
