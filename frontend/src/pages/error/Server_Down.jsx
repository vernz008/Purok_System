import React from "react";
import ServerDownImG from "../../assets/images/500 Internal Server Error-cuate.png";
const Server_Down = () => {
  return (
    <div className="w-screen h-screen object-cover overflow-hidden flex justify-center items-center">
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={ServerDownImG}
          alt=""
          className="
        monitor_md:w-[55%] 
        monitor_md:h-[95%]
        "
        />
      </div>
    </div>
  );
};

export default Server_Down;
