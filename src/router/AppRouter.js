import React,  {useContext} from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Login from "../pages/Login/Login";
import BeefPage from "../pages/Barns/BeefCattle/BeefPage";


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
        <Route path="/beefPage" element={<BeefPage /> } />
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