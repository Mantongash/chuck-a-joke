import React from 'react';
import './Category.css'

function Category({category, handleClickCategory, id}){
  return (
    <p className="category" onClick={()=>handleClickCategory(category, id)}>{category}</p>
  )
}

export default Category;