import { Box, Card, Chip, Divider, Stack, Typography } from "@mui/material";
import type { Todo } from "@entities/todo/model/types.ts";

type Props = {
  todo: Todo;
};

export const TodoCard = ({ todo }: Props) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 360, width: "100%" }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {todo.title}
          </Typography>
        </Stack>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Completed
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip
            color={todo.completed ? "primary" : undefined}
            label="Yes"
            size="small"
          />
          <Chip
            color={(!todo.completed && "primary") || undefined}
            label="No"
            size="small"
          />
        </Stack>
      </Box>
    </Card>
  );
};
