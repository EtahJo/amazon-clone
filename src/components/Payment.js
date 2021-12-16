import React, {useState}from 'react';
import './payment.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from 'react-router-dom';
import {CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from '../reducer';
import { useEffect } from 'react';
import axios from 'axios';

export default function Payment() {
    const[{basket,user},dispatch] = useStateValue();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError]=useState(null);
    const[disabled,setDisabled] = useState(true);
    const[succeeded,setSucceeded]= useState(false);
    const[processing,setProcessing]= useState("");
    const[clientSecret,setClientSecret]= useState(true);

    useEffect(()=>{
      const getClientSecret  = async()=>{
        const response = await axios({
            method: 'post',
            url:`/payments/create?total=${getBasketTotal(basket)*100}`
        });
        setClientSecret(response.data.clientSecret) /// client secret is how stripe knows what we are going to charge
      }
      getClientSecret();
    },[basket])

    const handleSubmit=async(event)=>{
        event.preventDefault();
        setProcessing(true);
        const payload= await stripe.confirmCardPayment(clientSecret,{
            Payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //payment intent = payment confirmation
            setSucceeded(true)
            setError(null)
            setProcessing(false)

            navigate('/orders')

        })
    };
    const handleChange =event=>{
        setDisabled(event.empty);
        setError(event.error?event.error.message:"");
    }
    return (
        <div className='payment'>
            <div className="payment__container">
               <h1>Checkout {<Link to='/checkout'>
               {basket?.length}  items
               </Link>}

               </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 react lane</p>
                        <p>Yaounde, Cameroon</p>
                    </div>

                </div>
                <div className="payment__section">
                    <div className="payment__title">
                    <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item=>(
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">
                            <form onSubmit={handleSubmit}>
                                <CardElement
                                onChange={handleChange}
                                />
                                <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value)=>(
                                     <h3>Order Total:<strong> {value}</strong></h3>
                                    )}
                                    decimalScale={2}
                                    value= {getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator = {true}
                                    prefix={"$"}
                                            
                                    /> 
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"} </span>
                                    </button>
                                </div>
                                {error && <div>{error}</div>}
                            </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
