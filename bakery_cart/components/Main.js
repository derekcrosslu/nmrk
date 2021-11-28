import { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Basket from "./Basket";

export default function Main(props) {
  const { setSelectedDate, selectedDate, cartItems, treats } = props;

  const [showDiscount, setShowDiscount] = useState("");
  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ blockSize:'15rem',blockOverflow:'true' }}>
        <CalendarContainer className={className}>
          <div style={{ background: "red", color: "red" }}></div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };
  //wrapping DatePicker component to reuse it's instances without cluttering code
  const Dp = () => (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dateFormat="MM/dd/yyy"
      minDate={new Date()}
      inline
      calendarContainer={MyContainer}
      // calendarContainer={MyContainer}
    />
  );
  const handleShowDiscount = () => {
    if (showDiscount === "") {
      return <Dp />;
    }
    if (showDiscount === "fridays") {
      const [item] = treats.filter((item) => item.id === 3);
      return !item ? <Dp /> : <img src={item.imageURL} />;
    }
    if (showDiscount === "tuesdays") {
      const [item] = treats.filter((item) => item.id === 4);
      return !item ? <Dp /> : <img src={item.imageURL} />;
    }
    if (showDiscount === "oct1") {
      const [item] = treats.filter((item) => item.id === 2);
      return item ? <Dp /> : <img src={item.imageURL} />;
    }
    if (showDiscount === "bulkCookies") {
      const [item] = treats.filter((item) => item.id === 3);
      return !item ? <Dp /> : <img src={item.imageURL} />;
    }
    if (showDiscount === "bulkBrownies") {
      const [item] = treats.filter((item) => item.id === 1);
      return !item ? <Dp /> : <img src={item.imageURL} />;
    }
  };

  const handleClickDiscount = (value) => {
    setShowDiscount(value);
    if (value === "oct1") {
      setSelectedDate(new Date(2022, 9, 1));
    }
  };

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
            onClick={() => handleClickDiscount("fridays")}
          >
            Cookies 8 for $6.00!
          </button>
          <button
            className="main_sub2_discount hoverbuttonoff"
            onClick={() => handleClickDiscount("fridays")}
          >
            Friday's Sale!
          </button>
        </div>
        <div className="hoverbutton">
          <button
            className="main_sub2_discount hoverbuttonon"
            onClick={() => handleClickDiscount("tuesdays")}
          >
            Donut's 2x1!
          </button>
          <button
            className="main_sub2_discount hoverbuttonoff"
            onClick={() => handleClickDiscount("tuesdays")}
          >
            Tuesday's Sale!
          </button>
        </div>
        <div className="hoverbutton">
          <button
            className="main_sub2_discount hoverbuttonon"
            onClick={() => handleClickDiscount("oct1")}
          >
            Cheescake 25% OFF!
          </button>
          <button
            className="main_sub2_discount hoverbuttonoff"
            onClick={() => handleClickDiscount("oct1")}
          >
            October 1st Sale!
          </button>
        </div>

        <div className="hoverbutton">
          <button
            className="main_sub2_discount hoverbuttonon"
            onClick={() => handleClickDiscount("bulkCookies")}
          >
            Cookies 8 for $6.00!
          </button>
          <button
            className="main_sub2_discount hoverbuttonoff"
            onClick={() => handleClickDiscount("bulkCookies")}
          >
            Cookies Sale!
          </button>
        </div>
        <div className="hoverbutton">
          <button
            className="main_sub2_discount hoverbuttonon"
            onClick={() => handleClickDiscount("bulkBrownies")}
          >
            Brownies 4 for $7.00!
          </button>
          <button
            className="main_sub2_discount hoverbuttonoff"
            onClick={() => handleClickDiscount("bulkBrownies")}
          >
            Brownies Sale!
          </button>
        </div>
      </div>
      <div className="main_subsection_3">{handleShowDiscount()}</div>
    </header>
  );
}
