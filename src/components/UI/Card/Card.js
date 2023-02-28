import classes from "./Card.module.css";

const Card = (properties) => {
  return <div className={classes.card}>{properties.children}</div>;
};

export default Card;
