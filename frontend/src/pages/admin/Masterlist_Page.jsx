import React from "react";
import MasterlList_Sidebar from "../../components/admin/sidebar/MasterlList_Sidebar";

const Masterlist_Page = () => {
  return (
    <section className="h-screen w-screen">
      <div className="w-full h-full flex">
        <div className="w-[15%]">
          <MasterlList_Sidebar />
        </div>
        <div className="w-[85%]">Right</div>
      </div>
    </section>
  );
};

export default Masterlist_Page;
