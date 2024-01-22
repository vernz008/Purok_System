import React, { useEffect, useState } from "react";
import {
  FaPlusCircle,
  FaTrashAlt,
  FaEdit,
  FaTimesCircle,
} from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axiosClient from "../../../utils/axios/axios-client";
import {
  API_GROUP,
  API_ORGANIZATION,
  API_PUROK,
} from "../../../utils/urls/api_url";

const Assignments_Content = ({
  purok_data,
  setPurok_Data,
  organization_data,
  setOrganization_Data,
  group_data,
  setGroup_Data,
  sidebar_buttons,
  setSidebar_Buttons,
  setPurok_Count,
  purok_count,
  setOrg_Count,
  org_count,
  setGroup_Count,
  group_count,
}) => {
  const [assignment_input, setAssignment_Input] = useState({
    purok: "",
    organization: "",
    group: "",
  });
  const [update_trigger, setUpdate_trigger] = useState({
    purok_update: false,
    org_update: false,
    group_update: false,
    purok_id: 0,
    org_id: 0,
    group_id: 0,
    loading: true,
    disabled: false,
  });
  const [data_input_cheker, setData_Input_Checker] = useState("");
  const [update_input_data, setUpdate_Input_Data] = useState({
    purok: "",
    kapisanan: "",
    group: "",
  });

  useEffect(() => {
    if (purok_count > 0 && org_count > 0 && group_count > 0) {
      setSidebar_Buttons({ ...sidebar_buttons, masterlist: false });
    } else {
      setSidebar_Buttons({ ...sidebar_buttons, masterlist: true });
    }
  }, [purok_count, org_count, group_count]);

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
        setPurok_Data(res.data);
        setPurok_Count(res.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
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
        setOrganization_Data(res.data);
        setOrg_Count(res.data.length);
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
        setGroup_Data(res.data);
        setGroup_Count(res.data.length);
      });
  };

  const Update_Submit_Purok = (e) => {
    e.preventDefault();
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
                  {purok_data?.map((data, index) => {
                    return (
                      <>
                        <tr
                          className="flex justify-center items-center w-full
                  monitor_md:h-[3.5rem]
                  monitor_md:p-1
                  monitor_md:text-[14px]
                  "
                        >
                          {update_trigger.purok_update === true &&
                          data.id === update_trigger.purok_id ? (
                            <div className=" w-full h-full flex justify-center items-center border-[1px] shadow-md shadow-slate-300">
                              <form
                                action=""
                                className="w-full h-full flex"
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  axiosClient
                                    .put(
                                      API_PUROK + `/${update_trigger.purok_id}`,
                                      {
                                        purok: update_input_data.purok,
                                      }
                                    )
                                    .then((res) => {
                                      setPurok_Data(res.data);
                                      setUpdate_trigger({
                                        ...update_trigger,
                                        purok_update: false,
                                        disabled: false,
                                        purok_id: 0,
                                      });
                                    })
                                    .catch((error) => {
                                      console.log(error);
                                    });

                                  setUpdate_trigger({
                                    ...update_trigger,
                                    purok_update: true,
                                  });

                                  setData_Input_Checker("");
                                }}
                              >
                                {update_input_data.purok === "" &&
                                data_input_cheker === "" ? (
                                  <>
                                    <span className="w-full h-full animate-spin text-[20px] flex justify-center items-center">
                                      <AiOutlineLoading3Quarters />
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <div
                                      className="h-full  flex justify-center items-center
                                monitor_md:w-[10%]
                                "
                                    >
                                      <span
                                        className="
                                  monitor_md:text-[18px]
                                  "
                                      >
                                        {index + 1}
                                      </span>
                                    </div>
                                    <div
                                      className=" flex justify-center items-center h-full
                                monitor_md:w-[70%]
                                "
                                    >
                                      <input
                                        required
                                        type="text"
                                        disabled={
                                          update_trigger.loading === false
                                            ? true
                                            : false
                                        }
                                        className="border-b-2 outline-none px-2 text-center h-[2rem] disabled:cursor-not-allowed"
                                        placeholder="Enter Purok. . . ."
                                        value={update_input_data.purok}
                                        onChange={(e) => {
                                          setUpdate_Input_Data({
                                            ...update_input_data,
                                            purok: e.target.value,
                                          });
                                        }}
                                      />
                                    </div>
                                    <div
                                      className="flex justify-evenly items-center
                                monitor_md:w-[20%]
                                "
                                    >
                                      <button
                                        type="submit"
                                        className="w-[1.5rem] h-[1.5rem] text-[18px] text-yellow-600 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-yellow-500 hover:text-yellow-400"
                                      >
                                        <IoIosSave className="text-green-600 transition-all ease-out duration-300 hover:text-green-500" />
                                      </button>
                                      <button
                                        onClick={() => {
                                          setUpdate_trigger({
                                            ...update_trigger,
                                            purok_update: false,
                                            purok_id: 0,
                                            disabled: false,
                                          });
                                          setUpdate_Input_Data({
                                            ...update_input_data,
                                            purok: "",
                                          });
                                          setData_Input_Checker("");
                                        }}
                                        className="w-[1.5rem] h-[1.5rem] text-[18px] text-red-600 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-red-500 hover:text-red-400"
                                      >
                                        <FaTimesCircle />
                                      </button>
                                    </div>
                                  </>
                                )}
                              </form>
                            </div>
                          ) : (
                            <>
                              <td
                                className="w-[10%] flex justify-center items-center border-l-[2px] border-t-[2px] border-b-[2px]
                          monitor_md:h-[3rem]
                          "
                              >
                                {index + 1}
                              </td>
                              <td className="w-[70%] h-full border-t-[2px] border-b-[2px]">
                                <p className="w-full h-full flex justify-center items-center">
                                  {data.purok}
                                </p>
                              </td>
                              <td className="w-[20%] h-full border-t-[2px] border-b-[2px] border-r-[2px]">
                                <div
                                  className={`w-full h-full flex justify-evenly  items-center`}
                                >
                                  <button
                                    type="button"
                                    disabled={update_trigger.disabled}
                                    onClick={() => {
                                      setUpdate_trigger({
                                        ...update_trigger,
                                        purok_update: true,
                                        purok_id: data.id,
                                        disabled: true,
                                      });

                                      axiosClient
                                        .get(API_PUROK + `/${data.id}`)
                                        .then((res) => {
                                          setData_Input_Checker(res.data.purok);
                                          setUpdate_Input_Data({
                                            ...update_input_data,
                                            purok: res.data.purok,
                                          });
                                        })
                                        .catch((error) => {
                                          console.log(error);
                                        });
                                    }}
                                    className="w-[1.5rem] h-[1.5rem] disabled:cursor-not-allowed  text-[18px] text-yellow-500 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-yellow-500 hover:text-yellow-400"
                                  >
                                    <FaEdit />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      axiosClient
                                        .delete(API_PUROK + `/${data.id}`)
                                        .then((res) => {
                                          setPurok_Data(res.data);
                                          setPurok_Count(res.data.length);
                                        })
                                        .catch((error) => {
                                          console.log(error);
                                        });
                                    }}
                                    className="w-[1.5rem] h-[1.5rem] text-[18px] text-red-600 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-red-500 hover:text-red-400"
                                  >
                                    <FaTrashAlt />
                                  </button>
                                </div>
                              </td>
                            </>
                          )}
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
                  className="w-full overflow-auto
                monitor_md:h-[11.5rem]
                monitor_md:mt-2
                "
                >
                  {organization_data?.map((data, index) => {
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
                          <td className="w-[70%] h-full border-t-[2px] border-b-[2px]">
                            {update_trigger.org_update === true &&
                            data.id === update_trigger.org_id ? (
                              <div className="w-full h-full flex justify-center items-center">
                                {update_input_data.kapisanan === "" &&
                                data_input_cheker === "" ? (
                                  <>
                                    <span className="w-full h-full animate-spin text-[20px] flex justify-center items-center">
                                      <AiOutlineLoading3Quarters />
                                    </span>
                                  </>
                                ) : (
                                  <form
                                    id="org"
                                    onSubmit={(e) => {
                                      e.preventDefault();
                                      axiosClient
                                        .put(API_ORGANIZATION + `/${data.id}`, {
                                          kapisanan:
                                            update_input_data.kapisanan,
                                        })
                                        .then((res) => {
                                          setOrganization_Data(res.data);
                                          setUpdate_trigger({
                                            ...update_trigger,
                                            org_update: false,
                                            disabled: false,
                                            org_id: 0,
                                          });
                                        })
                                        .catch((error) => {
                                          console.log(error);
                                        });

                                      setUpdate_trigger({
                                        ...update_trigger,
                                        org_update: true,
                                      });
                                    }}
                                  >
                                    <input
                                      type="text"
                                      disabled={
                                        update_trigger.loading === false
                                          ? true
                                          : false
                                      }
                                      required
                                      className="border-b-2 outline-none px-2 text-center"
                                      placeholder="Enter Purok. . . ."
                                      value={update_input_data.kapisanan}
                                      onChange={(e) => {
                                        setUpdate_Input_Data({
                                          ...update_input_data,
                                          kapisanan: e.target.value,
                                        });
                                      }}
                                    />
                                  </form>
                                )}
                              </div>
                            ) : (
                              <>
                                <p className="w-full h-full flex justify-center items-center">
                                  {data.kapisanan}
                                </p>
                              </>
                            )}
                          </td>
                          <td className="w-[20%] h-full border-t-[2px] border-b-[2px] border-r-[2px]">
                            <div className="w-full h-full flex justify-evenly items-center">
                              {update_trigger.org_update === true &&
                              data.id === update_trigger.org_id ? (
                                <>
                                  <button
                                    type="submit"
                                    form="org"
                                    className="w-[1.5rem] h-[1.5rem] text-[18px] text-yellow-600 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-yellow-500 hover:text-yellow-400"
                                  >
                                    <IoIosSave className="text-green-600 transition-all ease-out duration-300 hover:text-green-500" />
                                  </button>
                                  <button
                                    onClick={() => {
                                      setUpdate_trigger({
                                        ...update_trigger,
                                        org_update: false,
                                        org_id: 0,
                                        disabled: false,
                                      });
                                      setUpdate_Input_Data({
                                        ...update_input_data,
                                        kapisanan: "",
                                      });
                                      setData_Input_Checker("");
                                    }}
                                    className="w-[1.5rem] h-[1.5rem] text-[18px] text-red-600 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-red-500 hover:text-red-400"
                                  >
                                    <FaTimesCircle />
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    disabled={update_trigger.disabled}
                                    onClick={() => {
                                      setUpdate_trigger({
                                        ...update_trigger,
                                        org_update: true,
                                        org_id: data.id,
                                        disabled: true,
                                      });

                                      axiosClient
                                        .get(API_ORGANIZATION + `/${data.id}`)
                                        .then((res) => {
                                          setData_Input_Checker(
                                            res.data.kapisanan
                                          );
                                          setUpdate_Input_Data({
                                            ...update_input_data,
                                            kapisanan: res.data.kapisanan,
                                          });
                                        })
                                        .catch((error) => {
                                          console.log(error);
                                        });
                                    }}
                                    className="w-[1.5rem] h-[1.5rem] disabled:cursor-not-allowed text-[18px] text-yellow-500 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-yellow-500 hover:text-yellow-400"
                                  >
                                    <FaEdit />
                                  </button>
                                  <button
                                    onClick={() => {
                                      axiosClient
                                        .delete(
                                          API_ORGANIZATION + `/${data.id}`
                                        )
                                        .then((res) => {
                                          setOrganization_Data(res.data);
                                          setOrg_Count(res.data.length);
                                        })
                                        .catch((error) => {
                                          console.log(error);
                                        });
                                    }}
                                    className="w-[1.5rem] h-[1.5rem] text-[18px] text-red-600 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-red-500 hover:text-red-400"
                                  >
                                    <FaTrashAlt />
                                  </button>
                                </>
                              )}
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
                  className="w-full overflow-auto
                monitor_md:h-[11.5rem]
                monitor_md:mt-2
                "
                >
                  {group_data?.map((data, index) => {
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
                          <td className="w-[70%] h-full border-t-[2px] border-b-[2px]">
                            <p className="w-full h-full flex justify-center items-center">
                              {data.group}
                            </p>
                          </td>
                          <td className="w-[20%] h-full border-t-[2px] border-b-[2px] border-r-[2px]">
                            <div className="w-full h-full flex justify-center items-center">
                              <button
                                // onClick={() => {
                                //   axiosClient
                                //     .delete(API_PUROK + `/${data.id}`)
                                //     .then((res) => {
                                //       setPurok_Data(res.data);
                                //       setPurok_Count(res.data.length);
                                //     })
                                //     .catch((error) => {
                                //       console.log(error);
                                //     });
                                // }}
                                className="w-[1.5rem] h-[1.5rem] text-[18px] text-yellow-600 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-yellow-500 hover:text-yellow-400"
                              >
                                <FaEdit />
                              </button>
                              <button
                                onClick={() => {
                                  axiosClient
                                    .delete(API_GROUP + `/${data.id}`)
                                    .then((res) => {
                                      setGroup_Data(res.data);
                                      setGroup_Count(res.data.length);
                                    })
                                    .catch((error) => {
                                      console.log(error);
                                    });
                                }}
                                className="w-[1.5rem] h-[1.5rem] text-red-600 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-red-500 hover:text-red-400"
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

// Notes:
// Need to fix Update Organization and Groups
// Need to add error handling when submitting a data
// 19/01/24

{
  /* {update_trigger.purok_update === true &&
                            data.id === update_trigger.purok_id ? (
                              <div
                                key={data.id}
                                className="w-full h-full flex justify-center items-center"
                              >
                                {update_input_data.purok === "" &&
                                data_input_cheker === "" ? (
                                  <>
                                    <span className="w-full h-full animate-spin text-[20px] flex justify-center items-center">
                                      <AiOutlineLoading3Quarters />
                                    </span>
                                  </>
                                ) : (
                                  <div>
                                    <input
                                      required
                                      type="text"
                                      disabled={
                                        update_trigger.loading === false
                                          ? true
                                          : false
                                      }
                                      className="border-b-2 outline-none px-2 text-center"
                                      placeholder="Enter Purok. . . ."
                                      value={update_input_data.purok}
                                      onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                          axiosClient
                                            .put(
                                              API_PUROK +
                                                `/${update_trigger.purok_id}`,
                                              {
                                                purok: update_input_data.purok,
                                              }
                                            )
                                            .then((res) => {
                                              setPurok_Data(res.data);
                                              setUpdate_trigger({
                                                ...update_trigger,
                                                purok_update: false,
                                                disabled: false,
                                                purok_id: 0,
                                              });
                                            })
                                            .catch((error) => {
                                              console.log(error);
                                            });

                                          setUpdate_trigger({
                                            ...update_trigger,
                                            purok_update: true,
                                          });

                                          setData_Input_Checker("");
                                        }
                                      }}
                                      onChange={(e) => {
                                        setUpdate_Input_Data({
                                          ...update_input_data,
                                          purok: e.target.value,
                                        });
                                      }}
                                    />
                                  </div>
                                )}
                              </div>
                            ) : (
                              <>
                                <p className="w-full h-full flex justify-center items-center">
                                  {data.purok}
                                </p>
                              </>
                            )} */

  {
    /* {update_trigger.purok_update === true &&
                              data.id === update_trigger.purok_id ? (
                                <>
                                  <button
                                    onClick={() => {
                                      axiosClient
                                        .put(
                                          API_PUROK +
                                            `/${update_trigger.purok_id}`,
                                          {
                                            purok: update_input_data.purok,
                                          }
                                        )
                                        .then((res) => {
                                          setPurok_Data(res.data);
                                          setUpdate_trigger({
                                            ...update_trigger,
                                            purok_update: false,
                                            disabled: false,
                                            purok_id: 0,
                                          });
                                        })
                                        .catch((error) => {
                                          console.log(error);
                                        });

                                      setUpdate_trigger({
                                        ...update_trigger,
                                        purok_update: true,
                                      });

                                      setData_Input_Checker("");
                                    }}
                                    className="w-[1.5rem] h-[1.5rem] text-[18px] text-yellow-600 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-yellow-500 hover:text-yellow-400"
                                  >
                                    <IoIosSave className="text-green-600 transition-all ease-out duration-300 hover:text-green-500" />
                                  </button>
                                  <button
                                    onClick={() => {
                                      setUpdate_trigger({
                                        ...update_trigger,
                                        purok_update: false,
                                        purok_id: 0,
                                        disabled: false,
                                      });
                                      setUpdate_Input_Data({
                                        ...update_input_data,
                                        purok: "",
                                      });
                                      setData_Input_Checker("");
                                    }}
                                    className="w-[1.5rem] h-[1.5rem] text-[18px] text-red-600 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-red-500 hover:text-red-400"
                                  >
                                    <FaTimesCircle />
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    type="button"
                                    disabled={update_trigger.disabled}
                                    onClick={() => {
                                      setUpdate_trigger({
                                        ...update_trigger,
                                        purok_update: true,
                                        purok_id: data.id,
                                        disabled: true,
                                      });

                                      axiosClient
                                        .get(API_PUROK + `/${data.id}`)
                                        .then((res) => {
                                          setData_Input_Checker(res.data.purok);
                                          setUpdate_Input_Data({
                                            ...update_input_data,
                                            purok: res.data.purok,
                                          });
                                        })
                                        .catch((error) => {
                                          console.log(error);
                                        });
                                    }}
                                    className="w-[1.5rem] h-[1.5rem] disabled:cursor-not-allowed  text-[18px] text-yellow-500 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-yellow-500 hover:text-yellow-400"
                                  >
                                    <FaEdit />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      axiosClient
                                        .delete(API_PUROK + `/${data.id}`)
                                        .then((res) => {
                                          setPurok_Data(res.data);
                                          setPurok_Count(res.data.length);
                                        })
                                        .catch((error) => {
                                          console.log(error);
                                        });
                                    }}
                                    className="w-[1.5rem] h-[1.5rem] text-[18px] text-red-600 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-red-500 hover:text-red-400"
                                  >
                                    <FaTrashAlt />
                                  </button>
                                </>
                              )} */
  }
}
