import {
  Container,
  PaletteMode,
  Stack,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import image5 from "../../assets/images/image_5.png";
import { Department } from "../../data/Departments";
import CustomCard from "../../components/CustomCard/CustomCard";
import person from "../../assets/images/person.png";
import getTheme from "../../Theme";


interface DepartmentAboutProps {
    mode: PaletteMode;
    department: Department;
}

const DepartmentAbout = ({mode, department}: DepartmentAboutProps) => {
  const Theme = createTheme(getTheme(mode));
  const matchesSM = useMediaQuery(Theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(Theme.breakpoints.down("md"));

  return (
    <>
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
            Welcome to AOT, Department of{"\n"}
            <span>{department.name}</span>
          </Typography>
          <Typography
            textAlign={{ xs: "center", md: "center", lg: "left" }}
            variant="h5"
            fontWeight={"bold"}
            marginBottom={"20px"}
            sx={{ fontSize: 20 }}
          >
            “{department.tagLine}”
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
            {department.about}
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
            {department.placementStatistics.year}
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
              <span>{department.placementStatistics.percentage}%</span>{" "}
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
                {department.placementStatistics.placedStudents}
              </span>{" "}
              Students got{" "}
              <span>{department.placementStatistics.totalOffers}</span>{" "}
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
                “{department.about}”
              </Typography>
            </Stack>
          </CustomCard>
        </Stack>
      </Container>
    </>
  );
};

export default DepartmentAbout;
