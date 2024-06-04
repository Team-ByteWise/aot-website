import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RedirectPage from "./pages/RedirectPage";
import DepartmentPage from "./pages/DepartmentPage";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import FacultyListPage from "./pages/FacultyListPage";
import "overlayscrollbars/overlayscrollbars.css";
import ChatBot from "./components/ChatBot/ChatBot";
import React, { useEffect } from "react";
import { createTheme, PaletteMode } from "@mui/material";
import getTheme from "./Theme";

function App() {
  let currentTheme = localStorage.getItem("theme");
  if (!currentTheme) currentTheme = "light";

  const [mode, setMode] = React.useState<PaletteMode>(
    currentTheme as "dark" | "light"
  );
  const theme = createTheme(getTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage mode={mode} theme={theme} toggleColorMode={toggleColorMode} />
      ),
    },
    {
      path: "/department/:department",
      element: (
        <DepartmentPage
          mode={mode}
          theme={theme}
          toggleColorMode={toggleColorMode}
        />
      ),
    },
    {
      path: "/faculty/list",
      element: (
        <FacultyListPage
          mode={mode}
          theme={theme}
          toggleColorMode={toggleColorMode}
        />
      ),
    },
    {
      path: "/moodle",
      element: (
        <RedirectPage theme={theme} to="http://182.74.215.198/moodle/" />
      ),
    },
    {
      path: "/library",
      element: <RedirectPage theme={theme} to="https://aothopac.lsease.in/" />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ChatBot mode={mode} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
