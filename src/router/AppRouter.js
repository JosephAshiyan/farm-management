import React,  {useContext} from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Login from "../pages/Login/Login";

import { AuthContext } from "../context/AuthContext";

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