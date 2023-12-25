import React, { createContext, useEffect, useReducer } from 'react'
import { useState } from 'react';
import { cartReducer } from '../reducers/cartreducer';
import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "tbe7nf8h",
    dataset: "production",
    useCdn: false,
    apiVersion: "v2022-03-07",
    token: "skmVqPLTjbFiIvm5mHJOmVjOZPWt2UQ7G3ijS2qQHrYLZ0SH66WWa887r1lS8RRCRiGkB15MpHm8wHu0Bmyw8Gk7sLJGVHVIwzjSOOBqy56H5C2Id1w1yYwLPx7ovRexNIJrkk6P7Ge8cJzRkXBRDIuYjCaDFGr15wcb1cBEpSRvm3XzGqth"
  });
  
export const cartContext = createContext();


const CartContext = ({ children }) => {

  const [bag, setBag] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [state,dispatch] = useReducer(cartReducer,{
    categories:[]
  })
  const fetchData = async()=>{

    const data = await client.fetch("*[_type=='productdoc']");
    
    dispatch({type:"FetchData",payload:{data}});

  }
  useEffect(()=>{
    fetchData();
    if(localStorage.getItem("bag")){
      setBag(JSON.parse(localStorage.getItem("bag")));
    }
  },[])
  
  return (
    <cartContext.Provider value={{ bag,setBag,currentItems, setCurrentItems, state,dispatch }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartContext