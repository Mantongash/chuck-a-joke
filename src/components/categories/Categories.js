import React from 'react';
import Category from '../category/Category';

function Categories({categories}){
  return categories.map((category, index)=>{
    return (
    <Category key={index} category={category} className="category"/>
    )
  });
}

export default Categories;