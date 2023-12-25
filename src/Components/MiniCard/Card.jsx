import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import CartCard from '../CartCard/CartCard';
import { useContext } from 'react';
import { cartContext } from '../../ContextProvider/CartContext';

const BASE_URL = "https://cdn.sanity.io/images/tbe7nf8h/production/"
const Card = ({ id, title, price,image }) => {

  const { bag,setBag} = useContext(cartContext);
  const url = image?.asset?._ref?.split("-");
  const source = BASE_URL + url[1] + '-' + url[2] + '.' + url[3];
  useEffect(()=>{
    localStorage.setItem("bag",JSON.stringify(bag));
  },[bag])
  return (
    <div className='disinfectant-card'>
      <LazyLoadImage src={source} width={120} height={120} alt='product' effect='blur' wrapperProps={{
        style: { transitionDelay: "1s" },
      }} />
      <div className='disinfectant-card-content-wrapper'>
        <div className='card-content-wrapper'>
          <div style={{ fontSize: "20px", fontWeight: "500" }}>{title}</div>
          <div className="price-label" style={{ fontSize: "20px", fontWeight: "400" }}>
            Rs.{price}
          </div>
        </div>
        <div className="card-button-wrapper">
          <div className='addtocart-button'>
            <button className='buy-now' onClick={()=>{
              setBag([...bag,{id,title,price,image}])
            }}>Add to Cart</button>
            <button className='buy-now'>Buy Now</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;