import { Routes, Route } from "react-router-dom";
// import { Home } from "../pages/Home";
import { Explore } from "../pages/Explore";
import { MakeQuestions } from "../pages/MakeQuestions";
import { Settings } from "../pages/Settings";
import { Information } from "../pages/Information";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/make-questions" element={<MakeQuestions />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/info" element={<Information />} />
    </Routes>
  );
}
