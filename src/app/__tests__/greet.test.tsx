import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Greet from "../../components/greet/greet";

test("Greet render correctly", () => {
  render(<Greet />);
  const helloText = screen.getByText(/hello/i);
  expect(helloText).toBeInTheDocument();
});

test("Greet render with name", () => {
  render(<Greet name="David" />);
  const text = screen.getByText("Hello David");
  expect(text).toBeInTheDocument();
});
