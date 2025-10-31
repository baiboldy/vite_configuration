import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "@pages/home";
import { AboutPage } from "@pages/about";
import { lazy } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@app/providers/theme.ts";

const ProfilePage = lazy(() => import("@pages/profile"));

export const Routing = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
