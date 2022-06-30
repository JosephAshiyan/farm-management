import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

import "../App.css";

import { GiCow } from "react-icons/gi";

function Dashboard() {
  const navigate = useNavigate();

  function handleClick (key) {
    switch (key) {
        case "navigateToBeefCattle":
            navigate("/beefPage");
            break;
        case "navigateToDairyCattle":
            navigate("/dairyPage");
            break;
        case "navigateToGoatBarn":
            navigate("/goatPage");
            break;
        case "navigateToSheepBarn":
            navigate("/sheepPage");
            break;
        case "navigateToHorseStable":
            navigate("/horsePage");
            break;
        case "navigateToPoultry":
            navigate("/poultryPage");
            break;
        default:
            navigate("/dashboard");
            break;
    }
  }
  function handleHomePage (){
          return navigate("/")
  }


  const barnsList= {
   navigateToBeefCattle: "Beef Cattle Barn" ,
   navigateToDairyCattle: "Dairy Cattle Barn",
   navigateToGoatBarn: "Goat Barn",
   navigateToSheepBarn: "Sheep Barn",
   navigateToHorseStable: "Horse Stable",
   navigateToPoultry: "Poultry",
  }

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
        <h1>
          <GiCow 
          fontSize="8vw"
          onClick={handleHomePage}
          style={{ cursor: "pointer" }}></GiCow>
          <hr />
          Welcome To Farm Management Dashboard
          <hr />
          <hr />
          Select A Barn
          <hr />
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
            {Object.entries(barnsList).map(([key, value]) =>(
                <ul
                key= {key} 
                onClick={()=>handleClick(key)}
                style={{ cursor: "pointer" }}>
                    {value}
                    </ul>
            ))}
        </div>
      </Box>
    </div>
  );
}

export default Dashboard;
