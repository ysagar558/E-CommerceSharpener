import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (i) => i.title === item.title
      );

      if (existingIndex !== -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += 1;
        return updated;
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeItemHandler = (title) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.title !== title)
    );
  };

  const contextValue = {
    items,
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
