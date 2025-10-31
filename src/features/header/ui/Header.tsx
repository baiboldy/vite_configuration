import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router";
import { appConfig } from "@shared/config/app-config.ts";

export const Header = () => {
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {appConfig.app.name}
            </Typography>
            <Button color="inherit">Sign in</Button>
            <Button color="inherit">Sign up</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};
