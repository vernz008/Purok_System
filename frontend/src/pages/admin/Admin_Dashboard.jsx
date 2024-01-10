import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/sidebar/Sidebar";
import Masterlist_Content from "../../components/admin/content/Masterlist_Content";
import Assignments_Content from "../../components/admin/content/Assignments_Content";
import {
  API_GROUP,
  API_ORGANIZATION,
  API_PUROK,
} from "../../utils/urls/api_url";
import axiosClient from "../../utils/axios/axios-client";
import { useDispatch, useSelector } from "react-redux";
import {
  check_group,
  check_origanization,
  check_purok,
  reset_assignment,
} from "../../utils/redux/assignment/assignmentSlice";

const Admin_Dashboard = () => {
  const dispatch = useDispatch();
  const {
    is_purokSuccess,
    is_purokLoading,
    is_purokError,
    purok_response,
    is_organizationSuccess,
    is_organizationLoading,
    is_organizationError,
    organiaztion_response,
    is_groupSuccess,
    is_groupLoading,
    is_groupError,
    group_response,
  } = useSelector((state) => state.Assignment);
  const [sidebar_toggle, setSidebar_Toggle] = useState(false);
  const [tabs_pages, setTab_Pages] = useState(0);
  const [purok_data, setPurok_Data] = useState([]);
  const [organization_data, setOrganization_Data] = useState([]);
  const [group_data, setGroup_Data] = useState([]);
  const [sidebar_buttons, setSidebar_Buttons] = useState({
    assignments: false,
    masterlist: true,
  });
  const [purok_count, setPurok_Count] = useState(0);
  const [org_count, setOrg_Count] = useState(0);
  const [group_count, setGroup_Count] = useState(0);

  // useEffect(() => {
  //   if (
  //     purok_response?.data?.length > 0 &&
  //     organiaztion_response?.data?.length > 0 &&
  //     group_response?.data?.length > 0
  //   ) {
  //     setSidebar_Buttons({ ...sidebar_buttons, masterlist: false });
  //   }
  //   dispatch(check_purok());
  // }, []);

  // useEffect(() => {
  //   if (
  //     purok_response?.data?.length > 0 &&
  //     organiaztion_response?.data?.length > 0 &&
  //     group_response?.data?.length > 0
  //   ) {
  //     setSidebar_Buttons({ ...sidebar_buttons, masterlist: false });
  //   }
  //   dispatch(reset_assignment());
  // }, [
  //   is_purokSuccess,
  //   is_purokLoading,
  //   is_purokError,
  //   purok_response,
  //   is_organizationSuccess,
  //   is_organizationLoading,
  //   is_organizationError,
  //   organiaztion_response,
  //   is_groupSuccess,
  //   is_groupLoading,
  //   is_groupError,
  //   group_response,
  // ]);

  useEffect(() => {
    axiosClient
      .get(API_PUROK)
      .then((res) => {
        setPurok_Data(res.data);
        setPurok_Count(res.data.length);
      })
      .catch((error) => {
        console.log(error);
      });

    axiosClient
      .get(API_ORGANIZATION)
      .then((res) => {
        setOrganization_Data(res.data);
        setOrg_Count(res.data.length);
      })
      .catch((error) => {
        console.log(error);
      });

    axiosClient
      .get(API_GROUP)
      .then((res) => {
        setGroup_Data(res.data);
        setGroup_Count(res.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [purok_count, org_count, group_count]);

  return (
    <section className="h-screen w-screen bg-[#f4f3f3] overflow-hidden">
      <div className="w-full h-full flex">
        <div
          className={`transform transition-all duration-300 ease-in-out ${
            sidebar_toggle === false ? "w-[4%]" : "w-[15%]"
          }`}
        >
          <Sidebar
            setSidebar_Toggle={setSidebar_Toggle}
            sidebar_toggle={sidebar_toggle}
            setTab_Pages={setTab_Pages}
            purok_data={purok_data}
            setPurok_Data={setPurok_Data}
            organization_data={organization_data}
            setOrganization_Data={setOrganization_Data}
            group_data={group_data}
            setGroup_Data={setGroup_Data}
            sidebar_buttons={sidebar_buttons}
            setSidebar_Buttons={setSidebar_Buttons}
          />
        </div>
        <div
          className={` ${
            sidebar_toggle === false
              ? "w-full flex justify-center items-center"
              : "w-[96%] flex justify-center items-center"
          }`}
        >
          {tabs_pages === 1 ? (
            <Assignments_Content
              purok_data={purok_data}
              setPurok_Data={setPurok_Data}
              organization_data={organization_data}
              setOrganization_Data={setOrganization_Data}
              group_data={group_data}
              setGroup_Data={setGroup_Data}
              sidebar_buttons={sidebar_buttons}
              setSidebar_Buttons={setSidebar_Buttons}
              setPurok_Count={setPurok_Count}
              purok_count={purok_count}
              setOrg_Count={setOrg_Count}
              org_count={org_count}
              setGroup_Count={setGroup_Count}
              group_count={group_count}
            />
          ) : tabs_pages === 2 ? (
            <Masterlist_Content
              purok_data={purok_data}
              setPurok_Data={setPurok_Data}
              organization_data={organization_data}
              setOrganization_Data={setOrganization_Data}
              group_data={group_data}
              setGroup_Data={setGroup_Data}
              sidebar_buttons={sidebar_buttons}
              setSidebar_Buttons={setSidebar_Buttons}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Admin_Dashboard;
