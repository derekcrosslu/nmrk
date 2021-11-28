import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Test from "./Test";

test("render h1 element", () => {
  render(<Test />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
