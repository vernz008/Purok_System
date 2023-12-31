import React from "react";
import { Routes, Route } from "react-router-dom";
import Login_page from "./pages/login/Login_page";
import Admin_Dashboard from "./pages/admin/Admin_Dashboard";
const App = () => {
  return (
    <>
      <section>
        <div>
          <Routes>
            <Route path="/" element={<Login_page />} />
            <Route path="/1" element={<Admin_Dashboard />} />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default App;
