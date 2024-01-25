import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const Create_Attendee = ({ setModal_Create }) => {
  return (
    <div className="bg-black/50 w-screen h-screen absolute top-0 left-0 overflow-hidden flex justify-center items-center">
      <div
        className="bg-white 
      monitor_md:h-[65%]
      monitor_md:w-[25%]
      "
      >
        {/* modal header */}
        <div
          className="w-full bg-blue-500 flex justify-between items-center
        monitor_md:h-[3rem]
        monitor_md:px-3
        "
        >
          <span>
            <h1
              className="text-white font-bold
            monitor_md:text-[18px]
            "
            >
              Create Attendee
            </h1>
          </span>
          <span>
            <button
              className="text-red-500 bg-white rounded-full transition-all ease-in-out duration-300 hover:text-red-400"
              onClick={() => {
                setModal_Create(false);
              }}
            >
              <FaTimesCircle className="monitor_md:text-[1.5rem]" />
            </button>
          </span>
        </div>
        {/* modal header */}

        {/* modal body */}
        <div>
          <form action="">
            <div>
              <div>
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>
            </div>
            <div>
              <input type="file" />
            </div>
          </form>
        </div>
        {/* modal body */}
      </div>
    </div>
  );
};

export default Create_Attendee;

/*
notes:

attendance module

create user folder
fill the title

in created user folder
fill members record who attended

user ownership of created folder
*/
