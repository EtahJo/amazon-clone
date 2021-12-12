import React from 'react';
import "./checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from '../StateProvider';
import FlipMove from 'react-flip-move';


function Checkout() {

    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className= 'checkout'>
        <div className="checkout__left">
          <img src="https://www.supplykick.com/hs-fs/hubfs/Marketing-Lookbook-CRO-Banner.png?width=2401&name=Marketing-Lookbook-CRO-Banner.png" alt="" className="checkout__ad" />    
        <div>
            <h3> Hello, {user?.email}</h3>
            <h2 className="checkout__title"> Your Shopping Basket</h2>
            
            {basket.map(item =>(
                <CheckoutProduct
                
                id={item.id}
                title={item.title}
                image={item.image}
                price ={item.price}
                rating={item.rating}

                />

            ))}
       
            
        
        
        
        </div>
        
        </div>  
        <div className="checkout__right">
            <Subtotal/>
           
        </div>
        </div>
    )
}

export default Checkout
