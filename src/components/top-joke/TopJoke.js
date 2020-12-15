import React from 'react';
import './TopJoke.css'

function TopQuote({joke}){
  return (
    <div className="randomJoke">
    <p className="quotation">"</p>
    <p className="joke">{joke}</p>
    </div>
  )
}

export default TopQuote;