import React from 'react';
import Product from './components/Product';
import './home.css'

function Home() {
    return (
        <div className='home'>
         <div className="home__container">
             <img 
             className="home__image"
             src="https://www.thetatva.in/wp-content/uploads/2021/03/Banner-Image.jpg" alt="" />
         </div>
         <div className="home__row">
             <Product
             id= '1234'
             title ="The Lean Star: How Constant Innovation Creates Radically Successful Businesses Paperback"
             price = {19.99}
             image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
             rating ={4}
             />
             <Product
             id= '1235'
             title ="Men watches Chronograph Stainless Steel Waterproof Date Analog Quartz watch"
             price = {200}
             image='https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UX522_.jpg'
             rating ={4}
             />
           
         </div>
         <div className="home__row">
             <Product
             id = '1236'
             title= 'Strawberry Midi Dress: The perfect head turner dress featured by a midi dress'
             price= {490}
             image= 'http://cdn.shopify.com/s/files/1/0011/9783/4252/products/20_375a8763-f5d7-4184-a352-4523ef713733.jpg?v=1576267132'
             rating = {3}
             />
             <Product
             id = '1237'
             title='NutriBullet ZNBF30400Z Blender 1200Watts, 1200W, Dark Gray Online in ...'
             price= {500}
             image='https://m.media-amazon.com/images/I/71t6qSxiaWL._AC_SL1500_.jpg'
             rating ={2}
             />
            <Product
            id = '1239'
            title= 'Kitchen Aid Hand Mixer 5 Speed: light and compact hand mixer'
            price={100}
            image='https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/P25533s.jpg'
            rating= {3}
            />
             
             
         </div>
         <div className="home__row">
            
             <Product
             id = '1238'
             title= 'SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QH'
             price= {1000}
             image ='https://m.media-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg'
             rating = {4}/>
            
         </div>
         
        </div>
    )
}

export default Home
