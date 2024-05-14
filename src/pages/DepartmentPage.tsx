import React from "react";
import {
  Container,
  PaletteMode,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TopAppBar from "../components/TopAppBar/TopAppBar";
import getTheme from "../Theme";
import { useEffect } from "react";
import { NestedRecord } from "../data/NavBarTypes";
import Footer from "../components/Footer/Footer";
import image5 from "../assets/images/image_5.png";
import { useNavigate, useParams } from "react-router-dom";
import Departments from "../conditions/Departments";
import CustomCard from "../components/CustomCard/CustomCard";
import person from "../assets/images/person.png";

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

  const navBarItems: NestedRecord = {
    Academics: {
      Departments: {
        "B. Tech": [
          { title: "CSBS", link: "/department/CSBS" },
          { title: "CSE", link: "/department/CSE" },
          { title: "ECE", link: "/department/ECE" },
          { title: "EE", link: "/department/EE" },
          { title: "EEE", link: "/department/EEE" },
          { title: "EIE", link: "#" },
          { title: "IT", link: "#" },
          { title: "ME", link: "/department/ME" },
        ],
        PG: [
          { title: "MBA", link: "/department/MBA" },
          { title: "MCA", link: "/department/MCA" },
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

  const navigate = useNavigate();
  const matchesSM = useMediaQuery(Theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(Theme.breakpoints.down("md"));
  const { department } = useParams();
  const dept = department as keyof typeof Departments;

  if (department == undefined || !Departments[dept]) {
    navigate("/");
    return <div></div>;
  }

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <TopAppBar
        mode={mode}
        toggleColorMode={toggleColorMode}
        navBarItems={navBarItems}
      />
      <Container
        maxWidth="xl"
        sx={{
          mt: { xs: 15, md: 25 },
        }}
      >
        <Stack
          spacing={{ xs: 2, md: 5, lg: 10 }}
          direction={{ xs: "column", md: "column", lg: "row" }}
          sx={{ pb: { xs: 5, md: 5, lg: 10 } }}
        >
          <img
            src={image5}
            alt={"Alt"}
            style={{
              width: "auto",
              objectFit: "cover",
              height: matchesSM ? "150px" : matchesMD ? "250px" : "350px",
              boxShadow: "0 0 12px 5px #00000029",
            }}
          />
          <Stack spacing={{ xs: 2, md: 5, lg: 8 }} direction={"column"}>
            <Typography
              textAlign={{ xs: "center", md: "center", lg: "left" }}
              variant="h4"
              fontWeight={"bold"}
              marginBottom={"20px"}
              sx={{
                fontSize: { xs: 25, sm: 40 },
                "& span": { color: "#1F278D" },
              }}
            >
              Welcome to AOT, Department of{" "}
              <span>{Departments[dept].name}</span>
            </Typography>
            <Typography
              textAlign={{ xs: "center", md: "center", lg: "left" }}
              variant="h5"
              fontWeight={"bold"}
              marginBottom={"20px"}
              sx={{ fontSize: 20 }}
            >
              “{Departments[dept].tagLine}”
            </Typography>
          </Stack>
        </Stack>

        <Stack
          spacing={{ xs: 2, md: 5, lg: 10 }}
          direction={{ xs: "column", md: "column", lg: "row" }}
          sx={{ pb: { xs: 5, md: 7, lg: 10 }, pt: { xs: 5, md: 7, lg: 10 } }}
        >
          <Stack spacing={{ xs: 2, md: 5, lg: 8 }} direction={"column"}>
            <Typography
              textAlign={"center"}
              variant="h4"
              fontWeight={"bold"}
              marginBottom={"20px"}
              sx={{
                fontSize: { xs: 25, sm: 40 },
                "& span": { color: "#1F278D" },
              }}
            >
              About our <span>Department</span>
            </Typography>
            <Typography
              variant="h5"
              textAlign={"center"}
              fontWeight={"regular"}
              marginBottom={"20px"}
              sx={{ fontSize: { xs: 15, sm: 18, md: 20 } }}
            >
              {Departments[dept].about}
            </Typography>
          </Stack>
          <img
            src={image5}
            alt={"Alt"}
            style={{
              width: "auto",
              objectFit: "cover",
              height: matchesSM ? "150px" : matchesMD ? "250px" : "350px",
              boxShadow: "0 0 12px 5px #00000029",
            }}
          />
        </Stack>

        <Stack
          spacing={{ xs: 2, md: 5, lg: 10 }}
          direction={{ xs: "column", md: "column", lg: "row" }}
          sx={{ pb: { xs: 5, md: 7, lg: 10 }, pt: { xs: 5, md: 7, lg: 10 } }}
        >
          <img
            src={image5}
            alt={"Alt"}
            style={{
              width: "auto",
              objectFit: "cover",
              height: matchesSM ? "150px" : matchesMD ? "250px" : "350px",
              boxShadow: "0 0 12px 5px #00000029",
            }}
          />
          <Stack spacing={{ xs: 2, md: 5, lg: 8 }} direction={"column"}>
            <Typography
              textAlign={"center"}
              variant="h4"
              fontWeight={"bold"}
              marginBottom={"20px"}
              sx={{
                fontSize: { xs: 25, sm: 40 },
                "& span": { color: "#1F278D" },
              }}
            >
              {Departments[dept].placementStatistics.year}
              {" Placement "}
              <span>Statistics</span>
            </Typography>
            <Stack spacing={-0.05} direction={"column"}>
              <Typography
                variant="h5"
                textAlign={"center"}
                fontWeight={"bold"}
                marginBottom={"20px"}
                sx={{
                  fontSize: { xs: 15, sm: 18, md: 20 },
                  "& span": { color: "#1F278D" },
                }}
              >
                <span>{Departments[dept].placementStatistics.percentage}%</span>{" "}
                Overall Placement
              </Typography>
              <Typography
                variant="h5"
                textAlign={"center"}
                fontWeight={"bold"}
                marginBottom={"20px"}
                sx={{
                  fontSize: { xs: 15, sm: 18, md: 20 },
                  "& span": { color: "#1F278D" },
                }}
              >
                (
                <span>
                  {Departments[dept].placementStatistics.placedStudents}
                </span>{" "}
                Students got{" "}
                <span>{Departments[dept].placementStatistics.totalOffers}</span>{" "}
                Placement Offers)
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Container
          maxWidth="xl"
          sx={{ pb: { xs: 5, md: 7, lg: 10 }, pt: { xs: 5, md: 7, lg: 10 } }}
        >
          <Stack spacing={{ xs: 1, md: 2, lg: 3 }} direction={"column"}>
            <Typography
              textAlign={"center"}
              variant="h4"
              fontWeight={"bold"}
              marginBottom={"20px"}
              sx={{
                fontSize: { xs: 25, sm: 40 },
                "& span": { color: "#1F278D" },
              }}
            >
              HOD's <span>Message</span>
            </Typography>
            <CustomCard>
              <Stack spacing={{ xs: 1, md: 2, lg: 3 }} direction={"column"}>
                <Stack direction={"row"} spacing={2} alignItems="center">
                  <img
                    src={person}
                    alt="SS"
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                      width: "50px",
                      height: "50px",
                    }}
                  />
                  <Stack spacing={-0.5} direction={"column"}>
                    <Typography
                      variant="h5"
                      fontWeight={"bold"}
                      marginBottom={"20px"}
                      sx={{
                        fontSize: { xs: 15, sm: 20 },
                        "& span": { color: "#1F278D" },
                      }}
                    >
                      Mr. AOT
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      marginBottom={"20px"}
                      sx={{
                        fontSize: { xs: 10, sm: 15 },
                        "& span": { color: "#1F278D" },
                      }}
                    >
                      Head of Department
                    </Typography>
                  </Stack>
                </Stack>

                <Typography
                  textAlign={"center"}
                  variant="body1"
                  marginBottom={"20px"}
                  sx={{
                    fontSize: { xs: 15, sm: 20 },
                    "& span": { color: "#1F278D" },
                  }}
                >
                  “{Departments[dept].about}”
                </Typography>
              </Stack>
            </CustomCard>
          </Stack>
        </Container>
      </Container>
      <Footer mode={mode} />
    </ThemeProvider>
  );
}
