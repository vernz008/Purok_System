import React, { useEffect, useState } from "react";
import { FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import axiosClient from "../../../utils/axios/axios-client";
import {
  API_GROUP,
  API_ORGANIZATION,
  API_PUROK,
} from "../../../utils/urls/api_url";

const Assignments_Content = () => {
  const [assignment_input, setAssignment_Input] = useState({
    purok: "",
    organization: "",
    group: "",
  });
  const [assignments_data, setAssisgnments_Data] = useState({
    purok: [],
    organization: [],
    group: [],
  });

  useEffect(() => {
    axiosClient
      .get(API_PUROK)
      .then((res) => {
        setAssisgnments_Data({ ...assignments_data, purok: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Submit_Purok = (e) => {
    e.preventDefault();
    axiosClient
      .post(API_PUROK, {
        purok: assignment_input.purok,
      })
      .then((res) => {
        setAssignment_Input({
          ...assignment_input,
          purok: "",
        });
        setAssisgnments_Data({ ...assignments_data, purok: res.data });
      })
      .catch((error) => {});
  };
  const Submit_Organization = (e) => {
    e.preventDefault();
    axiosClient
      .post(API_ORGANIZATION, {
        kapisanan: assignment_input.organization,
      })
      .then((res) => {
        setAssignment_Input({
          ...assignment_input,
          organization: "",
        });
        setAssisgnments_Data({ ...assignments_data, organization: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const Submit_Group = (e) => {
    e.preventDefault();
    axiosClient
      .post(API_GROUP, {
        group: assignment_input.group,
      })
      .then((res) => {
        setAssignment_Input({
          ...assignment_input,
          group: "",
        });
        setAssisgnments_Data({ ...assignments_data, group: res.data });
      });
  };
  return (
    <div className="w-[95%] h-[90%] bg-white rounded-md shadow-md shadow-gray-400 flex flex-col justify-between items-center">
      <div
        className="w-full flex justify-start items-end
      monitor_md:h-[5rem] 
      monitor_md:px-[3rem] 
      "
      >
        <span className="text-[22px] font-bold">Assignments</span>
      </div>
      <div
        className="w-full h-full flex justify-evenly items-center
      monitor_md:justify-between
      monitor_md:px-[3rem]
      "
      >
        {/* 
        
        1st
        
        */}
        <fieldset
          className=" border-[2px] rounded-md
        monitor_md:w-[30%] 
        monitor_md:h-[75%]
        "
        >
          <legend
            className="font-bold
          monitor_md:text-[20px]
          "
          >
            District / Purok
          </legend>

          <form
            className="w-full px-5 mt-5 flex justify-end"
            onSubmit={Submit_Purok}
            action=""
          >
            <input
              type="text"
              placeholder="Add District / Purok"
              required
              value={assignment_input.purok}
              onChange={(e) => {
                setAssignment_Input({
                  ...assignment_input,
                  purok: e.target.value,
                });
              }}
              className="outline-none shadow-md text-start shadow-slate-300 border-[1.5px] rounded-md
              monitor_md:w-[10rem]
              monitor_md:h-[2rem]
              monitor_md:px-3
              monitor_md:text-[14px]
              "
            />

            <button
              type="submit"
              className="w-[2rem] h-[2rem] flex justify-center items-center ml-2 rounded-full"
            >
              <FaPlusCircle className="text-[25px] text-green-700 transition-all ease-in-out duration-300 hover:text-green-500" />
            </button>
          </form>
          <div
            className="w-full 
          monitor_md:mt-5
          monitor_md:h-[15rem]
          monitor_md:p-3
          "
          >
            <table
              className="w-full flex flex-col justify-center items-center border-separate border-spacing-4
          
            "
            >
              <thead className="w-full">
                <tr className="w-full flex justify-center items-center h-[2rem] border-[1px] shadow-md">
                  <th
                    className="
                  monitor_md:w-[60%]"
                  >
                    Purok / District List
                  </th>
                </tr>
              </thead>
              <tbody className="w-full">
                <div
                  className="w-full overflow-auto
                monitor_md:h-[11.5rem]
                monitor_md:mt-2
                "
                >
                  {assignments_data?.purok?.map((data, index) => {
                    return (
                      <>
                        <tr
                          className="flex justify-center items-center w-full
                  monitor_md:h-[3rem]
                  monitor_md:p-1
                  monitor_md:text-[14px]
                  "
                        >
                          <td
                            className="w-[10%] flex justify-center items-center border-l-[2px] border-t-[2px] border-b-[2px]
                          monitor_md:h-[2.5rem]
                          "
                          >
                            {index + 1}
                          </td>
                          <td className="w-[80%] h-full border-t-[2px] border-b-[2px]">
                            <p className="w-full h-full flex justify-center items-center">
                              {data.purok}
                            </p>
                          </td>
                          <td className="w-[10%] h-full border-t-[2px] border-b-[2px] border-r-[2px]">
                            <div className="w-full h-full flex justify-center items-center">
                              <button
                                onClick={() => {
                                  axiosClient
                                    .delete(API_PUROK + `/${data.id}`)
                                    .then((res) => {
                                      setAssisgnments_Data({
                                        ...assignments_data,
                                        purok: res.data,
                                      });
                                    })
                                    .catch((error) => {
                                      console.log(error);
                                    });
                                }}
                                className="w-[2em] h-[2rem] text-red-600 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-red-500 hover:text-red-400"
                              >
                                <FaTrashAlt />
                              </button>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </div>
              </tbody>
            </table>
          </div>
        </fieldset>

        {/* 
        
        2nd
        
        */}
        <fieldset
          className="border-[2px] rounded-md
           monitor_md:w-[30%] 
           monitor_md:h-[75%]
        "
        >
          <legend
            className="font-bold
          monitor_md:text-[20px]
          "
          >
            Organization
          </legend>
          <form
            className="w-full px-5 mt-5 flex justify-end"
            onSubmit={Submit_Organization}
          >
            <input
              type="text"
              placeholder="Add Organization"
              required
              value={assignment_input.organization}
              onChange={(e) => {
                setAssignment_Input({
                  ...assignment_input,
                  organization: e.target.value,
                });
              }}
              className="outline-none shadow-md text-start shadow-slate-300 border-[1.5px] rounded-md
              monitor_md:w-[10rem]
              monitor_md:h-[2rem]
              monitor_md:px-3
              monitor_md:text-[14px]
              "
            />
            <button className="w-[2rem] h-[2rem] flex justify-center items-center ml-2 rounded-full">
              <FaPlusCircle className="text-[25px] text-green-700 transition-all ease-in-out duration-300 hover:text-green-500" />
            </button>
          </form>
          <div
            className="w-full 
          monitor_md:mt-5
          monitor_md:h-[15rem]
          monitor_md:p-3
          "
          >
            <table
              className="w-full flex flex-col justify-center items-center border-separate border-spacing-4
          
            "
            >
              <thead className="w-full">
                <tr className="w-full flex justify-center items-center h-[2rem] border-[1px] shadow-md">
                  <th
                    className="
                  monitor_md:w-[55%]"
                  >
                    Organization List
                  </th>
                </tr>
              </thead>
              <tbody className="w-full">
                <div
                  className="w-full overflow-auto border-[1px] shadow-md
                monitor_md:h-[11.5rem]
                monitor_md:mt-2
                "
                >
                  {assignments_data?.organization?.map((data, index) => {
                    return (
                      <>
                        <tr
                          className="flex justify-center items-center w-full
                  monitor_md:h-[3rem]
                  monitor_md:p-1
                  monitor_md:text-[14px]
                  "
                        >
                          <td
                            className="w-[10%] flex justify-center items-center border-l-[2px] border-t-[2px] border-b-[2px]
                          monitor_md:h-[2.5rem]
                          "
                          >
                            {index + 1}
                          </td>
                          <td className="w-[80%] h-full border-t-[2px] border-b-[2px]">
                            <p className="w-full h-full flex justify-center items-center">
                              {data.kapisanan}
                            </p>
                          </td>
                          <td className="w-[10%] h-full border-t-[2px] border-b-[2px] border-r-[2px]">
                            <div className="w-full h-full flex justify-center items-center">
                              <button
                                onClick={() => {
                                  axiosClient
                                    .delete(API_ORGANIZATION + `/${data.id}`)
                                    .then((res) => {
                                      setAssisgnments_Data({
                                        ...assignments_data,
                                        organization: res.data,
                                      });
                                    })
                                    .catch((error) => {
                                      console.log(error);
                                    });
                                }}
                                className="w-[2em] h-[2rem] text-red-600 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-red-500 hover:text-red-400"
                              >
                                <FaTrashAlt />
                              </button>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </div>
              </tbody>
            </table>
          </div>
        </fieldset>

        {/* 
        
        3rd
        
        */}
        <fieldset
          className="border-[2px] rounded-md
           monitor_md:w-[30%] 
           monitor_md:h-[75%]
        "
        >
          <legend
            className="font-bold
          monitor_md:text-[20px]
          "
          >
            Groups
          </legend>
          <form
            className="w-full px-5 mt-5 flex justify-end"
            onSubmit={Submit_Group}
          >
            <input
              type="text"
              placeholder="Add Group"
              required
              value={assignment_input.group}
              onChange={(e) => {
                setAssignment_Input({
                  ...assignment_input,
                  group: e.target.value,
                });
              }}
              className="outline-none shadow-md text-start shadow-slate-300 border-[1.5px] rounded-md
              monitor_md:w-[10rem]
              monitor_md:h-[2rem]
              monitor_md:px-3
              monitor_md:text-[14px]
              "
            />

            <button className="w-[2rem] h-[2rem] flex justify-center items-center ml-2 rounded-full">
              <FaPlusCircle className="text-[25px] text-green-700 transition-all ease-in-out duration-300 hover:text-green-500" />
            </button>
          </form>
          <div
            className="w-full 
          monitor_md:mt-5
          monitor_md:h-[15rem]
          monitor_md:p-3
          "
          >
            <table
              className="w-full flex flex-col justify-center items-center border-separate border-spacing-4
          
            "
            >
              <thead className="w-full">
                <tr className="w-full flex justify-center items-center h-[2rem] border-[1px] shadow-md">
                  <th
                    className="
                  monitor_md:w-[50%]"
                  >
                    Group List
                  </th>
                </tr>
              </thead>
              <tbody className="w-full">
                <div
                  className="w-full overflow-auto border-[1px] shadow-md
                monitor_md:h-[11.5rem]
                monitor_md:mt-2
                "
                >
                  {assignments_data?.group?.map((data, index) => {
                    return (
                      <>
                        <tr
                          className="flex justify-center items-center w-full
                  monitor_md:h-[3rem]
                  monitor_md:p-1
                  monitor_md:text-[14px]
                  "
                        >
                          <td
                            className="w-[10%] flex justify-center items-center border-l-[2px] border-t-[2px] border-b-[2px]
                          monitor_md:h-[2.5rem]
                          "
                          >
                            {index + 1}
                          </td>
                          <td className="w-[80%] h-full border-t-[2px] border-b-[2px]">
                            <p className="w-full h-full flex justify-center items-center">
                              {data.group}
                            </p>
                          </td>
                          <td className="w-[10%] h-full border-t-[2px] border-b-[2px] border-r-[2px]">
                            <div className="w-full h-full flex justify-center items-center">
                              <button
                                onClick={() => {
                                  axiosClient
                                    .delete(API_GROUP + `/${data.id}`)
                                    .then((res) => {
                                      setAssisgnments_Data({
                                        ...assignments_data,
                                        group: res.data,
                                      });
                                    })
                                    .catch((error) => {
                                      console.log(error);
                                    });
                                }}
                                className="w-[2em] h-[2rem] text-red-600 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-red-500 hover:text-red-400"
                              >
                                <FaTrashAlt />
                              </button>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </div>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Assignments_Content;
