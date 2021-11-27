

export default function Basket(props) {
    const { cartItems } = props
    // every friday 8 cookies is $6, oct 1 any keylime is 25% off, tuesday ginger 2x1
    const discountPrice = (dateIs,price) => {
        if (dateIs === 'friday') {
            return price*0.6
        }
        if (dateIs === 'oct1') {
            return price*0.75
        }
        if (dateIs === 'tuesday') {
            return price*0.5
        } else {
            return price
        }
    }
    const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

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