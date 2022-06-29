import React from "react";
// import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

import "../App.css";

import { GiCow } from "react-icons/gi";

function Dashboard() {
  //   const navigate = useNavigate();
  //   const navigateToLogin = () => {
  //     // 👇️ navigate to /contacts
  //     navigate('/login');
  //   };

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "black",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        //   justifyContent: "center",
          fontSize: "1.3vw",
          color: "white",
        }}
      >
        <h1 >
          <GiCow fontSize="8vw"/>
          <hr />
          Welcome To Farm Management Dashboard
          <hr />
          <hr />
          Select A Barn
          <hr />
        </h1>
      </Box>
    </div>
  );
}

export default Dashboard;
