import React from 'react';
import Category from '../category/Category';

function Categories({categories}){
  return categories.map((category, index)=>{
    return  (
      <div className="categories">
    <Category key={index} category={category} className="category"/>
    </div>
    )
  });
}

export default Categories;