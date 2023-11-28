import React, { useRef } from 'react'
import fs from "../../assets/fs.png";
import "./sale.css";
import { useNavigate } from 'react-router-dom';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect } from 'react';
const FlashSale = (time) => {
    const fw = useRef();
    const hideSale = ()=>{
        fw.current.style.display = "none";
    }

    const hours = Math.floor(time.time / 3600);
    const minutes = Math.floor((time.time % 3600) / 60);
    const seconds = time.time % 60;
    return (

        <div className="flash-sale-wrapper" ref={fw} onClick={hideSale}>
            <div>
                    <AnchorLink href="#here" style={{textDecoration:"none"}} >
            <div className="image-wrapper"  style={{borderRadius:"4px"}}>
                <p style={{fontWeight:"bold",textDecoration:"none",padding:8,fontSize:"20px",cursor:"pointer"}} onClick={()=>hideSale()}>X</p>
            </div>
          
            <div className='Countdown-wrapper'  style={{borderRadius:"4px"}}>
            <div className='span-wrapper'>
        <span className='Timer-span'>{hours < 10 ? `0${hours}` : hours}</span>
        <span className='Timer-span'>{minutes < 10 ? `0${minutes}` : minutes}</span>
        <span className='Timer-span'>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
                 <div className="content">GRAB BEFORE SALE ENDS!</div>
            </div>
            </AnchorLink>
            </div> 
        </div>
    )
}

export default FlashSale