export default function Treat(props) {
    const { treat, addToCart, removeFromCart } = props;

    const item = 0
  return (
    <div className="treats">
      <div className="treat_images_text">
        <img className="small" src={treat.imageURL} alt={treat.name}></img>
        <div className="treats_buttons">
          <button onClick={() => addToCart(treat)} className="add">
            +
          </button>
          <button onClick={() => removeFromCart(treat)} className="remove">
            -
          </button>
        </div>
        <div className="treat_text">
          <div>${treat.price}</div>
          <h3>{treat.name}</h3>
        </div>
      </div>
    </div>
  );
}
