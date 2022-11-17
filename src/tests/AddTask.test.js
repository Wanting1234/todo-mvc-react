import { render, screen } from "@testing-library/react";
import AddTask from "../components/AddTask";
import userEvent from "@testing-library/user-event";

describe("add task input box", () => {
  test("should render input box", () => {
    // arrange
    // act
    render(<AddTask />);
    // assert
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("should clear input value when enter key pressed", () => {
    render(<AddTask />);

    userEvent.type(screen.getByRole("textbox"), "test");
    expect(screen.getByRole("textbox")).toHaveValue("test");

    userEvent.keyboard("{enter}");
    expect(screen.getByRole("textbox")).toHaveValue("");
  });
});
