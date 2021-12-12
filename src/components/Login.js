
import React, { useState } from 'react';
import {Link , useNavigate} from 'react-router-dom';
import { auth } from '../firebase';
import './login.css'

function Login() {
    const navigate = useNavigate();
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');

    const signIn = (e) =>{
        e.preventDefault();

        //finally firebase, Yeah!!
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
            navigate('/')
        })
        .catch(error=>alert(error.message))

    }

    const register = (e) =>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                navigate('/')
            }
        })
        .catch(error =>alert(error.message))

        //firebase register, Yeah!!

    }

    return (
        <div className='login'>
            <Link to='/'>
            <img 
            className='login__logo'
            src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png" alt="logo" />
            </Link>


            <div className="login__container">
            <h1>Sign-In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button 
                    type='submit'
                    onClick={signIn}
                    className="login__signInButton">Sign In</button>
                </form>
                <p>By signing in you agree to AMAZON's FAKE CLONE conditions
                    of use & sale.Please see our Privacy notice,
                    our Cookies Notice and our Interest-Based Ads
                </p>
                <button 
                onClick={register}
                className='login__registerButton'>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
