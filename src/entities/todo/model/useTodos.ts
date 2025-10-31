import { useEffect, useState, useTransition } from "react";
import type { Todo } from "@entities/todo/model/types.ts";
import { todoApi } from "@entities/todo/api/todo.api.ts";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isPending, start] = useTransition();

  useEffect(() => {
    start(async () => {
      await todoApi.getAllTodos().then(setTodos);
    });
  }, []);

  return { isPending, todos };
};
