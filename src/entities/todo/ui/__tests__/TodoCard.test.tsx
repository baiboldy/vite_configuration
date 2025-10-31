import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TodoCard } from "@entities/todo/ui/TodoCard.tsx";
import type { Todo } from "@entities/todo/model/types.ts";

describe("TodoCard", () => {
  it("renders without crashing", () => {
    const mockIncompleteTodo: Todo = {
      id: 2,
      title: "Incomplete Todo",
      completed: false,
      userId: 1,
    };
    render(<TodoCard todo={mockIncompleteTodo} />);
    expect(screen.getByText("Incomplete Todo")).toBeInTheDocument();
  });
});
