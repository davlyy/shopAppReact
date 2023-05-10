import React, { useReducer } from "react";

const modalContext = React.createContext({
  title: "",
  description: "",
  amount: 0,
  price: 0,
});

export default modalContext;
