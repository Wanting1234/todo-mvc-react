import { render, screen } from "@testing-library/react";
import AddTask from "../components/AddTask";
import userEvent from "@testing-library/user-event";

describe("add task input box", () => {
  test("should render input box", () => {
    render(<AddTask />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("should clear input value when enter key pressed", async () => {
    const createTask = jest.fn();
    render(<AddTask createTask={createTask} />);

    await userEvent.type(screen.getByRole("textbox"), "test");
    expect(screen.getByRole("textbox")).toHaveValue("test");

    await userEvent.keyboard("{enter}");
    expect(screen.getByRole("textbox")).toHaveValue("");
  });
});
