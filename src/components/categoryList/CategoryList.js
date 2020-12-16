import React from 'react';

function CategoryList({categories}){
  const categoryList = categories.map((category, index)=>{
    return  <p key={index}>{category}</p>
  })
  return categoryList;
}

export default CategoryList;