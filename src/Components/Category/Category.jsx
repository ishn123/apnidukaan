import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import "./category.css"
import { useContext } from 'react';
import { cartContext } from '../../ContextProvider/CartContext';
import Card from '../MiniCard/Card';

const Category = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const {state,itemcount} = useContext(cartContext);
  
  const arr= state?.categories.filter((val)=>{
    return val?.title == params.get("category").split(" ").join("").toLowerCase();
  })
  
  return (
    <div>
      <div className="disinfectant-card-wrapper">
        {arr[0]?.category.map((e,i)=>{
          return <Card key={i} id={e?._key} title={e?.title} price={e?.price} image={e?.image}></Card>;
        })}
      </div>
    </div>
  )
}

export default Category