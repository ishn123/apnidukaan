import React, { useContext, useEffect, useState } from 'react'
import "./cartcard.css"
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { cartContext } from '../../ContextProvider/CartContext';

const BASE_URL = "https://cdn.sanity.io/images/tbe7nf8h/production/"
const CartCard = ({ id, title, desc, price, currentTotalPrice, setTotalPrice,image }) => {
    const [quantityCount, setQuantityCount] = useState(1);
    const {bag,setBag} = useContext(cartContext);
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
                        <div className='inc-dec-button' onClick={() => {
                           setQuantityCount(quantityCount-1)
                           setTotalPrice(currentTotalPrice-price)
                        }}><RemoveIcon></RemoveIcon></div>
                        <div className='value-show'>{quantityCount}</div>
                        <div className='inc-dec-button' onClick={() => {
                            setQuantityCount(quantityCount+1)
                            setTotalPrice(currentTotalPrice+price)

                        }}><AddIcon></AddIcon></div>
                    </div>
                    <button className='buy-now' onClick={()=>{
                        const newBag = bag.filter((pro)=>pro.id!=id);
                        setBag(newBag)
                        setTotalPrice(currentTotalPrice - (quantityCount*price))
                    }}>Remove</button>
                    <button className='buy-now'>Buy Now</button>
                </div>
            </div>
        </div>
    );
}


export default CartCard;