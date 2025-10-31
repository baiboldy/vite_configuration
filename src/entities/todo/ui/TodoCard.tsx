import { Box, Card, Chip, Divider, Stack, Typography } from "@mui/material";
import type { Todo } from "@entities/todo/model/types.ts";

type Props = {
  todo: Todo;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const TodoCard = ({ todo, onClick }: Props) => {
  return (
    <Card
      onClick={onClick}
      data-testid={todo.id}
      data-id={todo.id}
      variant="outlined"
      sx={{
        maxWidth: 360,
        width: "100%",
        height: 210,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
    >
      <Box sx={{ p: 2, flex: 1 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography gutterBottom variant="h5" component="h5">
            {todo.title}
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ flex: "auto", maxHeight: 72 }}>
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
      </Box>
    </Card>
  );
};
