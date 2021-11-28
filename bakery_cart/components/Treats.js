import Treat from './Treat'
export default function Treats(props) {
    
    const { treats, addToCart, removeFromCart } = props;

    return (
      <main className="block treats">
        {/* <h2>Treats</h2> */}
        <div className="row treats">
          {treats.map((treat) => {
            return (
              <Treat
                key={treat.id}
                treat={treat}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              ></Treat>
            );
          })}
        </div>
      </main>
    );
}