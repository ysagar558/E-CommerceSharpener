import { useState,useEffect } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const API_KEY='675070a699724c9f91c4ffc759319d84';
  const email=localStorage.getItem('email');


  const addItemHandler = async (item,email) => {
    const response = await fetch(
    `https://crudcrud.com/api/${API_KEY}/cart${email}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add product to cart");
  }

  };

  const removeItemHandler = (title) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.title !== title)
    );
  };

  const contextValue = {
    items:items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
