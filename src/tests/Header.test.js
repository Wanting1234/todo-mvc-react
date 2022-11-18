import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("header", () => {
  test("should render header", () => {
    render(<Header />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "todos"
    );
  });
});
