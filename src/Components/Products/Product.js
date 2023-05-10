import React, {
  useContext,
  useEffect,
  useReducer,
  useState,
  useRef,
} from "react";
import classes from "./Product.module.css";
import Button from "../UI/Button";
import cartContext from "../../store/cart-context";

// const modalReducer = (state, action) => {
//   return {
//     title: action.title,
//     price: action.price,
//     description: action.description,
//     amount: action.amount,
//   };
// };

const Product = ({ title, description, price, onAdd }) => {
  // const [modalState, dispatchModalState] = useReducer(modalReducer, {
  //   title: "",
  //   price: 0,
  //   description: "",
  //   amount: 0,
  // });
  // const [fTitle, setFTitle] = useState("");
  // const [fDescription, setFDescription] = useState("");
  // const [fPrice, setFPrice] = useState(0);

  const [inputValue, setInputValue] = useState(0);
  const ctx = useContext(cartContext);
  const changeAmountHandler = (event) => {
    setInputValue(event.target.value);
  };

  const addItemHandler = () => {
    inputValue === 0
      ? ctx.setItemsToOrder((prev) => prev + 1)
      : ctx.setItemsToOrder((prev) => prev + +inputValue);

    let amount = +inputValue === 0 ? 1 : +inputValue;

    const data = {
      price,
      description,
      title,
      amount: +amount,
    };
    // dispatchModalState({
    //   price,
    //   description,
    //   title,
    // });

    onAdd(data);

    setInputValue(0);
  };

  return (
    <div className={classes.product}>
      <div className={classes.info}>
        <h4>{title}</h4>
        <p>{description}</p>
        <h3>{`$${price}`}</h3>
      </div>
      <div className={classes.add}>
        <label htmlFor="number">Amount</label>
        <input
          type="number"
          onChange={changeAmountHandler}
          value={inputValue}
        />
        <Button onClick={addItemHandler}>+Add</Button>
      </div>
      <div className={classes.line}></div>
    </div>
  );
};

export default Product;
