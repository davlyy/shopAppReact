import React from "react";
import classes from "./ModalProduct.module.css";

const ModalProduct = ({ title, description, price }) => {
  return (
    <div>
      <div className={classes.prdInfo}>
        <div>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <span>{price}</span>
        </div>

        <div className={classes.iconss}>
          <i class="fa-solid fa-minus"></i>
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
      <div className={classes.line}></div>
    </div>
  );
};

export default ModalProduct;
