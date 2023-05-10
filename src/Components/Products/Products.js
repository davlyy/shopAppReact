import React from "react";
import classes from "./Products.module.css";
import Product from "./Product";
const Products = ({ products, onGetModalData }) => {
  const addToModal = (modalState) => {
    onGetModalData(modalState);
  };

  return (
    <div className={classes.container}>
      {products.map((prod, i) => {
        return (
          <Product
            key={i}
            title={prod.title}
            description={prod.description}
            price={prod.price}
            onAdd={addToModal}
          ></Product>
        );
      })}
    </div>
  );
};

export default Products;
