import React, { useState } from "react";
import Sidebar from "../../components/admin/sidebar/Sidebar";
import Masterlist_Content from "../../components/admin/content/Masterlist_Content";

const Masterlist_Page = () => {
  const [sidebar_toggle, setSidebar_Toggle] = useState(false);
  const [tabs_pages, setTab_Pages] = useState(0);
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
          />
        </div>
        <div
          className={` ${
            sidebar_toggle === false
              ? "w-full flex justify-center items-center"
              : "w-[96%] flex justify-center items-center"
          }`}
        >
          <Masterlist_Content />
        </div>
      </div>
    </section>
  );
};

export default Masterlist_Page;
