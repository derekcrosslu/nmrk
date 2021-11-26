

export default function Basket(props) {
    const { cartItems }=props
    return (<cart className='block col-1'>
        <h2>Cart Items</h2>
        <div>{cartItems.length===0&&<div>Cart is Empty</div>}
        </div>
    </cart>)
}