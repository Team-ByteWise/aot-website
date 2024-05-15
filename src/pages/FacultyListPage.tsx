import React from "react";
import {
  Container,
  PaletteMode,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TopAppBar from "../components/TopAppBar/TopAppBar";
import getTheme from "../Theme";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import image5 from "../assets/images/image_5.png";
import facultyList from "../assets/data/faculty.json";
import NavBarItems from "../data/NavBarItems";

interface FacultyProfile {
  Name: string;
  Designation: string;
  "Highest Qualification": string;
  Experience: string;
}

export default function DepartmentPage() {
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={image5}
          alt={"Alt"}
          style={{
            width: "100%",
            objectFit: "cover",
            height: "30vh",
            boxShadow: "0 0 12px 5px #00000029",
          }}
        />

        <Typography
          textAlign={{ xs: "center", md: "center", lg: "left" }}
          variant="h4"
          fontWeight={"bold"}
          sx={{
            fontSize: { xs: 25, sm: 40 },
            mt: 5,
            "& span": { color: "#1F278D" },
          }}
        >
          Faculty List
        </Typography>
        <Container maxWidth="xl" sx={{ pb: { xs: 5, md: 7, lg: 10 }, pt: 5 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6" fontWeight={"bold"}>
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" fontWeight={"bold"}>
                      Designation
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" fontWeight={"bold"}>
                      Highest Qualification
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" fontWeight={"bold"}>
                      Experience
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {facultyList.map((faculty: FacultyProfile) => (
                  <TableRow>
                    <TableCell>{faculty.Name}</TableCell>
                    <TableCell>{faculty.Designation}</TableCell>
                    <TableCell>{faculty["Highest Qualification"]}</TableCell>
                    <TableCell>{faculty.Experience}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Container>
      <Footer mode={mode} />
    </ThemeProvider>
  );
}
