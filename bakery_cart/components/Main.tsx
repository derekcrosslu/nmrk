import { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Basket from './Basket'

export default function Main(props) {
  const { setSelectedDate, selectedDate, cartItems } = props;
 
  const [showDiscount, setShowDiscount] = useState('')
  const Dp =()=> <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MM/dd/yyy"
          minDate={new Date()}
          inline
          // calendarContainer={MyContainer}
        />
  const handleShowDiscount = () => {
    if (showDiscount === '') {
      return <Dp />
    }
    if (showDiscount === 'fridays') {
      const [item] = cartItems.filter(item => item.id === 3);
      return !item ? <Dp /> : <img src={item.imageURL} />
    }
    if (showDiscount === "tuesdays") {
      const [item] = cartItems.filter((item) => item.id === 4);
      return !item ? <Dp /> : <img src={item.imageURL} />;
    }
    if (showDiscount === "oct1") {
      const [item] = cartItems.filter((item) => item.id === 2);
      return !item ? <Dp /> : <img src={item.imageURL} />;
    }
    if (showDiscount === "bulkCookies") {
      const [item] = cartItems.filter((item) => item.id === 3);
      return !item ? <Dp /> : <img src={item.imageURL} />;
    }
    if (showDiscount === "bulkBrownies") {
      const [item] = cartItems.filter((item) => item.id === 1);
      return !item ? <Dp /> : <img src={item.imageURL} />;
    }
  }

  return (
    <header className="row block center main_color">
      <div className="main_subsection_1">
        <div className="main_sub1_head">Bakery Cart</div>
        <div className="main_sub1_basket">
          {/* passing the selected cart items and selected date to basket component */}
          <Basket cartItems={cartItems} selectedDate={selectedDate}></Basket>
        </div>
      </div>
      <div className="main_subsection_2 ">
        <div className="hoverbutton">
          <button
            className="main_sub2_discount hoverbuttonon"
            onClick={() => setShowDiscount("fridays")}
          >
            Cookies 8 for $6.00!
          </button>
          <button
            className="main_sub2_discount hoverbuttonoff"
            onClick={() => setShowDiscount("fridays")}
          >
            Friday's Sale!
          </button>
        </div>
        <div className="hoverbutton">
          <button
            className="main_sub2_discount hoverbuttonon"
            onClick={() => setShowDiscount("tuesdays")}
          >Ginger Bread Donut's 2x1!</button>
          <button
            className="main_sub2_discount hoverbuttonoff"
            onClick={() => setShowDiscount("tuesdays")}
          >
            Tuesday's Sale!
          </button>
        </div>
        <div className="hoverbutton">
          <button
            className="main_sub2_discount hoverbuttonon"
            onClick={() => setShowDiscount("oct1")}
          >Cheescake 25% OFF!</button>
          <button
            className="main_sub2_discount hoverbuttonoff"
            onClick={() => setShowDiscount("oct1")}
          >
            October 1st Sale!
          </button>
        </div>

        <div className="hoverbutton">
          <button
            className="main_sub2_discount hoverbuttonon"
            onClick={() => setShowDiscount("bulkCookies")}
          >Cookies 8 for $6.00!</button>
          <button
            className="main_sub2_discount hoverbuttonoff"
            onClick={() => setShowDiscount("bulkCookies")}
          >
            Cookies Sale!
          </button>
        </div>
        <div className="hoverbutton">
          <button
            className="main_sub2_discount hoverbuttonon"
            onClick={() => setShowDiscount("bulkBrownies")}
          >Brownies  4 for $7.00!</button>
          <button
            className="main_sub2_discount hoverbuttonoff"
            onClick={() => setShowDiscount("bulkBrownies")}
          >
            Brownies Sale!
          </button>
        </div>
      </div>
      <div className="main_subsection_3">{handleShowDiscount()}</div>
    </header>
  );
}
