import React from 'react';
import './Category.css'

function Category({category, handleClickCategory, jokes}){
  return (
    <p className="category" onClick={()=>handleClickCategory(category)}>{category}</p>
  )
}

export default Category;