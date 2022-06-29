import React from 'react'
import { useNavigate } from "react-router-dom";

import "../App.css";

import { GiFarmer, GiCow } from "react-icons/gi";




function Homepage () {

  const navigate = useNavigate();
  const navigateToLogin = () => {
    // 👇️ navigate to /contacts
    navigate('/login');
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>
          <GiFarmer fontSize="120px"/>
          <hr />
          Welcome To Farm Management App
          <hr />
          Care About Your Animals
          <hr />
          <GiCow fontSize="120px"/>
        </h1>
        <button 
        className="App-button"
        onClick={navigateToLogin}
        >
          Let's Start
        </button>
      </div>
    </div>
  )
}

export default Homepage