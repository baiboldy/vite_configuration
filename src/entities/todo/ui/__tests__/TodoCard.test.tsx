import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { TodoCard } from "@entities/todo/ui/TodoCard.tsx";
import type { Todo } from "@entities/todo/model/types.ts";

describe("TodoCard", () => {
  const mockIncompleteTodo: Todo = {
    id: 2,
    title: "Incomplete Todo",
    completed: false,
    userId: 1,
  };
  it("renders without crashing", () => {
    render(<TodoCard todo={mockIncompleteTodo} />);
    expect(screen.getByText("Incomplete Todo")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 5 })).toHaveTextContent(
      "Incomplete Todo",
    );
  });
  it('should highlight "No" chip when todo is non completed', () => {
    render(<TodoCard todo={mockIncompleteTodo} />);
    const yesChip = screen.getByText("Yes").closest(".MuiChip-root");
    const noChip = screen.getByText("No").closest(".MuiChip-root");

    expect(noChip).toHaveClass("MuiChip-colorPrimary");
    expect(yesChip).not.toHaveClass("MuiChip-colorPrimary");
  });

  it("should handle click event if card is clickable", () => {
    const handleClick = vi.fn();
    render(<TodoCard todo={mockIncompleteTodo} onClick={handleClick} />);

    const card = screen.getByTestId(mockIncompleteTodo.id);
    fireEvent.click(card);

    expect(handleClick).toHaveBeenCalledWith(expect.any(Object));
  });
});
