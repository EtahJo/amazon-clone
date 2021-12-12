
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './components/Login';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Checkout from './components/Checkout';
import { useEffect } from 'react';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';

function App() {
  const[{},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('THE USER IS >>>>',authUser)
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })

      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
    })


  },[])
  return (
    <Router>
    <div className="app">
 
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/checkout' element={<><Header/><Checkout/></>}/>
      <Route path='/payment' element={<><Header/><Payment/></>}/>
      <Route path='/' element={<><Header/><Home/></>}/>
      
      </Routes>
      
    
    </div>
    </Router>
  );
}

export default App;
