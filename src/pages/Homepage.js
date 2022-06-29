import React from 'react'
import { Link, Navigate } from "react-router-dom";

import "../App.css";

import { GiFarmer, GiCow } from "react-icons/gi";

function handleClick (){
  return <Navigate to="/login" replace={true} />
}

function Homepage () {
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
        component= {Navigate}
        to="/login"
        className="App-button"
        // onClick={handleClick}
        >
          Let's Start
        </button>
        {/* <button>
        <Navigate to="/login" replace={true}> Let's Start</Navigate>
        </button> */}
      </div>
    </div>
  )
}

export default Homepage