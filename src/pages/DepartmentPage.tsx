import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  PaletteMode,
  Stack,
  Toolbar,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TopAppBar from "../components/TopAppBar/TopAppBar";
import getTheme from "../Theme";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import departments from "../data/Departments";
import NavBarItems from "../data/NavBarItems";
import DepartmentAbout from "../components/Department/DepartmentAbout";
import DepartmentFaculty from "../components/Department/DepartmentFaculty";
import DepartmentEvent from "../components/Department/DepartmentEvent";

const subNavBarItems = ["About", "Faculty", "Events"];

export default function DepartmentPage() {
  let currentTheme = localStorage.getItem("theme");
  if (!currentTheme) currentTheme = "light";

  const [selectedButton, setSelectedButton] = useState<string>();

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

  useEffect(() => {
    setSelectedButton(subNavBarItems[0]);
  }, []);

  const navigate = useNavigate();

  const { department } = useParams();
  const dept = department as keyof typeof departments;

  if (department == undefined || !departments[dept]) {
    navigate("/");
    return <div></div>;
  }

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <TopAppBar
        mode={mode}
        toggleColorMode={toggleColorMode}
        navBarItems={NavBarItems}
      />
      <Container
        maxWidth="xl"
        sx={{
          mt: { xs: 15, md: 25 },
        }}
      >
        <AppBar
          position="static"
          sx={{
            boxShadow: 0,
            bgcolor: "transparent",
            backgroundImage: "none",
          }}
        >
          <Toolbar
            sx={{
              borderBottom:
                mode === "light"
                  ? "1px solid rgba(247, 248, 250, 1)"
                  : "1px solid rgba(24, 28, 32, 1)",
              pb: 2,
              mb: 5,
            }}
          >
            <Stack
              direction={"row"}
              spacing={7}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ width: "100%" }}
            >
              {subNavBarItems.map((item) => (
                <Button
                  variant="outlined"
                  onClick={() => {
                    setSelectedButton(item);
                  }}
                  sx={{
                    backgroundColor:
                      selectedButton === item ? "primary.main" : "inherit", // Highlight the selected button
                    color: selectedButton === item ? "#fff" : "",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Stack>
          </Toolbar>
        </AppBar>

        <Box sx={{}}>
          {selectedButton === "About" && (
            <DepartmentAbout mode={mode} department={departments[dept]} />
          )}
          {selectedButton === "Faculty" && (
            <DepartmentFaculty department={departments[dept]} />
          )}
          {selectedButton === "Events" && <DepartmentEvent />}
        </Box>
      </Container>

      <Footer mode={mode} />
    </ThemeProvider>
  );
}
