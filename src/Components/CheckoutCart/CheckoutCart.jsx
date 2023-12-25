import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../ContextProvider/CartContext'
import "./checkout-cart.css";
import CartCard from '../CartCard/CartCard';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';

const CheckoutCart = () => {
    const { bag } = useContext(cartContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        let tp = 0;
        for (let b of bag) {
            tp += b.price
        }
        setTotalPrice(tp)
    }, [])

    return (
        <div className='checkout-cart'>
            {bag.length == 0 ? (
                <h2>Cart is Empty....</h2>
            ) :
                (
                    bag.map((props, idx) => {

                        return <CartCard key={idx} id={props.id} title={props.title} price={props.price} currentTotalPrice={totalPrice} setTotalPrice={setTotalPrice} image={props.image}></CartCard>
                    })
                )
            }
            {bag.length > 0 ? (
                <div className="total-price-show">
                    <div className="total-price-heading">
                        <h3>Total Price:</h3>
                        <div className="total-price-amount">
                            <h3>Rs.{totalPrice}</h3>
                        </div>
                    </div>
                    <div className="arrow-proceed" onClick={()=>navigate("/chekoutcomplete")}>
                        <ChevronRightIcon fontSize='10px'></ChevronRightIcon>
                    </div>
                </div>

            ) : (<></>)
            }
        </div>
    )
}

export default CheckoutCart