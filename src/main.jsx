import "./utils/setTheme";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import { App } from "./App.jsx";
import { Settings } from "./pages/Settings.jsx";
import { Stats } from "./pages/Stats.jsx";
import { Notes } from "./pages/Notes.jsx";
import { Tasks } from "./pages/Tasks.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </MemoryRouter>
  </StrictMode>
);
