import { useParams } from "react-router";
import { Box, Typography } from "@mui/material";

export const TodoPage = () => {
  const { id } = useParams();
  return (
    <Box>
      <Typography component="h1" variant="h5">
        {id}
      </Typography>
    </Box>
  );
};
