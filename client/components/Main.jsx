import React from 'react'
import Citybox from './Citybox.jsx'

export default function Main(){
  // Rendering Citybox components w/ unique id attr to uniquely select the correct input in Citybox
    return(
      <div className="mainPageContainer">
       <Citybox id="left" /> 
       <Citybox id="right" />
      </div>
    )
}