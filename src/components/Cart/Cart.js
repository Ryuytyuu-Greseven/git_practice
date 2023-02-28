import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import cartClasses from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (properties) => {
  const cartCtx = useContext(CartContext);
  const enableOrder = cartCtx.items.length ? true : false;
  const totalCartValue = `$${cartCtx.totalAmount.toFixed(2)}`;

  const increaseQuantity = (item) => {
    cartCtx.addItemToCart(item);
  };

  const reduceQuantity = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={cartClasses["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          name={item.name}
          price={item.price}
          summary={item.summary}
          amount={item.amount}
          onAdd={increaseQuantity.bind(null, item)}
          onRemove={reduceQuantity.bind(null, item.id)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={properties.onHideCart}>
      {cartItems}
      <div className={cartClasses["total"]}>
        <span>Total Cart Value</span>
        <span>{totalCartValue}</span>
      </div>
      <div className={cartClasses["actions"]}>
        <button
          className={cartClasses["button--alt"]}
          onClick={properties.onHideCart}
        >
          Close
        </button>
        {enableOrder && (
          <button className={cartClasses["button"]}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;


// updating first commmit