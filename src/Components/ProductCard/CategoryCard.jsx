import React from 'react'
import "./card.css";
import { useNavigate } from 'react-router-dom';


const CategoryCard = ({title,img,about}) => {
   const navigate = useNavigate();
   const urlSearch = new URLSearchParams();
   
  return (

    <div className='product-card-wrapper' onClick={()=>{
      urlSearch.set("category",title);
      navigate({pathname:"/category",search:`?${urlSearch.toString()}`})
    }}>
        <div className="product-title product-item">
            {title}
        </div>
        <div className="featured-image product-item">
            <img src={img} width="120px" height="120px"alt='product'></img>
        </div>
        <div className="product-about product-item">
            {about}
        </div>
        
    </div>
  )
}

export default CategoryCard;