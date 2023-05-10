import React, { useContext } from "react";
import classes from "./Header.module.css";
import Cart from "./Cart";
import Button from "./Button";

const Header = ({ cartClicker }) => {
  return (
    <div className={classes.header}>
      <h2>ReactMeals</h2>
      <Button onClick={cartClicker}>
        <Cart></Cart>
      </Button>
    </div>
  );
};

export default Header;
