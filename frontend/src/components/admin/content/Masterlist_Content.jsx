import React, { useEffect, useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";
import Create_MasterList from "../modal/MasterList/Create_MasterList";
import axiosClient from "../../../utils/axios/axios-client";
import {
  API_ORGANIZATION,
  API_PUROK,
  API_MEMBER,
} from "../../../utils/urls/api_url";
import Update_MasterList from "../modal/MasterList/Update_MasterList";
import { data } from "autoprefixer";

const Masterlist_Content = () => {
  const [masterList_data, setMasterList_Data] = useState([]);
  const [org_data, setOrg_Data] = useState([]);
  const [purok_data, setPurok_Data] = useState([]);
  const [transfer_data, setTransfer_Data] = useState([]);
  const [masterList_Modal, setMasterList_Modal] = useState(false);
  const [update_masterList_Modal, setUpdate_MasterList_Modal] = useState({
    id: 0,
    activator: false,
  });

  console.log(masterList_data);
  console.log(update_masterList_Modal);

  useEffect(() => {
    axiosClient
      .get(API_ORGANIZATION)
      .then((res) => {
        setOrg_Data(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axiosClient
      .get(API_PUROK)
      .then((res) => {
        setPurok_Data(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axiosClient
      .get(API_MEMBER)
      .then((res) => {
        setMasterList_Data(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-[95%] h-[90%] bg-white rounded-md shadow-md shadow-gray-400 flex flex-col justify-between items-center">
      {/* Top container */}
      <div
        className="w-full h-[15%] p-6
      monitor_md:p-4
      monitor_md:h-[18%]
      "
      >
        <div
          className="w-full h-auto border-t-[1px] border-r-[1px] border-l-[1px] shadow-lg shadow-slate-300 p-3 flex justify-start items-center
        monitor_md:h-[4.5rem]

        monitor_xxl:h-[5.5rem] 
        "
        >
          <div
            className="w-[12%] h-[3rem]
          monitor_md:h-[2rem]

          monitor_xxl:h-[2.5rem]
          "
          >
            <button
              onClick={() => setMasterList_Modal(true)}
              className="w-full h-full flex justify-center items-center rounded-md transition-all ease-in-out duration-300 bg-green-600 text-white hover:bg-green-500"
            >
              <MdAssignmentAdd
                className="mr-4 text-[20px]
              monitor_md:text-[16px]

              monitor_xxl:text-[20px]
              "
              />
              <p
                className="font-bold
              monitor_md:text-[14px]

              monitor_xxl:text-[16px]
              "
              >
                Add Member
              </p>
            </button>
          </div>
        </div>
      </div>
      {/* Top container */}

      {/* Table */}
      <div className="w-full h-[90%] p-2">
        <h1
          className="px-5 text-[25px] font-bold
        monitor_md:text-[22px]
        "
        >
          Masterlist
        </h1>
        <table className="w-[100%] h-[10%] overflow-hidden justify-evenly border-separate border-spacing-4">
          <thead className="">
            <tr
              className=" h-[4rem] text-center flex justify-between items-center border-[2px] border-gray-300 shadow-md shadow-gray-300
            monitor_md:h-[3rem]
            "
            >
              <th className="w-[20%] h-full flex justify-center items-center">
                No.
              </th>
              <th className="w-[20%] h-full flex justify-center items-center">
                Firstname
              </th>
              <th className="w-[20%] h-full flex justify-center items-center">
                Middlename
              </th>
              <th className="w-[20%] h-full flex justify-center items-center">
                Lastname
              </th>
              <th className="w-[20%] h-full flex justify-center items-center">
                Gender
              </th>
              <th className="w-[20%] h-full flex justify-center items-center">
                Birthday
              </th>
              <th className="w-[20%] h-full flex justify-center items-center">
                Address
              </th>
              <th className="w-[20%] h-full flex justify-center items-center">
                Organization
              </th>
              <th className="w-[20%] h-full flex justify-center items-center">
                Purok
              </th>
              <th className="w-[20%] h-full flex justify-center items-center">
                Group
              </th>
              <th className="w-[20%] h-full flex justify-center items-center">
                Status
              </th>
              <th className="w-[20%] h-full flex justify-center items-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <div
              className="w-full h-[35rem] overflow-auto
            monitor_md:h-[18rem]
            "
            >
              {masterList_data?.map((data, index) => {
                return (
                  <>
                    <tr
                      className="w-full h-[10%] flex justify-between items-center text-center shadow-md border-[2px] border-gray-300
              monitor_md:h-[13.5%] 
              monitor_md:text-[14px] 

              monitor_xxl:h-[16%] 
              "
                    >
                      <td className="w-[20%] h-[3.5rem] flex justify-center items-center">
                        {index + 1}
                      </td>
                      <td1 className="w-[20%] h-[3.5rem] flex justify-center items-center">
                        {data.firstname}
                      </td1>
                      <td className="w-[20%] h-[3.5rem] flex justify-center items-center">
                        {data.middlename}
                      </td>
                      <td className="w-[20%] h-[3.5rem] flex justify-center items-center">
                        {data.lastname}
                      </td>
                      <td className="w-[20%] h-[3.5rem] flex justify-center items-center">
                        {data.gender}
                      </td>
                      <td className="w-[20%] h-[3.5rem] flex justify-center items-center">
                        {data.birthday}
                      </td>
                      <td className="w-[20%] h-[3.5rem] flex justify-center items-center">
                        {data.address}
                      </td>
                      <td className="w-[20%] h-[3.5rem] flex justify-center items-center">
                        {data.kapisanan}
                      </td>
                      <td className="w-[20%] h-[3.5rem] flex justify-center items-center">
                        {data.purok}
                      </td>
                      <td className="w-[20%] h-[3.5rem] flex justify-center items-center">
                        {data.group}
                      </td>
                      <td className="w-[20%] h-[3.5rem] flex justify-center items-center">
                        {data.status}
                      </td>
                      <td className="w-[20%] h-[3.5rem] flex justify-center items-center">
                        <div className="w-full h-full flex justify-center items-center">
                          <button
                            onClick={() =>
                              setUpdate_MasterList_Modal({
                                ...update_masterList_Modal,
                                id: data.id,
                                activator: true,
                              })
                            }
                            className="mr-10 h-[2.5rem] w-[2.5rem] transition-all ease-in-out duration-100 hover:rounded-full hover:border-[2px] hover:border-black flex justify-center items-center
                     monitor_md:h-[1.8rem]
                     monitor_md:w-[1.8rem]
                     monitor_md:hover:border-[1px]
                    "
                          >
                            <FaEye
                              className="text-[20px]
                      monitor_md:text-[16px]
                      "
                              color="#ffc93c"
                            />
                          </button>
                          <button
                            className="h-[2.5rem] w-[2.5rem] transition-all ease-in-out duration-100 hover:rounded-full hover:border-[2px] hover:border-black flex justify-center items-center
                    monitor_md:h-[1.8rem]
                    monitor_md:w-[1.8rem]
                    monitor_md:hover:border-[1px]
                    "
                          >
                            <FaTrash
                              className="text-[20px]
                        monitor_md:text-[16px]
                      "
                              color="#dc2f2f"
                            />
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
      {masterList_Modal === true ? (
        <Create_MasterList
          setMasterList_Modal={setMasterList_Modal}
          setOrg_Data={setOrg_Data}
          org_data={org_data}
          setPurok_Data={setPurok_Data}
          purok_data={purok_data}
          setMasterList_Data={setMasterList_Data}
        />
      ) : (
        ""
      )}

      {update_masterList_Modal.activator === true ? (
        <Update_MasterList
          setUpdate_MasterList_Modal={setUpdate_MasterList_Modal}
          update_masterList_Modal={update_masterList_Modal}
          setOrg_Data={setOrg_Data}
          org_data={org_data}
          setPurok_Data={setPurok_Data}
          purok_data={purok_data}
          setTransfer_Data={setTransfer_Data}
          transfer_data={transfer_data}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Masterlist_Content;
