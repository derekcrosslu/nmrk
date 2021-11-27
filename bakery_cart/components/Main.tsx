import { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Basket from './Basket'

export default function Main(props) {
  const { setSelectedDate, selectedDate, cartItems } = props;
 
  // console.log(selectedDate.getDay()); // 10/21/22 //  5  (its a friday)
  // console.log(selectedDate.getMonth() + 1); // 10/21/22 // 10
  // console.log(selectedDate.getDate()); // 10/21/22 // 21

  return (
    <header className="row block center main_color">
      <div className="main_subsection_1">
        <div className="main_sub1_head">Bakery Cart</div>
        <div className="main_sub1_basket">
     
          {/* passing the selected cart items and selected date to basket component */}
          <Basket cartItems={cartItems} selectedDate={selectedDate}></Basket>
        </div>
      </div>
      <div className="main_subsection_2">
        <button className="main_sub2_discount"></button>
        <button className="main_sub2_discount"></button>
        <button className="main_sub2_discount"></button>

        <button className="main_sub2_discount"></button>
        <button className="main_sub2_discount"></button>
      </div>
      <div className="main_subsection_3">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MM/dd/yyy"
          minDate={new Date()}
          inline
          // calendarContainer={MyContainer}
        />
      </div>
    </header>
  );
}
