import React from 'react';
import './TopJoke.css'

function TopQuote({quote}){
  return (
    <div className="randomJoke">
    <p className="quotation">"</p>
    <p>{quote}</p>
    </div>
  )
}

export default TopQuote;