import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";

import CartIcon from "../../Cart/CartIcon";
import cartClasses from "./CartButton.module.css";

const CartButton = (properties) => {
  // suing state to add classes dynamically
  const [highlightBtn, setHighlightBtn] = useState(false);

  // contexts
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  // calculating toal cart items count
  const cartItemsCount = items.reduce((currentCount, foodItem) => {
    return currentCount + foodItem.amount;
  }, 0);

  const buttonClasses = `${cartClasses.button} ${cartClasses.bump}`;

  // effects
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setHighlightBtn(true);

    // set timers and remove the bump class
    const timer = setTimeout(() => {
      setHighlightBtn(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      className={highlightBtn ? buttonClasses : cartClasses.button}
      onClick={properties.onClickCart}
    >
      <span className={cartClasses.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={cartClasses.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default CartButton;
