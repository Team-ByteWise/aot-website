import * as React from "react";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Theme, ThemeProvider } from "@mui/material/styles";
import TopAppBar from "../components/TopAppBar/TopAppBar";
import Hero from "../components/Hero/Hero";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import NavBarItems from "../data/NavBarItems";
import {
  OverlayScrollbarsComponent,
  useOverlayScrollbars,
} from "overlayscrollbars-react";

interface HomePageProps {
  mode: PaletteMode;
  theme: Theme;
  toggleColorMode: () => void;
}

export default function HomePage({ mode, theme, toggleColorMode }: HomePageProps) {
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
    <ThemeProvider theme={theme}>
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
