import { Box } from "@mui/material";
import { TodoList } from "@features/todo-list/ui/TodoList.tsx";

export const HomePage = () => {
  return (
    <Box>
      <h1>Home page</h1>
      <TodoList />
    </Box>
  );
};
