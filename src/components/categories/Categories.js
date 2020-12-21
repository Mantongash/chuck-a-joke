import React from 'react';
import Category from '../category/Category';

function Categories({categories, handleClickCategory, jokes, id}){
  return categories.map((category, index)=>{
    return (
    <Category key={index} category={category} className="category" handleClickCategory={handleClickCategory} jokes={jokes} tabIndex={index} id={index}/>
    )
  });
}

export default Categories;