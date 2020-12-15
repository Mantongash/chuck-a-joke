import React from 'react';
import './TopQuote.css'

function TopQuote({quote}){
  return (
    <div className="randomJoke">
    <p>{quote}</p>
    </div>
  )
}

export default TopQuote;