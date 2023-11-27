import React from 'react'
import { useLocation } from 'react-router-dom'

const Category = () => {
    const location = useLocation();
    console.log(location.search);
  return (
    <div>Category</div>
  )
}

export default Category