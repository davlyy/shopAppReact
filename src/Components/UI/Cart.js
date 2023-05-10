import React from "react";
import classes from "./Cart.module.css";
import { useContext } from "react";
import cartContext from "../../store/cart-context";
import Button from "./Button";

const Cart = () => {
  const ctx = useContext(cartContext);
  return (
    <React.Fragment>
      <div className={classes.container}>
        <i class="fa-solid fa-cart-shopping"></i>
        <h4> Your Cart </h4>
        <span>{ctx.itemsToOrder}</span>
      </div>
    </React.Fragment>
  );
};

export default Cart;
