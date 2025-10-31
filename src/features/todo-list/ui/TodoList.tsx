import { CircularProgress, Grid } from "@mui/material";
import { useTodos } from "@entities/todo/model/useTodos.ts";
import { TodoCard } from "@entities/todo/ui/TodoCard.tsx";

export const TodoList = () => {
  const { todos, isPending } = useTodos();

  if (isPending) {
    return <CircularProgress size={20} />;
  }

  return (
    <Grid container spacing={2}>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </Grid>
  );
};
