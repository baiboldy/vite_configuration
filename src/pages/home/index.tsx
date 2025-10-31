import { Box, Container } from "@mui/material";
import { TodoList } from "@features/todo-list/ui/TodoList.tsx";

export const HomePage = () => {
  return (
    <Box>
      <h1>Home page</h1>
      <Container maxWidth="xl">
        <TodoList />
      </Container>
    </Box>
  );
};
