import React, { useContext } from 'react'
import { cartContext } from '../ContextProvider/CartContext'
import Card from "../Components/MiniCard/Card"
import "./pages.css"

const HairCare = () => {
  const { state } = useContext(cartContext);
  const arr = state?.categories.filter((item) => {
    return item?.title == "haircare"
  });

  return (
    <div className='food-items-wrapper'>
      {arr[0]?.category.map((e, i) => {
      return <Card key={i} id={e?._key} title={e?.title} price={e?.price} image={e?.image}></Card>;
    })}
    </div>
  )
}

export default HairCare