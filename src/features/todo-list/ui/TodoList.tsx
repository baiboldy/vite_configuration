import { Grid, LinearProgress } from "@mui/material";
import { useTodos } from "@entities/todo/model/useTodos.ts";
import { TodoCard } from "@entities/todo/ui/TodoCard.tsx";
import { useNavigate } from "react-router";
import React from "react";

export const TodoList = () => {
  const navigate = useNavigate();
  const { todos, isPending } = useTodos();

  if (isPending) {
    return <LinearProgress />;
  }

  const onTodoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate("/todo/" + e.currentTarget.dataset.id!);
  };

  return (
    <Grid container spacing={2}>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} onClick={onTodoClick} />
      ))}
    </Grid>
  );
};
