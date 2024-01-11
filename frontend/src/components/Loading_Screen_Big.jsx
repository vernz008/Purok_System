import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading_Screen_Big = () => {
  return (
    <div className="absolute top-0 left-0 bg-black/50 w-full h-full">
      <div className="flex justify-center items-center h-full w-full">
        <AiOutlineLoading3Quarters
          className="animate-spin"
          color="white"
          size={100}
        />
      </div>
    </div>
  );
};

export default Loading_Screen_Big;
