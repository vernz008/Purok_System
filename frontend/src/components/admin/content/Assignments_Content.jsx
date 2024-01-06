import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const Assignments_Content = () => {
  return (
    <div className="w-[95%] h-[90%] bg-white rounded-md shadow-md shadow-gray-400 flex flex-col justify-between items-center">
      <div
        className="w-full px-10 flex justify-start items-end
      monitor_md:h-[5rem] 
      "
      >
        <span className="text-[22px] font-bold">Assignments</span>
      </div>
      <div className="w-full h-full flex justify-evenly items-center">
        {/* 
        
        Left
        
        */}
        <fieldset
          className=" border-[2px] rounded-md
        monitor_md:w-[45%] 
        monitor_md:h-[90%]
        "
        >
          <legend
            className="font-bold
          monitor_md:text-[20px]
          "
          >
            District / Purok
          </legend>
          <div className="w-full px-5 mt-5 flex justify-end">
            <input
              type="text"
              placeholder="Add District / Purok"
              className="outline-none shadow-md text-end shadow-slate-300 border-[1.5px] rounded-md
              monitor_md:w-[10rem]
              monitor_md:h-[2rem]
              monitor_md:px-3
              monitor_md:text-[14px]
              "
            />
            <input
              type="text"
              placeholder="Add Group"
              className="outline-none shadow-md text-end shadow-slate-300 border-[1.5px] rounded-md ml-2
              monitor_md:w-[6rem]
              monitor_md:h-[2rem]
              monitor_md:px-3
              monitor_md:text-[14px]
              "
            />
            <button className="w-[2rem] h-[2rem] flex justify-center items-center ml-2 rounded-full">
              <FaPlusCircle className="text-[25px] text-green-700 transition-all ease-in-out duration-300 hover:text-green-500" />
            </button>
          </div>
        </fieldset>

        {/* 
        
        Right
        
        */}
        <fieldset
          className="border-[2px] rounded-md
           monitor_md:w-[45%] 
           monitor_md:h-[90%]
        "
        >
          <legend
            className="font-bold
          monitor_md:text-[20px]
          "
          >
            Organization
          </legend>
          <div className="w-full px-5 mt-5 flex justify-end">
            <input
              type="text"
              placeholder="Add Organization"
              className="outline-none shadow-md text-end shadow-slate-300 border-[1.5px] rounded-md
              monitor_md:w-[10rem]
              monitor_md:h-[2rem]
              monitor_md:px-3
              monitor_md:text-[14px]
              "
            />
            <button className="w-[2rem] h-[2rem] flex justify-center items-center ml-2 rounded-full">
              <FaPlusCircle className="text-[25px] text-green-700 transition-all ease-in-out duration-300 hover:text-green-500" />
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Assignments_Content;
