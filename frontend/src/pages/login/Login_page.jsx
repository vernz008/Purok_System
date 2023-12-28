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
              <div className="w-[65%] h-[25%] flex justify-center items-center">
                <img src={LoginLogoImg} alt="" className="w-[12rem] h-auto" />
              </div>
              <div className="w-[65%] h-[40%] flex flex-col justify-start items-center p-5 border-[1px] border-gray-300 mt-5">
                {/* Input Fields */}
                <div className="flex flex-col justify-start items-start w-full h-[5rem]">
                  <label htmlFor="">Username:</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter username . . ."
                    className="h-[3rem] w-full border-[1px] border-gray-300 shadow-md shadow-gray-300 px-[1rem] outline-none"
                  />
                </div>
                <div className="flex flex-col justify-start items-start w-full h-[5rem] mt-2">
                  <label htmlFor="">Password:</label>
                  <input
                    type="password"
                    required
                    placeholder="Your password . . ."
                    className="h-[3rem] w-full border-[1px] border-gray-300 shadow-md shadow-gray-300 px-[1rem] outline-none"
                  />
                </div>

                <div className="flex flex-col justify-center items-center h-[30%] w-full mt-5">
                  <div className="flex justify-start items-center w-full h-[2rem]">
                    <input type="checkbox" name="" id="" className="mr-2" />
                    <label htmlFor="" className="text-[14px]">
                      Remember me
                    </label>
                  </div>
                  <button className="h-[3rem] w-full bg-blue-500 text-white rounded-sm text-[18px] font-bold transition duration-300 cursor-pointer hover:opacity-80">
                    Sign in
                  </button>
                </div>
                {/* Input Fields */}

                {/* Buttons and Checkbox */}
              </div>
              <div className="h-[10%] w-[65%] flex items-center justify-center mt-5 border-[1px] border-gray-300  p-5">
                <div className="">
                  <span className="flex">
                    <p className="text-[14px]">Don't Have an Account?</p>
                    <a
                      href="/#"
                      className="ml-2 hover:underline text-blue-500 font-bold hover:text-blue-400"
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
