export default function Treat(props) {
    const { treat } = props;
    console.log(treat);
  return (
    <div>
      <img className="small" src={treat.imageURL} alt={treat.name}></img>
      <h3>{treat.name}</h3>
      <div>${treat.price}</div>
      <div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
