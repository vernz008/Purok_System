import React from "react";
import { Routes, Route } from "react-router-dom";
import Login_page from "./pages/login/Login_page";
import Masterlist_Page from "./pages/admin/Masterlist_Page";
const App = () => {
  return (
    <>
      <section>
        <div>
          <Routes>
            <Route path="/" element={<Login_page />} />
            <Route path="/1" element={<Masterlist_Page />} />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default App;
