import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/style.css'




export default function Citybox(){
  const [leftBoxData, setLeftBoxData] = useState();
  const [rightBoxData, seRightBoxData] = useState();
  const [items, setItems] = useState('')
  const [cities, setCities] = useState('');

  useEffect(() => {
  console.log('inside use effect')
  axios.get('https://api.teleport.org/api/urban_areas/')
  .then(function (response) {
    const urban = response.data._links['ua:item']
    const cityNames = urban.map(el => el.name)
    console.log(response)
    setCities(cityNames);
  })
  .catch(function (error) {
    console.log(error);
  })
}, [])
  
  function autoFill(e) {
    const input = document.getElementById("myInput")
    input.value = e.target.innerText;
    setItems('');
  }
  
  function handleChange(e){
    e.preventDefault();
    const currWord = e.target.value
    let arr = [];
    for (let i = 0; i < cities.length; i++) {
      const slicedCity = cities[i].slice(0, currWord.length);
      if (currWord.toLowerCase() === slicedCity.toLowerCase()) {
        arr.push(<li className='autoComplete-item' key={'key' + i} onClick={autoFill}>{cities[i]}</li>)
        setItems(arr)
      }
      if(currWord.length === 0){
        setItems('')
      } 
    }
  }

  function submitButtonClick() {
    const input = document.getElementById('myInput');
    const newCity = input.value.replaceAll(' ', '-').toLowerCase();
    console.log('DASH', newCity)
    axios.post(`https://localhost:3000/${newCity}`)
    .then(function (response) {
      console.log(response)
  })
  .catch(function (error) {
    console.log('Error here:', error);
  })
  }
  
  return(
      <div id="CityBoxContainer">
        <h3>Enter City: </h3>
        <div className="autoComplete">
          <input onChange={(e) => handleChange(e)} id="myInput" type="text" name="myCity" placeholder="city"></input>
        </div>
        <input type="submit" onClick={(e) => submitButtonClick(e)}></input>
        <div className="autoComplete-list">{items}</div>
      </div>
  )
  }