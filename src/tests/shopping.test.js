import { render, screen } from "@testing-library/react";
import ShoppingPage from "../components/shopping";
import { BrowserRouter } from "react-router-dom";

describe("button in ShoppingPage component", () => {
  it("renders correct button text", () => {
    render(
      <BrowserRouter>
        <ShoppingPage />
      </BrowserRouter>
    );
    expect(screen.getAllByPlaceholderText("button").textContent).toMatch(
      /add to cart/i
    );
  });
});
