export default function Treat(props) {
    const { treat, addToCart, removeFromCart } = props;

    const item = 0
  return (
    <div>
      <img className="small" src={treat.imageURL} alt={treat.name}></img>
      <h3>{treat.name}</h3>
      <div>${treat.price}</div>
      <div>
        <button onClick={() => addToCart(treat)} className="add">
          Add
        </button>
        <button onClick={() => removeFromCart(treat)} className="remove">
          Remove
        </button>
      </div>
    </div>
  );
}
