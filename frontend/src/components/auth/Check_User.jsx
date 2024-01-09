import React, { useEffect, useState } from "react";
import axiosClient from "../../utils/axios/axios-client";
import { API_USER } from "../../utils/urls/api_url";
import { useNavigate } from "react-router-dom";

const Check_User = () => {
  const navigate = useNavigate();
  const [user_data, setUserData] = useState([]);

  useEffect(() => {
    axiosClient
      .get(API_USER)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        error.request.status === 401 ? navigate("/register") : "";
      });
  }, []);

  return <></>;
};

export default Check_User;
