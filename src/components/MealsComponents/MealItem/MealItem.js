import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (properties) => {
  // contexts
  const cartCtx = useContext(CartContext);

  const price = `$${properties.meal.price.toFixed(2)}`;

  const updateCart = (itemAmount) => {
    cartCtx.addItemToCart({
      id: properties.meal.id,
      name: properties.meal.name,
      price: properties.meal.price,
      amount: itemAmount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{properties?.meal?.name}</h3>
        <div className={classes.description}>
          {properties?.meal?.description}
        </div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={properties.meal.id} addToCart={updateCart} />
      </div>
    </li>
  );
};

export default MealItem;
