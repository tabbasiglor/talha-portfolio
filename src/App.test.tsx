import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main portfolio heading", () => {
  render(<App />);
  const headings = screen.getAllByText(/talha faisal/i);
  expect(headings.length).toBeGreaterThan(0);
});
