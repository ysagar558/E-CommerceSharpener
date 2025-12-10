//import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Products from './components/Products';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  const [showCart,setShowCart]=useState(false);
  return (
    <div>
      <div style={{ textAlign: "right", padding: "20px" }}>
        <Button variant="dark" onClick={() => setShowCart(true)}>
          🛒 Cart
        </Button>
      </div>

      {/* Cart Modal */}
      <Cart show={showCart} handleClose={() => setShowCart(false)} />
    <Products/>
    
    </div>

  );
}

export default App;
