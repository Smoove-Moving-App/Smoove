import React, { Component } from 'react';
import axios from 'axios';
import { useEffect } from 'react'

export default function App() {
  function handleClick(e) {
    fetch('http://localhost:3000/')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
  }

  return(
    <div><button onClick={(e) => handleClick(e)}>Click me!</button></div>
  )
}


