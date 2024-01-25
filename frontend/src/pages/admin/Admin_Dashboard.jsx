import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/sidebar/Sidebar";
import Masterlist_Content from "../../components/admin/content/Masterlist_Content";
import Assignments_Content from "../../components/admin/content/Assignments_Content";
import {
  API_GROUP,
  API_MEMBER,
  API_ORGANIZATION,
  API_PUROK,
  API_USER,
} from "../../utils/urls/api_url";
import axiosClient from "../../utils/axios/axios-client";
import Loading_Screen_Big from "../../components/Loading_Screen_Big";
import Attendance_Content from "../../components/admin/content/Attendance_Content";

const Admin_Dashboard = () => {
  const [sidebar_toggle, setSidebar_Toggle] = useState(false);
  const [loading_screen, setLoading_Screen] = useState(true); // need to fix this logic
  const [loading_data, setLoading_Data] = useState(true);
  const [tabs_pages, setTab_Pages] = useState(0);
  const [purok_data, setPurok_Data] = useState([]);
  const [masterList_data, setMasterList_Data] = useState([]);
  const [organization_data, setOrganization_Data] = useState([]);
  const [group_data, setGroup_Data] = useState([]);
  const [sidebar_buttons, setSidebar_Buttons] = useState({
    assignments: false,
    masterlist: true,
  });
  const [purok_count, setPurok_Count] = useState(0);
  const [org_count, setOrg_Count] = useState(0);
  const [group_count, setGroup_Count] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axiosClient
      .get(API_PUROK)
      .then((res) => {
        setPurok_Data(res.data);
        setPurok_Count(res.data.length);
      })
      .catch((error) => {
        const Auth = error.response.statusText;
        if (Auth === "Unauthorized") {
          navigate("/");
        }
      });

    axiosClient
      .get(API_ORGANIZATION)
      .then((res) => {
        setOrganization_Data(res.data);
        setOrg_Count(res.data.length);
      })
      .catch((error) => {
        const Auth = error.response.statusText;
        if (Auth === "Unauthorized") {
          navigate("/");
        }
      });

    axiosClient
      .get(API_GROUP)
      .then((res) => {
        setGroup_Data(res.data);
        setGroup_Count(res.data.length);
      })
      .catch((error) => {
        const Auth = error.response.statusText;
        if (Auth === "Unauthorized") {
          navigate("/");
        }
      });

    if (purok_count > 0 && org_count > 0 && group_count > 0) {
      setSidebar_Buttons({ ...sidebar_buttons, masterlist: false });
    } else {
      setSidebar_Buttons({ ...sidebar_buttons, masterlist: true });
    }

    if (sidebar_buttons.masterlist === false) {
      setLoading_Screen(false);
    }

    if (purok_count == 0 && org_count == 0 && group_count == 0) {
      setLoading_Screen(false);
    }

    axiosClient
      .get(API_MEMBER)
      .then((res) => {
        setMasterList_Data(res.data);
      })
      .catch((error) => {
        const Auth = error.response.statusText;
        if (Auth === "Unauthorized") {
          navigate("/");
        }
      });

    axiosClient
      .get(API_USER)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        const Auth = error.response.statusText;
        if (Auth === "Unauthorized") {
          navigate("/");
        }
      });
  }, [purok_count, org_count, group_count, sidebar_buttons.masterlist]);

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
            org_count={org_count}
            group_count={group_count}
            purok_count={purok_count}
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
              setMasterList_Data={setMasterList_Data}
              masterList_data={masterList_data}
              setLoading_Data={setLoading_Data}
              loading_data={loading_data}
            />
          ) : tabs_pages === 3 ? (
            <Attendance_Content />
          ) : (
            ""
          )}
        </div>
      </div>
      {loading_screen === true ? <Loading_Screen_Big /> : ""}
    </section>
  );
};

export default Admin_Dashboard;
