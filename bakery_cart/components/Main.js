import Treat from './Treat'
export default function Main(props) {
    
    const { treats, addToCart, removeFromCart } = props;



    return (<main className="block col-2">
        <h2>Treats</h2>
        <div className="row">
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
    </main>)
}