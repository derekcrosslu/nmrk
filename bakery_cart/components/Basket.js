import { useState } from "react";




export default function Basket(props) {
  const { cartItems, selectedDate } = props;
  const [cartReady, setCartReady] = useState([{ id: 0, price: 0, qty: 0 }]);
  // these are the criteria to determine price discounts
  // every friday 8 cookies is $6, oct 1 any keylime is 25% off, tuesday ginger 2x1
  // console.log(selectedDate.getDay()); // 10/21/22 //  5  (its a friday)
  // console.log(selectedDate.getMonth() + 1); // 10/21/22 // 10
  // console.log(selectedDate.getDate()); // 10/21/22 // 21
  // console.log(cartItems, selectedDate.getMonth()+1, selectedDate.getDate());

  // creating a callback function to factor in the reduce function below
  const discountPrice = (price, qty, id) => {
    // Brownie bulk discount  4 for $7
    if (qty >= 4 && id === 1) {
      return 7 * Math.floor(qty / 4) + price * (qty % 4);
    }
    // Cookie bulk discount  8 for $6
    if (qty >= 6 && id === 3) {
      // Friday's discount cookie gets 8 for $6
      if (selectedDate.getDay() === 5 && qty >= 8) {
        return 6 * Math.floor(qty / 8) + price * (qty % 8);
      } else {
        return 6 * Math.floor(qty / 6) + price * (qty % 6);
      }
    }
    // October 1st discount every cheesecake gets 25% off
    if (
      selectedDate.getMonth() + 1 === 10 &&
      selectedDate.getDate() === 1 &&
      id === 2
    ) {
      return price * 0.75 * qty;
    }
    // Tuesday's discount ginger gets two for one or 50% off
    if (selectedDate.getDay() === 2 && id === 4) {
      return price * 0.5 * qty;
    } else {
      // regular price without any discount
      return price * qty;
    }
  };


  

  // first we map our cart items with their respective
  // const totalPrice = cartItems.map((a) => discountPrice(a.price, a.qty, a.id));
  // console.log(discountedItems, "discountedItems");

  //then we calculate the total price with a reduce function
  const totalPrice = cartItems.reduce(
    (a, c) => a + discountPrice(c.price, c.qty, c.id),
    0
  );

  // finding the total quantity of items
  const totalQty = cartItems.reduce((a, c) => a + c.qty, 0);

  const totalItemPrice = (cartItems, itemId) => {
    if (cartItems.length === 0) {
      return 0;
    } else {
      const [item] = cartItems.filter((item) => item.id === itemId);
      return !item ? 0 : discountPrice(item.price, item.qty, item.id);
    }
  };
  const totalItemQty = (cartItems, itemId) => {
    if (cartItems.length === 0) {
      return 0;
    } else {
      const [item] = cartItems.filter((item) => item.id === itemId);
      return !item ? 0 : item.qty;
    }
  };

  return (
    <div>
      <div>
        <div className="row max">
          <div className="first_col">Brownies</div>
          <div className="mid_col">{totalItemQty(cartItems, 1)}</div>
          <div className="third_col">
            $ {totalItemPrice(cartItems, 1).toFixed(2)}
          </div>
        </div>
        <div className="row max">
          <div className="first_col">Cheesecakes</div>
          <div className="mid_col">{totalItemQty(cartItems, 2)}</div>
          <div className="third_col">
            $ {totalItemPrice(cartItems, 2).toFixed(2)}
          </div>
        </div>
        <div className="row max">
          <div className="first_col">Cookies</div>
          <div className="mid_col">{totalItemQty(cartItems, 3)}</div>
          <div className="third_col">
            $ {totalItemPrice(cartItems, 3).toFixed(2)}
          </div>
        </div>
        <div className="row max">
          <div className="first_col">Donuts</div>
          <div className="mid_col">{totalItemQty(cartItems, 4)}</div>
          <div className="third_col">
            $ {totalItemPrice(cartItems, 4).toFixed(2)}
          </div>
        </div>
        <div className="row max total_price">
          <h3>Total Price</h3> <h3>$ {totalPrice.toFixed(2)}</h3>
        </div>
        <div className="row max checkout">
          <h3></h3>
        </div>
      </div>
    </div>
  );
}
