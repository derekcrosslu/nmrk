import { useState } from "react";
import Basket from "./components/Basket";
import Main from "./components/Main";
import Treats from "./components/Treats";
import "./index.css";
import data from "../api/bakery_problem_data.json";

function App() {
    // getting data from json file from now, when all works I will implement api calls
  const { treats } = data;
  const [cartItems, setCartItems] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const addToCart = (treat) => {
      const itemInCart = cartItems.find((item) => item.id === treat.id);
      
    if (itemInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === treat.id
            ? { ...itemInCart, qty: itemInCart.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...treat, qty: 1 }]);
    }
  };
  const removeFromCart = (treat) => {
    const itemInCart = cartItems.find((item) => item.id === treat.id);
    if (itemInCart) {
      setCartItems(cartItems.filter((item) => item.id !== treat.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === treat.id
            ? { ...itemInCart, qty: itemInCart.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <div>
      {/*     I included the datepicker in Main component */}
      <Main
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        cartItems={cartItems}
        treats={treats}
        addToCart={addToCart}
      ></Main>
      <div className="components">
        {/* passing adding and removing props to each item */}
        <Treats
          treats={treats}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        ></Treats>
      </div>
    </div>
  );
}

export default App;
