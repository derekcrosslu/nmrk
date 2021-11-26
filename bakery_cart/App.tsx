import { useState } from 'react'
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";
import data from "../api/bakery_problem_data.json";

function App() {
    const { treats } = data;
    const [cartItems, setCartItems] = useState([])
    const addToCart = (treat) => {
        const itemInCart = cartItems.find(item => item.id === treat.id)
        if (itemInCart) {
            setCartItems(cartItems.map(item=>item.id===treat.id?{...itemInCart,qty:itemInCart.qty+1}:item))
        } else {
            setCartItems([...cartItems,{...treat,qty:1}])
        }
    }
    const removeFromCart = (treat) => {
        console.log(treat,'remove fun');
        
        const itemInCart = cartItems.find(item => item.id === treat.id)
        if (itemInCart.qty) {
            setCartItems(cartItems.filter(item=>item.id!==treat.id))
        } else {
            setCartItems(
              cartItems.map((item) =>
                item.id === treat.id
                  ? { ...itemInCart, qty: itemInCart.qty - 1 }
                  : item
              )
            );
        }
    }
    
    return (
      <div>
        <Header></Header>
        <div className="components">
          <Main
            treats={treats}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          ></Main>
          <Basket cartItems={cartItems}> </Basket>
        </div>
      </div>
    );
}

export default App