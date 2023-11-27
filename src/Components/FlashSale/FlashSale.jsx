import React, { useRef } from 'react'
import fs from "../../assets/fs.png";
import "./sale.css";
const FlashSale = () => {
    const fw = useRef();
    const hideSale = ()=>{
        fw.current.style.display = "none";
    }
    return (
        <div className="flash-sale-wrapper" ref={fw}>
            <div className="image-wrapper">
                <p style={{fontWeight:"bold",padding:8,fontSize:"10px",cursor:"pointer"}} onClick={()=>hideSale()}>X</p>
            </div>
        </div>
    )
}

export default FlashSale