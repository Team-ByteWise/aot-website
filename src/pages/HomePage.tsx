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
import Footer from "../components/Footer/Footer";
import NavBarItems from "../data/NavBarItems";
import {
  OverlayScrollbarsComponent,
  useOverlayScrollbars,
} from "overlayscrollbars-react";

export default function HomePage() {
  let currentTheme = localStorage.getItem("theme");
  if (!currentTheme) currentTheme = "light";

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

  const ref = React.createRef<HTMLDivElement>();

  const [initBodyOverlayScrollbars] = useOverlayScrollbars({
    defer: true,
    options: {
      scrollbars: {
        theme: mode === "dark" ? "os-theme-light" : "os-theme-dark",
      },
    },
  });

  useEffect(() => {
    initBodyOverlayScrollbars(ref.current!);
  }, [initBodyOverlayScrollbars, ref]);

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <TopAppBar
        mode={mode}
        toggleColorMode={toggleColorMode}
        navBarItems={NavBarItems}
      />

      <OverlayScrollbarsComponent
        className="overlayscrollbars-react"
        options={{
          scrollbars: {
            autoHide: "scroll",
            clickScroll: true,
          },
        }}
        defer
      >
        <div style={{ height: "100vh" }} ref={ref}>
          <Hero />
          <Box sx={{ bgcolor: "background.default" }}>
            <Divider />
          </Box>
          <Footer mode={mode} />
        </div>
      </OverlayScrollbarsComponent>
    </ThemeProvider>
  );
}
