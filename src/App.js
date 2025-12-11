//import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Cart from './components/Cart';
import { useContext, useState } from 'react';
import CartProvider from './cart-context/CartProvider';
import CartContext from './cart-context/CartContext';
import CartIcon from './components/CartIcon';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Products from './components/Products';
import About from './components/About';
import Home from './components/Home';

function App() {
  // const [showCart,setShowCart]=useState(false);
  // const cartCtx=useContext(CartContext);
  // console.log(cartCtx.items);
  // const totalItems=cartCtx.items.reduce((sum,item)=>
  //   sum + item.quantity,
  // 0);
   
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
    // <CartProvider>
    //   <CartIcon/>
    // <Products/>
    
    // </CartProvider>

  );
}

export default App;
