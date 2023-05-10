import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import ModalProduct from "./ModalProduct";

const Modal = ({ closeModalHandler, dataM }) => {
  const closeHandler = () => {
    closeModalHandler();
  };
  return (
    <div className={classes.backdrop}>
      <div className={`${classes.container}`}>
        {dataM.map((prod, i) => {
          return (
            <ModalProduct
              key={i}
              title={prod.title}
              description={prod.description}
              price={prod.price}
            ></ModalProduct>
          );
        })}

        <div className={classes.endInfo}>
          <h3>Total Amount</h3>
          <h3>Price</h3>
        </div>
        <div className={classes.buttons}>
          <button onClick={closeHandler}>Close</button>
          <button>Order</button>
        </div>
      </div>
    </div>
  );
};

const OrderModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Modal
          closeModalHandler={props.closeModalHandler}
          dataM={props.dataM}
        />,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default OrderModal;
// export default Modal;
