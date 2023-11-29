import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import "./category.css"
import dettol from "../../assets/dettol.webp"
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useContext } from 'react';
import { cartContext } from '../../ContextProvider/CartContext';
const Card=()=>{
  const [itemCount,setCurrentItemCount] = useState(0);
  const {itemcount:itemCartCount,setItemCount} = useContext(cartContext);
  return (
    <div className='disinfectant-card'>
    <LazyLoadImage src={dettol} width={120} height={120} alt='product' effect='blur' wrapperProps={{
      style: { transitionDelay: "1s" },
    }} />
    <div className='disinfectant-card-content-wrapper'>
      <div className='card-content-wrapper'>
        <div style={{fontSize:"30px",fontWeight:"700"}}>Dettol</div>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit</div>
      </div>
      <div className="card-button-wrapper">
        <div className='addtocart-button'>
        <div className='inc-dec-button' onClick={()=>{
          setCurrentItemCount(Math.max(itemCount-1,0))
          if(itemCount>0)
            setItemCount(itemCartCount-1)
        }}><RemoveIcon></RemoveIcon></div>
          <div className='value-show'>{itemCount}</div>
          <div className='inc-dec-button' onClick={()=>{
            setCurrentItemCount(itemCount+1)
            setItemCount(itemCartCount+1)

          }}><AddIcon></AddIcon></div>
        </div>
           <button className='buy-now'>Buy Now</button>
      </div>
    </div>
  </div>
  );
}
const Category = ({itemCount,setItemCount}) => {
  const location = useLocation();
  const arr=[1,2,3,4,5,6,7,8,9,10,2,3,5,6,8,8,9,0];
  // console.log(location.search.replace("?category=", ""));
  return (
    <div>
      <div className="disinfectant-card-wrapper">
        {arr.map((e,i)=>{
          return <Card itemCount={itemCount} setItemCount={setItemCount}></Card>;
        })}
      </div>
    </div>
  )
}

export default Category