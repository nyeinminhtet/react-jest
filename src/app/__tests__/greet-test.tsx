import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Greet from "../../components/greet/greet";

describe("Greet", () => {
  test("render correctly", () => {
    render(<Greet />);
    const helloText = screen.getByText(/hello/i);
    expect(helloText).toBeInTheDocument();
  });
});

describe("Inside", () => {
  test("render with David", () => {
    render(<Greet name="David" />);
    const text = screen.getByText("Hello David");
    expect(text).toBeInTheDocument();
  });
});
