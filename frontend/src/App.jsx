import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login_page from "./pages/login/Login_page";
import Admin_Dashboard from "./pages/admin/Admin_Dashboard";
import Register_Admin from "./pages/admin/Register_Admin";
import User_Dashboard from "./pages/user/User_Dashboard";
import Server_Down from "./pages/error/Server_Down";
import axiosClient from "./utils/axios/axios-client";
import { API_USER } from "./utils/urls/api_url";
import UserProfile_Page from "./pages/UserProfile_Page";
const App = () => {
  const navigate = useNavigate();
  useState(() => {
    axiosClient
      .get(API_USER)
      .then((res) => {})
      .catch((error) => {
        const response_status = error.response.status;

        if (response_status === 401) {
          navigate("/register");
        } else if (response_status === 500) {
          navigate("/error-500");
        }
      });

    const interval = setInterval(() => {
      axiosClient
        .get(API_USER)
        .then((res) => {})
        .catch((error) => {
          const response_status = error.response.status;

          if (response_status === 401) {
            navigate("/register");
          } else if (response_status === 500) {
            navigate("/error-500");
          }
        });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section>
        <div>
          <Routes>
            <Route path="/" element={<Login_page />} />
            <Route path="/admin-dashboard" element={<Admin_Dashboard />} />
            <Route path="/register" element={<Register_Admin />} />
            <Route path="/user-dashboard" element={<User_Dashboard />} />

            <Route
              path="/user-profile/:user_id"
              element={<UserProfile_Page />}
            />

            <Route path="/error-500" element={<Server_Down />} />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default App;
