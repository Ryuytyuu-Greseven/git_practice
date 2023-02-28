import React, { useReducer } from "react";
import CartContext from "./cart-context";

// reducers
const cartData = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems = [];
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];

    if (existingItem) {
      const updatedExistingItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedExistingItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    let updatedItems = [];
    let updatedTotalAmount = 0;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    updatedTotalAmount = state.totalAmount - existingItem.price;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedExistingItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedExistingItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return cartData;
};

const CartProvider = (properties) => {
  const [cartState, cartDispatchAction] = useReducer(cartReducer, cartData);

  // cart functionalities
  const addItem = (item) => {
    cartDispatchAction({ type: "ADD", item });
  };
  const removeItem = (id) => {
    cartDispatchAction({ type: "REMOVE", id });
  };

  const contextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItemToCart: addItem,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {properties.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
