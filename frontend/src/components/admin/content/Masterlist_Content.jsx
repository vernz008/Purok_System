import React from "react";
import { FaEye, FaTrash } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";

const Masterlist_Content = () => {
  return (
    <div className="w-[95%] h-[90%] bg-white rounded-md shadow-md shadow-gray-400 flex flex-col justify-between items-center">
      <div className="w-full h-[15%] p-6">
        <div className="w-full h-auto border-b-[5px] border-b-gray-400 border-t-[1px] border-r-[1px] border-l-[1px] shadow-lg shadow-slate-300 p-3 flex justify-start items-center">
          <div className="w-[12%] h-[3rem]">
            <button className="w-full h-full flex justify-center items-center rounded-md transition-all ease-in-out duration-300 bg-green-600 text-white hover:bg-green-500">
              <MdAssignmentAdd className="mr-4" size={20} />
              <p className="font-bold text-[16px]">Add Member</p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[90%] p-2">
        {/* Table */}
        <h1 className="px-5 text-[25px] font-bold">Masterlist</h1>
        <table className="w-[100%] h-[10%] overflow-hidden justify-evenly border-separate border-spacing-4">
          <thead className="">
            <tr className=" h-[4rem] text-center flex justify-between items-center border-[2px] border-gray-300 shadow-md shadow-gray-300">
              <th className="w-[20%] h-full flex justify-center items-center">
                ID
              </th>
              <th className="w-[20%] h-full flex justify-center items-center">
                ID
              </th>
              <th className="w-[20%] h-full flex justify-center items-center">
                ID
              </th>
              <th className="w-[20%] h-full flex justify-center items-center">
                ID
              </th>
              <th className="w-[20%] h-full flex justify-center items-center">
                ID
              </th>
              <th className="w-[20%] h-full flex justify-center items-center"></th>
            </tr>
          </thead>
          <tbody>
            <div className="w-full h-[35rem] overflow-auto">
              <tr className="w-full h-[10%] flex justify-between items-center  text-center shadow-md border-[2px] border-gray-300">
                <td className="w-[20%] h-[3.5rem] flex justify-center items-center">
                  data
                </td>
                <td className="w-[20%] h-[3.5rem] flex justify-center items-center">
                  data
                </td>
                <td className="w-[20%] h-[3.5rem] flex justify-center items-center">
                  data
                </td>
                <td className="w-[20%] h-[3.5rem] flex justify-center items-center">
                  data
                </td>
                <td className="w-[20%] h-[3.5rem] flex justify-center items-center">
                  data
                </td>
                <td className="w-[20%] h-[3.5rem] flex justify-center items-center">
                  <div className="w-full h-full flex justify-center items-center">
                    <button className="mr-10 h-[2.5rem] w-[2.5rem] transition-all ease-in-out duration-100 hover:rounded-full hover:border-[2px] hover:border-black flex justify-center items-center">
                      <FaEye size={20} color="#ffc93c" />
                    </button>
                    <button className="h-[2.5rem] w-[2.5rem] transition-all ease-in-out duration-100 hover:rounded-full hover:border-[2px] hover:border-black flex justify-center items-center">
                      <FaTrash size={20} color="#dc2f2f" />
                    </button>
                  </div>
                </td>
              </tr>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Masterlist_Content;
