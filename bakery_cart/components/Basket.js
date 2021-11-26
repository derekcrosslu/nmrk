

export default function Basket(props) {
    const { cartItems } = props
    console.log(cartItems);
    return (
      <div className="block col-1">
        <h2>Cart Items</h2>
        <div>
          {cartItems.length === 0 ? (
            <div>Cart is Empty</div>
          ) : (
            <div>Cart has {cartItems.length} items</div>
          )}
        </div>
      </div>
    );
} 