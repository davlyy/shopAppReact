import { useEffect, useState } from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import Header from "./Components/UI/Header";
import InfoBox from "./Components/UI/InfoBox";
import cartContext from "./store/cart-context";
// import Modal from "./Modal/Modal";
import OrderModal from "./Modal/Modal";
import modalContext from "./store/modal-context";

function App() {
  const products = [
    {
      price: 14,
      description: "Home-Made Sushi",
      title: "Sushi",
    },
    {
      price: 15,
      description: "Best Italian Pizza",
      title: "Pizza",
    },
    {
      price: 16,
      description: "Greens are good",
      title: "Borcolli",
    },
    {
      price: 17,
      description: "Enjoy your tea, sir",
      title: "Tea",
    },
    {
      price: 18,
      description: "Coffein to get the day started",
      title: "Coffee",
    },
  ];
  const dataForTheModal = [];

  const [cartToBuyAmount, setCartToBuyAmount] = useState(0);
  const [modalIsClicked, setModalIsClicked] = useState(false);
  const [modalData, setModalData] = useState(dataForTheModal);
  const clickOnCartHandler = () => {
    setModalIsClicked((prev) => !prev);
  };
  const closeModalHandler = () => {
    setModalIsClicked((prev) => !prev);
  };

  const getModalData = (data) => {
    setModalData((prev) => [...prev, data]);
    console.log(modalData);
  };

  return (
    <cartContext.Provider
      value={{
        itemsToOrder: cartToBuyAmount,
        setItemsToOrder: setCartToBuyAmount,
      }}
    >
      {modalIsClicked && (
        <OrderModal dataM={modalData} closeModalHandler={closeModalHandler} />
      )}
      <Header cartClicker={clickOnCartHandler}></Header>
      <InfoBox></InfoBox>
      <Products products={products} onGetModalData={getModalData}></Products>
    </cartContext.Provider>
  );
}

export default App;
