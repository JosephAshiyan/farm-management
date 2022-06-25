import React from 'react'
import { Link } from "react-router-dom";

import "../App.css";

import { GiFarmer, GiCow } from "react-icons/gi";

function handleClick (){
  
}

function Homepage () {
  return (
    <div className="App">
      <div className="App-header">
        <h1>
          <GiFarmer font-size="120px"/>
          <hr />
          Welcome To Farm Management App
          <hr />
          Care About Your Animals
          <hr />
          <GiCow font-size="120px"/>
        </h1>
        <button 
        className="App-button"
        onClick={handleClick}
        >
          Let's Start
        </button>
      </div>
    </div>
  )
}

export default Homepage