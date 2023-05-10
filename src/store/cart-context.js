import React, { useState } from "react";

const cartContext = React.createContext({
  itemsToOrder: 0,
  setItemsToOrder: () => {},
});
export default cartContext;
