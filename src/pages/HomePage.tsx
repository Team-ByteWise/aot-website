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
import { NestedRecord } from "../data/NavBarTypes";

export default function LandingPage() {
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

  const navBarItems: NestedRecord = {
    Academics: {
      Departments: {
        "B. Tech": [
          { title: "CSBS", link: "#" },
          { title: "CSE", link: "#" },
          { title: "ECE", link: "#" },
          { title: "EE", link: "#" },
          { title: "EEE", link: "#" },
          { title: "EIE", link: "#" },
          { title: "IT", link: "#" },
          { title: "ME", link: "#" },
        ],
        PG: [
          { title: "MBA", link: "#" },
          { title: "MCA", link: "#" },
        ],
      },
      Programs: [
        { title: "UG Programs", link: "#" },
        { title: "PG Programs", link: "#" },
        { title: "Program Structure", link: "#" },
        { title: "Regulations", link: "#" },
        { title: "Curriculum", link: "#" },
      ],
      Resources: [
        { title: "Library", link: "library" },
        { title: "Moodle", link: "moodle" },
      ],
      Admission: [
        { title: "UG Admission", link: "#" },
        { title: "PG Admission", link: "#" },
      ],
    },
    Research: [
      { title: "Current Research", link: "#" },
      { title: "Past Research", link: "#" },
      { title: "Research Facilities", link: "#" },
    ],
    Students: [
      { title: "Life @ AOT", link: "#" },
      { title: "Campus Facilities", link: "#" },
      { title: "Career Services", link: "#" },
      { title: "Events", link: "#" },
    ],
    Faculty: [
      { title: "Faculty List", link: "#" },
      { title: "Faculty Positions", link: "#" },
      { title: "Career Benefits @ AOT", link: "#" },
    ],
  };

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <TopAppBar mode={mode} toggleColorMode={toggleColorMode} navBarItems={navBarItems} />
      <Hero mode={mode} />
      <Box sx={{ bgcolor: "background.default" }}>
        <Divider />
      </Box>
    </ThemeProvider>
  );
}
