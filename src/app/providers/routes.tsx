import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "@pages/home";
import { ProfilePage } from "@pages/profile";
import { AboutPage } from "@pages/about";

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
