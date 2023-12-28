import React, { useState } from "react";
import MasterlList_Sidebar from "../../components/admin/sidebar/MasterlList_Sidebar";

const Masterlist_Page = () => {
  const [sidebar_toggle, setSidebar_Toggle] = useState(false);
  return (
    <section className="h-screen w-screen">
      <div className="w-full h-full flex">
        <div
          className={`transform transition-all duration-300 ease-in-out ${
            sidebar_toggle === false ? "w-[4%]" : "w-[15%]"
          }`}
        >
          <MasterlList_Sidebar
            setSidebar_Toggle={setSidebar_Toggle}
            sidebar_toggle={sidebar_toggle}
          />
        </div>
        <div className={`w-[96%] ${sidebar_toggle === false ? "w-full" : ""}`}>
          Right
        </div>
      </div>
    </section>
  );
};

export default Masterlist_Page;
