import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/MealsComponents/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartToShow] = useState(false);

  const showCartHandler = () => {
    setCartToShow(true);
  };

  const hideCartHandler = () => {
    setCartToShow(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>;
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
