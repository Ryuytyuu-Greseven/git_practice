import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((properties, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={properties.input.id}>{properties.label}</label>
      <input ref={ref} {...properties.input} />
    </div>
  );
});

export default Input;
