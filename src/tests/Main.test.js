import { render, screen } from "@testing-library/react";
import Main from "../components/Main";
import userEvent from "@testing-library/user-event";

describe("main section", () => {
  test("should only render add task input text when no task added", () => {
    render(<Main />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });

  test("should render task item when add task", async () => {
    render(<Main />);
    await userEvent.type(screen.getByRole("textbox"), "test");
    await userEvent.keyboard("{enter}");

    await expect(screen.getByRole("textbox")).toHaveValue("");
    await expect(screen.getByRole("listitem")).toHaveTextContent("test");
  });
});
