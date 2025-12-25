import { useContext, useState } from "react";
import CartContext from "../cart-context/CartContext";
import { Button } from "react-bootstrap";
import Cart from "./Cart";

const CartIcon = () => {
  const [show, setShow] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const logoutHandler=()=>{
    localStorage.removeItem('token');
  }

  return (
    <>
      <div style={{ textAlign: "right", padding: "20px" }}>
        <Button variant="dark" onClick={() => setShow(true)}>
          🛒 Cart ({totalItems})
        </Button>
        <Button variant="dark" style={{marginLeft:'3px'}} onClick={logoutHandler}>Log Out</Button>
      </div>

      <Cart show={show} handleClose={() => setShow(false)} />
    </>
  );
};

export default CartIcon;
