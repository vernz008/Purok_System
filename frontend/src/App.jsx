import React from "react";
import { Routes, Route } from "react-router-dom";
import Login_page from "./pages/login/Login_page";
import Admin_Dashboard from "./pages/admin/Admin_Dashboard";
import Register_Admin from "./pages/admin/Register_Admin";
const App = () => {
  return (
    <>
      <section>
        <div>
          <Routes>
            <Route path="/" element={<Login_page />} />
            <Route path="/admin-dashboard" element={<Admin_Dashboard />} />
            <Route path="/register" element={<Register_Admin />} />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default App;
