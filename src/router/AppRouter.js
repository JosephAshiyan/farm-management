import React,  {useContext} from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Login from "../pages/Login/Login";
import { AuthContext } from "../context/AuthContext";

const {currentUser} = useContext(AuthContext)

const RequireAuth = ({ children }) => {
  return currentUser ? children : <Navigate to="/login" />;
};


function AppRouter() {
  return (
      <Routes>
        <Route path="/" >
        <Route path="login" element={<Login />} />
        <Route path="home" element={
                <RequireAuth>
                  <Homepage />
                </RequireAuth>
              } />
        <Route path="about" element={
                <RequireAuth>
                  <About />
                </RequireAuth>
              } />
        {/* <Route path="/auth" element={<SignUp />} /> */}
        </Route>
      </Routes>
  
  );
}
export default AppRouter