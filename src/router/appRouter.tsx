import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";


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