import React, { Fragment } from "react";

// css classes
import headerClasses from "./Header.module.css";
import headerImge from "../../../assets/cyberpunk.png";
import CartButton from "../HeaderCartButton/CartButton";

const Header = (properties) => {
  return (
    <Fragment>
      <header className={headerClasses.header}>
        <h1>Delightful Deals</h1>
        <CartButton onClickCart={properties.onShowCart} />
      </header>

      <div className={headerClasses["main-image"]}>
        <img src={headerImge} alt="Cyberpunk 2077" />
      </div>
    </Fragment>
  );
};

export default Header;
