import { useState } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";
import data from "../api/bakery_problem_data.json";

function App() {
    // getting data from json file from now, when all works I will implement api calls
  const { treats } = data;
  const [cartItems, setCartItems] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
console.log(cartItems);

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
      {/*     I included the datepicker in header component */}
      <Header
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      ></Header>
          <div className="components">
               {/* passing adding and removing props to each item */}
        <Main
          treats={treats}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
              ></Main>
               {/* passing the selected cart items and selected date to basket component */}
        <Basket cartItems={cartItems} selectedDate={selectedDate}></Basket>
      </div>
    </div>
  );
}

export default App;
