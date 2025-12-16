//import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Cart from './components/Cart';
import { useContext, useState } from 'react';
import CartProvider from './cart-context/CartProvider';
import CartContext from './cart-context/CartContext';
import CartIcon from './components/CartIcon';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from './components/Products';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import ProductDetails from './components/ProductDetails';

function App() {
  // const [showCart,setShowCart]=useState(false);
  // const cartCtx=useContext(CartContext);
  // console.log(cartCtx.items);
  // const totalItems=cartCtx.items.reduce((sum,item)=>
  //   sum + item.quantity,
  // 0);
   
  return (
   
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/products/:productdetails" component={ProductDetails}></Route>
        <Route path='/products' component={Products}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/contact' component={Contact}></Route>
        </Switch>
    </BrowserRouter>
    // <CartProvider>
    //   <CartIcon/>
    // <Products/>
    
    // </CartProvider>
    


  );
}

export default App;
