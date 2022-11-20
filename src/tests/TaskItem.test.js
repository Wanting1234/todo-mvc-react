import { render, screen } from "@testing-library/react";
import { TaskItem } from "../components/TaskItem";
import userEvent from "@testing-library/user-event";

describe("task item", () => {
  test("should call updateStatus function when mark a task", async () => {
    const mockTask = {
      id: 1,
      name: "task 01",
      completed: false,
    };
    const mockDeleteTask = jest.fn();
    const mockUpdateStatus = jest.fn();

    render(
      <TaskItem
        task={mockTask}
        updateStatus={mockUpdateStatus}
        deleteTask={mockDeleteTask}
      />
    );

    await expect(screen.queryByRole("checkbox")).not.toBeChecked();
    await userEvent.click(screen.getByRole("checkbox"));
    await expect(mockUpdateStatus).toHaveBeenCalled();
  });

  test("should call deleteTask function when click delete button", async () => {
    const mockTask = {
      id: 2,
      name: "task 02",
      completed: false,
    };
    const mockDeleteTask = jest.fn();
    const mockUpdateStatus = jest.fn();

    render(
      <TaskItem
        task={mockTask}
        updateStatus={mockUpdateStatus}
        deleteTask={mockDeleteTask}
      />
    );

    await expect(screen.getByText("task 02")).toBeInTheDocument();
    await userEvent.click(screen.getByTestId("2"));
    await expect(mockDeleteTask).toHaveBeenCalledWith(2);
  });
});
