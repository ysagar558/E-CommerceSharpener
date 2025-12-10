import React, { useState } from "react";
import { Modal, Button, ListGroup, Image } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = ({ show, handleClose }) => {
  const [items, setItems] = useState(cartElements);

  const removeItem = (title) => {
    setItems((prev) => prev.filter((item) => item.title !== title));
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ListGroup>
          {items.map((item) => (
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
                onClick={() => removeItem(item.title)}
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
