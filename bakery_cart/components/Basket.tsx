

export default function Basket(props) {
  const { cartItems, selectedDate } = props;
  // these are the criteria to determine price discounts
  // every friday 8 cookies is $6, oct 1 any keylime is 25% off, tuesday ginger 2x1
  // console.log(selectedDate.getDay()); // 10/21/22 //  5  (its a friday)
  // console.log(selectedDate.getMonth() + 1); // 10/21/22 // 10
    // console.log(selectedDate.getDate()); // 10/21/22 // 21

// creating a callback function to factor in the reduce function below
  const discountPrice = (price) => {
    if (selectedDate.getDay() === 5) {
      return price * 0.6;
    }
    if (selectedDate.getMonth() + 1 === 10 && selectedDate.getDate()===21) {
      return price * 0.75;
    }
    if (selectedDate.getDay() === 2) {
      return price * 0.5;
    } else {
      return price;
    }
  };
  const totalPrice = cartItems.reduce(
    (a, c) => a + c.qty * discountPrice(c.price),
    0
  );

  console.log(cartItems);
  return (
    <div className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 ? (
          <div>Cart is Empty</div>
        ) : (
          <div>
            Cart has {cartItems.length} items and total is {totalPrice}
          </div>
        )}
      </div>
    </div>
  );
} 