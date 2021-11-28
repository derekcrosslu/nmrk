import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Basket from "./Basket";

const selectedDate = new Date();


const discountPrice = (price, qty, id) => {
  // Brownie bulk discount  4 for $7
  if (qty >= 4 && id === 1) {
    return 7 * Math.floor(qty / 4) + price * (qty % 4);
  }
  // Cookie bulk discount  8 for $6
  if (qty >= 6 && id === 3) {
    // Friday's discount cookie gets 8 for $6
    if (selectedDate.getDay() === 5 && qty >= 8) {
      return 6 * Math.floor(qty / 8) + price * (qty % 8);
    } else {
      return 6 * Math.floor(qty / 6) + price * (qty % 6);
    }
  }
  // October 1st discount every cheesecake gets 25% off
  if (
    selectedDate.getMonth() + 1 === 10 &&
    selectedDate.getDate() === 1 &&
    id === 2
  ) {
    return price * 0.75 * qty;
  }
  // Tuesday's discount ginger gets two for one or 50% off
  if (selectedDate.getDay() === 2 && id === 4) {
    return price * 0.5 * qty;
  } else {
    // regular price without any discount
    return price * qty;
  }
};


describe("bulk discount function test for  cookies and brownies", () => {
  it("buying 4 brownies should return", () => {
    const itemData = { price: 2, qty: 4, id: 1 };
    expect(discountPrice(itemData.price, itemData.qty, itemData.id)).toEqual(7);
  });
  it("buying 6 cookies should return", () => {
    const itemData = { price: 1.25, qty: 6, id: 3 };
    expect(discountPrice(itemData.price, itemData.qty, itemData.id)).toEqual(6);
  });
});


