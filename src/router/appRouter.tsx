import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "../pages/homepage";
import About from "../pages/about";


function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        {/* <Route path="/auth" element={<SignUp />} /> */}
      </Routes>
  
  );
}
export default AppRouter