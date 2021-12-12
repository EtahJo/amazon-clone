import React from 'react'
import './checkoutproduct.css'
import { useStateValue } from '../StateProvider';


function CheckoutProduct({id, image, title, price , rating}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket =()=>{
        // remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,

        })

    }
    return (
        <div className='checkout_product'>
            <img className='checkout_productImage' src={image} alt="" />

            <div className="checkout_productInfo">
                <p className="checkout_productTitle">{title}</p>
                <p className="checkout_productPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout_productRating">
                    {Array(rating).fill().map((_, i)=>(
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
