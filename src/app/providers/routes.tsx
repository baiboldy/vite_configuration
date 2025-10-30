import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "@pages/home";
import { AboutPage } from "@pages/about";
import { lazy } from "react";

const ProfilePage = lazy(() => import("@pages/profile"));

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};
