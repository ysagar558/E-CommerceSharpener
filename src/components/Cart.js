import React, { useContext, useState,useEffect } from "react";
import { Modal, Button, ListGroup, Image } from "react-bootstrap";
import CartContext from "../cart-context/CartContext";

const Cart = ({ show, handleClose }) => {
    const cartCtx=useContext(CartContext);
  const [items, setItems] = useState([]);

const API_KEY='da198447115c44e5a4434fb0fedeec27';
const userEmail=localStorage.getItem('email');
const safeEmail=userEmail.replace(/[@.]/g,"");

// const [cartItems,setCartItems]=useState([]);


const fetchCartItems=async()=>{
  const response = await fetch(
      `https://crudcrud.com/api/${API_KEY}/cart${safeEmail}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch cart items");
    }

    const data = await response.json();
    
    // setItems(data);
    localStorage.setItem('length',data.length);

    console.log(data.length);

    const merged = [];

  data.forEach((item) => {
    const index = merged.findIndex(
      (i) => i.title === item.title
    );

    if (index !== -1) {
      merged[index].quantity += 1;
    } else {
      merged.push({ ...item, quantity: 1 });
    }
  });

  setItems(merged);

}
useEffect(()=>{
  fetchCartItems();
},[]);

// const removeItem = (title) => {
//     setItems((prev) => prev.filter((item) => item.title !== title));
//   };

  const removeItem = async(id) => {
    await fetch(
    `https://crudcrud.com/api/${API_KEY}/cart${safeEmail}/${id}`,
    {
      method: "DELETE",
    }
  );
  fetchCartItems();
  };



  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ListGroup>
             {items.length===0&&(<p className="text-center">Cart is empty</p>)}
          {items.map((item) => (
            <ListGroup.Item
              key={item._id}
              className="d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
                <Image
                  src={item.imageUrl}
                  rounded
                  style={{ width: "60px", height: "60px", objectFit: "cover" }}
                />
                <div className="ms-3">
                  <h6 className="m-0">{item.title}</h6>
                  <small>Price: ₹{item.price}</small>
                  <br />
                  <small>Qty: {item.quantity}</small>
                </div>
              </div>

              <Button
                variant="danger"
                size="sm"
                onClick={() => removeItem(item._id)}
              >
                Remove
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
