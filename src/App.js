//import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Products from './components/Products';
import Cart from './components/Cart';
import { useContext, useState } from 'react';
import CartProvider from './cart-context/CartProvider';
import CartContext from './cart-context/CartContext';
import CartIcon from './components/CartIcon';

function App() {
  const [showCart,setShowCart]=useState(false);
  const cartCtx=useContext(CartContext);
  console.log(cartCtx.items);
  const totalItems=cartCtx.items.reduce((sum,item)=>
    sum + item.quantity,
  0);
  

  
  return (
    <CartProvider>
      <CartIcon/>
    <Products/>
    
    </CartProvider>

  );
}

export default App;
