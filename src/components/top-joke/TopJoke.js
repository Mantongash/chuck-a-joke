import React from 'react';
import quote from './images/quote.png';
import './TopJoke.css'

function TopQuote({joke}){
  return (
    <div className="randomJoke">
    <div className="quotedJoke">
    <div className="quotation"></div>
    <p className="joke">{joke}</p>
    </div>
    </div>
  )
}

export default TopQuote;