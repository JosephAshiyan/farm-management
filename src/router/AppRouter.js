import React,  {useContext} from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Login from "../pages/Login/Login";
import BeefPage from "../pages/Barns/BeefCattle/BeefPage";
import DairyPage from "../pages/Barns/DairyCattle/DairyPage";
import GoatPage from "../pages/Barns/Goat/GoatPage";
import SheepPage from "../pages/Barns/Sheep/SheepPage";
import HorsePage from "../pages/Barns/Horse/HorsePage";
import PoultryPage from "../pages/Barns/Poultry/PoultryPage";
import Dashboard from "../pages/Dashboard";


function AppRouter() {

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage /> } />
        <Route path="/dashboard" element={<Dashboard /> } />
        <Route path="/beefPage" element={<BeefPage /> } />
        <Route path="/dairyPage" element={<DairyPage /> } />
        <Route path="/goatPage" element={<GoatPage /> } />
        <Route path="/sheepPage" element={<SheepPage /> } />
        <Route path="/horsePage" element={<HorsePage /> } />
        <Route path="/poultryPage" element={<PoultryPage /> } />
        <Route path="about" element={
                <RequireAuth>
                  <About />
                </RequireAuth>
              } />
        {/* <Route path="/auth" element={<SignUp />} /> */}
      </Routes>

      </BrowserRouter>
  
  );
}
export default AppRouter