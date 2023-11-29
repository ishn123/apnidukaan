import React from 'react'
import "./card.css";
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
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
          <LazyLoadImage src={img} width={120} height={120} alt='product' effect='blur' wrapperProps={{
        style: {transitionDelay: "1s"},
    }}/>
        </div>
        <div className="product-about product-item">
            {about}
        </div>
        
    </div>
  )
}

export default CategoryCard;