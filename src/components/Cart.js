import React, { useContext, useState } from "react";
import { Modal, Button, ListGroup, Image } from "react-bootstrap";
import CartContext from "../cart-context/CartContext";

const Cart = ({ show, handleClose }) => {
    const cartCtx=useContext(CartContext);
  //const [items, setItems] = useState(cartElements);

//   const removeItem = (title) => {
//     setItems((prev) => prev.filter((item) => item.title !== title));
//   };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ListGroup>
             {cartCtx.items.length===0&&(<p className="text-center">Cart is empty</p>)}
          {cartCtx.items.map((item) => (
            <ListGroup.Item
              key={item.title}
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
                onClick={() => cartCtx.removeItem(item.title)}
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
