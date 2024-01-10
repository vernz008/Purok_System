import React from "react";
import { Routes, Route } from "react-router-dom";
import Login_page from "./pages/login/Login_page";
import Admin_Dashboard from "./pages/admin/Admin_Dashboard";
import Register_Admin from "./pages/admin/Register_Admin";
import User_Dashboard from "./pages/user/User_Dashboard";
const App = () => {
  return (
    <>
      <section>
        <div>
          <Routes>
            <Route path="/" element={<Login_page />} />
            <Route path="/admin-dashboard" element={<Admin_Dashboard />} />
            <Route path="/register" element={<Register_Admin />} />
            <Route path="/user-dashboard" element={<User_Dashboard />} />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default App;
