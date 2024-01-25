import React, { useEffect } from "react";
import ServerDownImG from "../../assets/images/500 Internal Server Error-cuate.png";
import axiosClient from "../../utils/axios/axios-client";
import { API_USER } from "../../utils/urls/api_url";
import { useNavigate } from "react-router-dom";
const Server_Down = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      axiosClient
        .get(API_USER)
        .then((res) => {
          console.log(res.status);
          const response_status = res.status;
          if (response_status != 500) {
            navigate("/");
          }
        })
        .catch((error) => {
          console.log(error.response.status);
          const response_status = error.response.status;
          if (response_status != 500) {
            navigate("/");
          }
        });
    }, 10000);

    return () => clearInterval(interval);
  }, []);
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
