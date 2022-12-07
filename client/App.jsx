import React, { Component } from 'react';
import axios from 'axios';
import { useEffect } from 'react'
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Main from './components/Main.jsx'

export default function App() {
  function handleClick(e) {
    fetch('http://localhost:3000/')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
  }

  return(
      <div>
        <Signup />
        <Login />
       <Main />
      </div>
  )
}


