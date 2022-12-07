import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/style.css'




export default function Citybox(){
  const [leftBoxData, setLeftBoxData] = useState();
  const [rightBoxData, seRightBoxData] = useState();
  const [items, setItems] = useState('')
  const [cities, setCities] = useState('');
  const [data, setData] = useState('');

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

  function displayScores(scoreData) {
    console.log('in display scores', scoreData);
    let arr = [];
    console.log('categories', scoreData.categories);
    for (let i = 0; i < scoreData.categories.length; i++) {
      arr.push(
      <div className="scoreContainer" key={'scoreContainerKey' + i}>
      <p className="scoreLabel" key={'Labelkey' + i}>{scoreData.categories[i].name}</p>
      <p className='scores' key={'Scorekey' + i}>{Math.floor(scoreData.categories[i].score_out_of_10)}</p>
      </div>
      )
    }
    console.log('ARR', arr);
    setData(arr);
    console.log('DATA', data)
    return;
  }

  function submitButtonClick() {
    const input = document.getElementById('myInput');
    const newCity = input.value.replaceAll(' ', '-').toLowerCase();
    axios({
    method: 'post',
    url: '/getDetails',
    data: {
      city: newCity,
    }})
    .then(res => {
    console.log('RES', res);
    // setData(res.data);
    displayScores(res.data);
    input.value = '';
  })
  .catch(function (error) {
     console.log('Error here:', error);
  })
  }
  
  return(
    <div className="container">
        <div id="cityBoxSearch">
            <div className="autoComplete">
            <h3>Enter City: </h3>
            <input onChange={(e) => handleChange(e)} id="myInput" type="text" name="myCity" placeholder="city"></input>
            </div>
            <input type="submit" onClick={(e) => submitButtonClick(e)}></input>
        <div className="autoComplete-list">{items}</div>
        </div>
      <div id='dataState'>
          {data}
      </div>
     
    </div>
    
      
  )
  }