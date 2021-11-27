export default function Treat(props) {
    const { treat, addToCart, removeFromCart } = props;

    const item = 0
  return (
    <div>
      <img className="small" src={treat.imageURL} alt={treat.name}></img>
      <h3>{treat.name}</h3>
      <div>${treat.price}</div>
      <div>
        <button onClick={() => addToCart(treat)}>Add to Cart</button>
        <button onClick={() => removeFromCart(treat)}>Remove from Cart</button>
      </div>
    </div>
  );
}
