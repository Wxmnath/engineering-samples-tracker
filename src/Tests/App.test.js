import React, { render, screen } from "@testing-library/react";
import App from "../Components/App";

test("renders engineering samples", () => {
  render(<App />);
  const linkElement = screen.getByText("engineering samples");
  expect(linkElement).toBeInTheDocument();
});
