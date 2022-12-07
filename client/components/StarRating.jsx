import React from 'react'
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRating(props) {
  const [color, setColor] = useState('e4e5e9');
  const [favor, setFavor] = useState(false)

  //TODO: setup fetch request to store user's favorite city
  function saveFavorite(data) {
    if(!favor){
    console.log(data.data.scores);
    setFavor(true)
    setColor('orange');
    } else {
      setFavor(false);
      setColor('e4e5e9')
    }
  }
  
  return (
    <div>
      <FaStar style={{color: color}} className="star" size={25} onClick={() => saveFavorite(props)} />
    </div>
  )
}