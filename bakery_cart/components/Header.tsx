import { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Header(props) {
  const { setSelectedDate, selectedDate } = props;
 
  // console.log(selectedDate.getDay()); // 10/21/22 //  5  (its a friday)
  // console.log(selectedDate.getMonth() + 1); // 10/21/22 // 10
  // console.log(selectedDate.getDate()); // 10/21/22 // 21

  return (
    <header className="row block center header_color">
      <div>
        <a href="#/">
          <h1>Bakery Cart</h1>
        </a>
      </div>
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MM/dd/yyy"
          minDate={new Date()}
          inline
          // calendarContainer={MyContainer}
        />
        <a href="#/cart">Cart</a>
      </div>
    </header>
  );
}
