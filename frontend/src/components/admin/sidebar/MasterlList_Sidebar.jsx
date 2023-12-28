import React from "react";
import PurokLogoImg from "../../../assets/images/INC_logo_img.png";

const MasterlList_Sidebar = () => {
  return (
    <div className="w-full h-full flex flex-col border-r-[1px]">
      <div className="w-full flex justify-center items-center border-b-[2px] p-3">
        <img src={PurokLogoImg} alt="" className="h-auto w-[60%]" />
      </div>
      <div>Sort By</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
  );
};

export default MasterlList_Sidebar;
