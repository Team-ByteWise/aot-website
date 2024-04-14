import * as React from "react";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TopAppBar from "../components/TopAppBar/TopAppBar";
import Hero from "../components/Hero/Hero";
import getTheme from "../Theme";
import { useEffect } from "react";

export default function LandingPage() {
  let currentTheme = localStorage.getItem("theme");
  if (!currentTheme) currentTheme = "dark";

  const [mode, setMode] = React.useState<PaletteMode>(
    currentTheme as "dark" | "light"
  );
  const Theme = createTheme(getTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <TopAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero mode={mode} />
      <Box sx={{ bgcolor: "background.default" }}>
        <Divider />
      </Box>
    </ThemeProvider>
  );
}
