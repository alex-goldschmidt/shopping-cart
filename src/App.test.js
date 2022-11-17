import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("App component", () => {
  it("renders correct heading", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch(
      /welcome to the home page/i
    );
  });
});

describe("button in App component", () => {
  it("renders correct button text", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole("button").textContent).toMatch(
      /go to shopping page/i
    );
  });
});
