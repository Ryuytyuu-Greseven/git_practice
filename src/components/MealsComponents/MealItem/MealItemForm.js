import { useRef, useState } from "react";
import Input from "../../UI/Inputs/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (properties) => {
  const [amountIsValid, setAmountValid] = useState(true);
  const amountRef = useRef();
  const submitCart = (event) => {
    event.preventDefault();

    const itemsAmount = amountRef.current.value;
    const itemsAmountNumber = +itemsAmount;
    if (
      !itemsAmount.trim().length ||
      itemsAmountNumber < 1 ||
      itemsAmountNumber > 5
    ) {
      setAmountValid(false);
      return;
    }
    properties.addToCart(itemsAmountNumber);
  };

  return (
    <form onSubmit={submitCart}>
      <div className={classes.form}>
        <Input
          ref={amountRef}
          label="Amount"
          input={{
            id: "amount_" + properties.id,
            type: "number",
            min: "1",
            max: "6",
            step: "1",
            defaultValue: "0",
          }}
        />
        <button>+ Add</button>
        {!amountIsValid && <p>Enter Amount between (1-5)</p>}
      </div>
    </form>
    // <div className={classes.form}>
    //   <label>{properties.label}</label>
    //   <input {...properties.input} />
    // </div>
  );
};

export default MealItemForm;
