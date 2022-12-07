import React from 'react'
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRating(props) {
  const [color, setColor] = useState('e4e5e9');

  //TODO: setup fetch request to store user's favorite city
  function saveFavorite(data) {
    console.log(data.data.scores);
    setColor('orange');
  }
  
  return (
    <div>
      <FaStar style={{color: color}} className="star" size={25} onClick={() => saveFavorite(props)} />
    </div>
  )
}