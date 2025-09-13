import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Collection from './pages/Collection';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<Collection/>} />
        <Route path='/contact' element={<About/>} />
        <Route path='/collection' element={<Contact/>} />
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/placeorder' element={<PlaceOrder/>} />
      </Routes>
    </div>
  )
}

export default App