import React,{createContext, createElement} from 'react'
import { useState } from 'react';

export const cartContext = createContext();

const CartContext = ({children}) => {
    const [itemcount,setItemCount] = useState(0);
  return (
    <cartContext.Provider value={{itemcount,setItemCount}}>

        {children}
    </cartContext.Provider>
  )
}

export default CartContext