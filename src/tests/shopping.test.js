import { render, screen } from "@testing-library/react";
import ShoppingPage from "../components/shopping";
import { BrowserRouter } from "react-router-dom";

describe("ShoppingPage component", () => {
  it("renders correct heading", () => {
    render(
      <BrowserRouter>
        <ShoppingPage />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch(/shop for colors/i);
  });
});
