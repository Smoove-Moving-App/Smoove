import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/style.css'


//TODO: implement type in functionality
// export default function Citybox(){
// const [leftBoxData, setLeftBoxData] = useState();
// const [rightBoxData, seRightBoxData] = useState();
// const cities = ['Atlanta', 'New York', 'Chicago', 'Omaha', 'Albequrque', 'New Orleans', 'Charleton']

// // function autoComplete(input, arr) {

// // }

// function handleChange(e){
//   console.log('this is synthetic event', e.target.value)
  
// }

// return(
  
//     <div id="CityBoxContainer">
//       <form autoComplete="off">
//         <div className="autoComplete">
//           <input onChange={(e) => handleChange(e)} id="myInput" type="text" name="myCity" placeholder="city"></input>
//         </div>
//         <input type="submit"></input>
//       </form>
//     </div>
  
// )
// }


export default function Citybox(){
const [leftBoxData, setLeftBoxData] = useState();
const [rightBoxData, seRightBoxData] = useState();

useEffect(() => {
  console.log('inside use effect')
  axios.get('https://api.teleport.org/api/cities/')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

}, [])

return(
  <div className="menuDiv">
  <select className="dropDownMenu" multiple size="4" >
    <option value="amaranth">amaranth</option>
    <option value="cauliflower">cauliflower</option>
    <option value="blueberry">blueberry</option>
    <option value="shorts">shorts</option>
    <option value="potato">potato</option>
    <option value="cranberries">cranberries</option>
    <option value="kale">kale</option>
    <option value="melon">melon</option>
  </select>
</div>
)
}