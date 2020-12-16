import React from 'react';
import './Category.css'

function Category({category}){
  return (
    <p className="category" onClick={()=>console.log(category)}>{category}</p>
  )
}

export default Category;