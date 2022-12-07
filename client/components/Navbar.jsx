import React, { useState, useEffect } from 'react';


export default function Navbar(){
  const [user, setUser] = useState('');

  return(
    <div className="navbar">
      <div className="buttonsContainer">
        <div className="buttonContainerLeft">
          <button className="navButtons">Home</button>
        </div>
        <p>Welcome {user}!</p>
        <div className="buttonContainerRight">
          <button className="navButtons">Login</button>
          <button className="navButtons">Sign up</button>
        </div>
      </div>
    </div>
  )
}