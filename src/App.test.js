import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders menu react link", () => {
  render(<App />);

  const linkElementWork = screen.getByText(/Work/);
  expect(linkElementWork).toBeInTheDocument();

  const linkElementContact = screen.getByText(/Contact/);
  expect(linkElementContact).toBeInTheDocument();

  const linkElementAbout = screen.getByText(/About & Skills/);
  expect(linkElementAbout).toBeInTheDocument();
});
