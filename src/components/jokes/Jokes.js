import React from 'react';
import './Jokes.css'

function Jokes({jokes}){
  return (
    <p className="jokes">{jokes}</p>
  )
}

export default Jokes;