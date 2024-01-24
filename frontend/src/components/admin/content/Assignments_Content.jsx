import React, { useEffect, useState } from "react";
import {
  FaPlusCircle,
  FaTrashAlt,
  FaEdit,
  FaTimesCircle,
} from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { IoWarning } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axiosClient from "../../../utils/axios/axios-client";
import {
  API_GROUP,
  API_MEMBER,
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
  const [modal_data, setModal_Data] = useState({
    purok: "",
    org: "",
    group: "",
    affected_count_purok: 0,
    affected_count_org: 0,
    affected_count_group: 0,
  });
  const [update_input_data, setUpdate_Input_Data] = useState({
    purok: "",
    kapisanan: "",
    group: "",
  });
  const [submit_trigger, setSubmit_Trigger] = useState({
    loading_purok: false,
    loading_org: false,
    loading_group: false,
    delete_loading_purok: false,
    delete_loading_org: false,
    delete_loading_group: false,
    disable: false,
  });
  const [delete_purok_modal, setDelete_Purok_Modal] = useState(false);
  const [delete_org_modal, setDelete_Org_Modal] = useState(false);
  const [delete_group_modal, setDelete_Group_Modal] = useState(false);
  const [member_data, setMember_Data] = useState([]);

  console.log(modal_data.affected_count_purok);

  useEffect(() => {
    if (purok_count > 0 && org_count > 0 && group_count > 0) {
      setSidebar_Buttons({ ...sidebar_buttons, masterlist: false });
    } else {
      setSidebar_Buttons({ ...sidebar_buttons, masterlist: true });
    }

    axiosClient
      .get(API_MEMBER)
      .then((res) => {
        setMember_Data(res.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [purok_count, org_count, group_count]);

  const Submit_Purok = (e) => {
    e.preventDefault();
    setSubmit_Trigger({
      ...submit_trigger,
      loading_purok: true,
      disable: true,
    });

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
        setSubmit_Trigger({
          ...submit_trigger,
          loading_purok: false,
          disable: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Submit_Organization = (e) => {
    e.preventDefault();
    setSubmit_Trigger({
      ...submit_trigger,
      loading_org: true,
      disable: true,
    });

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
        setSubmit_Trigger({
          ...submit_trigger,
          loading_org: false,
          disable: false,
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const Submit_Group = (e) => {
    e.preventDefault();
    setSubmit_Trigger({
      ...submit_trigger,
      loading_group: true,
      disable: true,
    });
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
        setSubmit_Trigger({
          ...submit_trigger,
          loading_group: false,
          disable: false,
        });
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
            {submit_trigger.loading_purok === true ? (
              <>
                <span
                  className="h-full animate-spin text-[20px] flex justify-center items-center
                   monitor_md:w-[10rem]
                "
                >
                  <AiOutlineLoading3Quarters />
                </span>
              </>
            ) : (
              <input
                type="text"
                placeholder="Add District / Purok"
                required
                disabled={delete_purok_modal === true ? true : false}
                value={assignment_input.purok}
                onChange={(e) => {
                  setAssignment_Input({
                    ...assignment_input,
                    purok: e.target.value,
                  });
                }}
                className="outline-none shadow-md text-start shadow-slate-300 border-[1.5px] rounded-md disabled:cursor-not-allowed
              monitor_md:w-[10rem]
              monitor_md:h-[2rem]
              monitor_md:px-3
              monitor_md:text-[14px]
              "
              />
            )}
            <button
              type="submit"
              disabled={
                submit_trigger.disable === true
                  ? true
                  : false || delete_purok_modal == true
                  ? true
                  : false
              }
              className=" flex justify-center items-center ml-2 rounded-full disabled:cursor-not-allowed
              monitor_md:w-[2rem]
              monitor_md:h-[2rem]
              "
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
            {delete_purok_modal === true ? (
              <>
                <div className="w-full h-full bg-black/40 rounded-md flex justify-center items-center">
                  <div
                    className="bg-white rounded-sm flex items-center justify-center flex-col
                  monitor_md:w-[85%] 
                  monitor_md:h-[85%] 
                  "
                  >
                    {submit_trigger.delete_loading_purok === true ? (
                      <>
                        <div className="w-full h-full flex justify-center items-center bg-black/50">
                          <AiOutlineLoading3Quarters className="animate-spin" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className="w-full flex justify-center flex-col 
                    monitor_md:h-[6.5rem]
                    monitor_md:mb-3
                    "
                        >
                          <span className="flex justify-center items-center">
                            <IoWarning className="text-yellow-400 text-[2.5rem]" />
                          </span>
                          <h1
                            className="font-semibold w-full text-center underline
                      monitor_md:text-[12px]
                      "
                          >
                            Plese confirm to delete{" "}
                            <b>Purok: {modal_data.purok}</b>
                          </h1>
                          <p
                            className="text-center
                      monitor_md:text-[11px]
                      monitor_md:px-[1rem]
                      monitor_md:mt-1
                      "
                          >
                            Warning! deleting this may affect{" "}
                            <b>
                              ( {modal_data.affected_count_purok} ) members{" "}
                            </b>
                            related to this data, are you sure you wish to
                            proceed this action?
                          </p>
                        </div>
                        <div
                          className="w-full flex justify-evenly items-center
                    monitor_md:h-[2.5rem]
                    "
                        >
                          <button
                            className="border-[1px] rounded-md bg-blue-500 text-white font-semibold text-[14px] transition-all ease-in-out duration-300 hover:bg-blue-400
                      monitor_md:w-[5rem]
                      monitor_md:h-[2rem]
                      "
                            onClick={() => {
                              setSubmit_Trigger({
                                ...submit_trigger,
                                delete_loading_purok: true,
                              });
                              axiosClient
                                .delete(
                                  API_PUROK + `/${update_trigger.purok_id}`
                                )
                                .then((res) => {
                                  setPurok_Data(res.data);
                                  setPurok_Count(res.data.length);
                                  setDelete_Purok_Modal(false);
                                  setModal_Data({ ...modal_data, purok: "" });
                                  setSubmit_Trigger({
                                    ...submit_trigger,
                                    delete_loading_purok: false,
                                  });
                                })
                                .catch((error) => {
                                  console.log(error);
                                });
                            }}
                          >
                            Yes
                          </button>
                          <button
                            className="border-[1px] rounded-md bg-red-500 text-white font-semibold text-[14px]
                      monitor_md:w-[5rem]
                      monitor_md:h-[2rem]
                      "
                            onClick={() => {
                              setDelete_Purok_Modal(false);
                              setModal_Data({ ...modal_data, purok: "" });
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            ) : (
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
                              <div className=" w-full h-full flex justify-center items-center border-[1px] shadow-md shadow-slate-300 overflow-hidden">
                                <form
                                  action=""
                                  className="w-full h-full flex bg-gray-100"
                                  onSubmit={(e) => {
                                    e.preventDefault();
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
                                  monitor_md:text-[14px]
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
                                            setData_Input_Checker(
                                              res.data.purok
                                            );
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
                                        setDelete_Purok_Modal(true);
                                        setUpdate_trigger({
                                          ...update_trigger,
                                          purok_id: data.id,
                                        });
                                        setModal_Data({
                                          ...modal_data,
                                          purok: data.purok,
                                          affected_count_purok:
                                            member_data.filter(
                                              (fil) => fil.purok === data.purok
                                            ).length,
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
            )}
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
            {submit_trigger.loading_org === true ? (
              <>
                <span
                  className="h-full animate-spin text-[20px] flex justify-center items-center
                   monitor_md:w-[10rem]
                "
                >
                  <AiOutlineLoading3Quarters />
                </span>
              </>
            ) : (
              <input
                type="text"
                placeholder="Add Organization"
                required
                disabled={delete_org_modal === true ? true : false}
                value={assignment_input.organization}
                onChange={(e) => {
                  setAssignment_Input({
                    ...assignment_input,
                    organization: e.target.value,
                  });
                }}
                className="outline-none shadow-md text-start shadow-slate-300 border-[1.5px] rounded-md disabled:cursor-not-allowed
              monitor_md:w-[10rem]
              monitor_md:h-[2rem]
              monitor_md:px-3
              monitor_md:text-[14px]
              "
              />
            )}
            <button
              type="submit"
              disabled={
                submit_trigger.disable === true
                  ? true
                  : false || delete_org_modal === true
                  ? true
                  : false
              }
              className=" flex justify-center items-center ml-2 rounded-full disabled:cursor-not-allowed
              monitor_md:w-[2rem]
              monitor_md:h-[2rem]
              "
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
            {delete_org_modal === true ? (
              <>
                <div className="w-full h-full bg-black/40 rounded-md flex justify-center items-center">
                  <div
                    className="bg-white rounded-sm flex items-center justify-center flex-col
                    monitor_md:w-[85%] 
                    monitor_md:h-[85%] 
                  "
                  >
                    {submit_trigger.delete_loading_org === true ? (
                      <>
                        <div className="w-full h-full flex justify-center items-center bg-black/50">
                          <AiOutlineLoading3Quarters className="animate-spin" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className="w-full flex justify-center flex-col 
                    monitor_md:h-[6.5rem]
                    monitor_md:mb-3
                    "
                        >
                          <span className="flex justify-center items-center">
                            <IoWarning className="text-yellow-400 text-[2.5rem]" />
                          </span>
                          <h1
                            className="font-semibold w-full text-center underline
                      monitor_md:text-[12px]
                      "
                          >
                            Plese confirm to delete ( <b> {modal_data.org}</b> )
                          </h1>
                          <p
                            className="text-center
                      monitor_md:text-[11px]
                      monitor_md:px-[1rem]
                      monitor_md:mt-1
                      "
                          >
                            Warning! deleting this may affect{" "}
                            <b>( {modal_data.affected_count_org} ) members </b>
                            related to this data, are you sure you wish to
                            proceed this action?
                          </p>
                        </div>
                        <div
                          className="w-full flex justify-evenly items-center
                      monitor_md:h-[2.5rem]
                    "
                        >
                          <button
                            className="border-[1px] rounded-md bg-blue-500 text-white font-semibold text-[14px] transition-all ease-in-out duration-300 hover:bg-blue-400
                      monitor_md:w-[5rem]
                      monitor_md:h-[2rem]
                      "
                            onClick={() => {
                              setSubmit_Trigger({
                                ...submit_trigger,
                                delete_loading_org: true,
                              });
                              axiosClient
                                .delete(
                                  API_ORGANIZATION + `/${update_trigger.org_id}`
                                )
                                .then((res) => {
                                  setOrganization_Data(res.data);
                                  setOrg_Count(res.data.length);
                                  setDelete_Org_Modal(false);
                                  setModal_Data({
                                    ...modal_data,
                                    purok: "",
                                  });
                                  setSubmit_Trigger({
                                    ...submit_trigger,
                                    delete_loading_org: false,
                                  });
                                })
                                .catch((error) => {
                                  console.log(error);
                                });
                            }}
                          >
                            Yes
                          </button>
                          <button
                            className="border-[1px] rounded-md bg-red-500 text-white font-semibold text-[14px]
                      monitor_md:w-[5rem]
                      monitor_md:h-[2rem]
                      "
                            onClick={() => {
                              setDelete_Org_Modal(false);
                              setModal_Data({
                                ...modal_data,
                                org: "",
                              });
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            ) : (
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
                  monitor_md:h-[3.5rem]
                  monitor_md:p-1
                  monitor_md:text-[14px]
                  "
                          >
                            <>
                              {update_trigger.org_update === true &&
                              data.id === update_trigger.org_id ? (
                                <div className=" w-full h-full flex justify-center items-center border-[1px] shadow-md shadow-slate-300 overflow-hidden">
                                  <form
                                    action=""
                                    className="w-full h-full flex bg-gray-100"
                                    onSubmit={(e) => {
                                      e.preventDefault();
                                      axiosClient
                                        .put(
                                          API_ORGANIZATION +
                                            `/${update_trigger.org_id}`,
                                          {
                                            kapisanan:
                                              update_input_data.kapisanan,
                                          }
                                        )
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

                                      setData_Input_Checker("");
                                    }}
                                  >
                                    {update_input_data.kapisanan === "" &&
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
                                        monitor_md:text-[14px]
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
                                            value={update_input_data.kapisanan}
                                            onChange={(e) => {
                                              setUpdate_Input_Data({
                                                ...update_input_data,
                                                kapisanan: e.target.value,
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
                                      {data.kapisanan}
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
                                            org_update: true,
                                            org_id: data.id,
                                            disabled: true,
                                          });

                                          axiosClient
                                            .get(
                                              API_ORGANIZATION + `/${data.id}`
                                            )
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
                                        className="w-[1.5rem] h-[1.5rem] disabled:cursor-not-allowed  text-[18px] text-yellow-500 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-yellow-500 hover:text-yellow-400"
                                      >
                                        <FaEdit />
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setDelete_Org_Modal(true);
                                          setUpdate_trigger({
                                            ...update_trigger,
                                            org_id: data.id,
                                          });
                                          setModal_Data({
                                            ...modal_data,
                                            org: data.kapisanan,
                                            affected_count_org:
                                              member_data.filter(
                                                (fil) =>
                                                  fil.kapisanan ===
                                                  data.kapisanan
                                              ).length,
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
                            </>
                          </tr>
                        </>
                      );
                    })}
                  </div>
                </tbody>
              </table>
            )}
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
            {submit_trigger.loading_group === true ? (
              <>
                <span
                  className="h-full animate-spin text-[20px] flex justify-center items-center
                   monitor_md:w-[10rem]
                "
                >
                  <AiOutlineLoading3Quarters />
                </span>
              </>
            ) : (
              <input
                type="text"
                placeholder="Add Group"
                required
                disabled={delete_group_modal === true ? true : false}
                value={assignment_input.group}
                onChange={(e) => {
                  setAssignment_Input({
                    ...assignment_input,
                    group: e.target.value,
                  });
                }}
                className="outline-none shadow-md text-start shadow-slate-300 border-[1.5px] rounded-md disabled:cursor-not-allowed
              monitor_md:w-[10rem]
              monitor_md:h-[2rem]
              monitor_md:px-3
              monitor_md:text-[14px]
              "
              />
            )}

            <button
              type="submit"
              disabled={
                submit_trigger.disable === true
                  ? true
                  : false || delete_group_modal == true
                  ? true
                  : false
              }
              className=" flex justify-center items-center ml-2 rounded-full disabled:cursor-not-allowed
              monitor_md:w-[2rem]
              monitor_md:h-[2rem]
              "
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
            {delete_group_modal === true ? (
              <>
                <div className="w-full h-full bg-black/40 rounded-md flex justify-center items-center">
                  <div
                    className="bg-white rounded-sm flex items-center justify-center flex-col
                    monitor_md:w-[85%] 
                    monitor_md:h-[85%] 
                  "
                  >
                    {submit_trigger.delete_loading_group === true ? (
                      <>
                        <div className="w-full h-full flex justify-center items-center bg-black/50">
                          <AiOutlineLoading3Quarters className="animate-spin" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className="w-full flex justify-center flex-col 
                    monitor_md:h-[6.5rem]
                    monitor_md:mb-3
                    "
                        >
                          <span className="flex justify-center items-center">
                            <IoWarning className="text-yellow-400 text-[2.5rem]" />
                          </span>
                          <h1
                            className="font-semibold w-full text-center underline
                      monitor_md:text-[12px]
                      "
                          >
                            Plese confirm to delete{" "}
                            <b>Group: {modal_data.affected_count_group}</b>
                          </h1>
                          <p
                            className="text-center
                      monitor_md:text-[11px]
                      monitor_md:px-[1rem]
                      monitor_md:mt-1
                      "
                          >
                            Warning! deleting this may affect{" "}
                            <b>
                              ( {modal_data.affected_count_group} ) members{" "}
                            </b>
                            related to this data, are you sure you wish to
                            proceed this action?
                          </p>
                        </div>
                        <div
                          className="w-full flex justify-evenly items-center
                      monitor_md:h-[2.5rem]
                    "
                        >
                          <button
                            className="border-[1px] rounded-md bg-blue-500 text-white font-semibold text-[14px] transition-all ease-in-out duration-300 hover:bg-blue-400
                      monitor_md:w-[5rem]
                      monitor_md:h-[2rem]
                      "
                            onClick={() => {
                              setSubmit_Trigger({
                                ...submit_trigger,
                                delete_loading_group: true,
                              });
                              axiosClient
                                .delete(
                                  API_GROUP + `/${update_trigger.group_id}`
                                )
                                .then((res) => {
                                  setGroup_Data(res.data);
                                  setGroup_Count(res.data.length);
                                  setDelete_Group_Modal(false);
                                  setModal_Data({
                                    ...modal_data,
                                    group: "",
                                  });
                                  setSubmit_Trigger({
                                    ...submit_trigger,
                                    delete_loading_group: false,
                                  });
                                })
                                .catch((error) => {
                                  console.log(error);
                                });
                            }}
                          >
                            Yes
                          </button>
                          <button
                            className="border-[1px] rounded-md bg-red-500 text-white font-semibold text-[14px]
                      monitor_md:w-[5rem]
                      monitor_md:h-[2rem]
                      "
                            onClick={() => {
                              setDelete_Group_Modal(false);
                              setModal_Data({
                                ...modal_data,
                                group: "",
                              });
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            ) : (
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
                  monitor_md:h-[3.5rem]
                  monitor_md:p-1
                  monitor_md:text-[14px]
                  "
                          >
                            {update_trigger.group_update === true &&
                            data.id === update_trigger.group_id ? (
                              <div className=" w-full h-full flex justify-center items-center border-[1px] shadow-md shadow-slate-300 overflow-hidden">
                                <form
                                  action=""
                                  className="w-full h-full flex bg-gray-100"
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                    axiosClient
                                      .put(
                                        API_GROUP +
                                          `/${update_trigger.group_id}`,
                                        {
                                          group: update_input_data.group,
                                        }
                                      )
                                      .then((res) => {
                                        setGroup_Data(res.data);
                                        setUpdate_trigger({
                                          ...update_trigger,
                                          group_update: false,
                                          disabled: false,
                                          group_id: 0,
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
                                  {update_input_data.group === "" &&
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
                                  monitor_md:text-[14px]
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
                                          value={update_input_data.group}
                                          onChange={(e) => {
                                            setUpdate_Input_Data({
                                              ...update_input_data,
                                              group: e.target.value,
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
                                              group_update: false,
                                              group_id: 0,
                                              disabled: false,
                                            });
                                            setUpdate_Input_Data({
                                              ...update_input_data,
                                              group: "",
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
                                    {data.group}
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
                                          group_update: true,
                                          group_id: data.id,
                                          disabled: true,
                                        });

                                        axiosClient
                                          .get(API_GROUP + `/${data.id}`)
                                          .then((res) => {
                                            setData_Input_Checker(
                                              res.data.group
                                            );
                                            setUpdate_Input_Data({
                                              ...update_input_data,
                                              group: res.data.group,
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
                                        setDelete_Group_Modal(true);
                                        setUpdate_trigger({
                                          ...update_trigger,
                                          group_id: data.id,
                                        });
                                        setModal_Data({
                                          ...modal_data,
                                          group: data.group,
                                          affected_count_group:
                                            member_data.filter(
                                              (fil) => fil.group === data.group
                                            ).length,
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
                          {/* <tr
                          className="flex justify-center items-center w-full
                  monitor_md:h-[3rem]
                  monitor_md:p-1
                  monitor_md:text-[14px]
                  "
                        >
                          {update_trigger.group_update === true &&
                          data.id === update_trigger.group_id ? (
                            <>
                              <div className=" w-full h-full flex justify-center items-center border-[1px] shadow-md shadow-slate-300 overflow-hidden">
                                <form
                                  action=""
                                  className="w-full h-full flex bg-gray-100"
                                  onSubmit={(e) => {
                                    e.preventDefault();
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
                                >
                                  {update_input_data.group === "" &&
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
                                  monitor_md:text-[14px]
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
                                          value={update_input_data.group}
                                          onChange={(e) => {
                                            setUpdate_Input_Data({
                                              ...update_input_data,
                                              group: e.target.value,
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
                                              group_update: false,
                                              group_id: 0,
                                              disabled: false,
                                            });
                                            setUpdate_Input_Data({
                                              ...update_input_data,
                                              group: "",
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
                            </>
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
                                  {data.group}
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
                                        group_update: true,
                                        group_id: data.id,
                                        disabled: true,
                                      });

                                      axiosClient
                                        .get(API_GROUP + `/${data.id}`)
                                        .then((res) => {
                                          setData_Input_Checker(res.data.group);
                                          setUpdate_Input_Data({
                                            ...update_input_data,
                                            group: res.data.group,
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
                                        .delete(API_GROUP + `/${data.id}`)
                                        .then((res) => {
                                          setGroup_Data(res.data);
                                          setGroup_Count(res.data.length);
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
                              <button className="w-[1.5rem] h-[1.5rem] text-[18px] text-yellow-600 rounded-full flex justify-center items-center transition-all ease-in-out duration-300 hover:border-yellow-500 hover:text-yellow-400">
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
                        </tr> */}
                        </>
                      );
                    })}
                  </div>
                </tbody>
              </table>
            )}
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
