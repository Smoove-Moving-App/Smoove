import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


export default function Navbar(){
  const [user, setUser] = useState('');

  return(
    <div className="navbar">
      <div className="buttonsContainer">
        <div className="buttonContainerLeft">
          <Link to="/"><button className="navButtons">Home</button></Link>
        </div>
        <p>Welcome {user}!</p>
        <div className="buttonContainerRight">
          <Link to="/login"><button className="navButtons">Login</button></Link>
          <Link to="/signup"><button className="navButtons">Sign up</button></Link>
        </div>
      </div>
    </div>
  )
}