import { Grid, Typography } from "@mui/material";
import EventCard from "../EventCard/EventCard";
import { Department } from "../../data/Departments";

interface DepartmentEventProps {
  department: Department;
}

const DepartmentEvent = ({ department }: DepartmentEventProps) => {
  const gridItemSx = {
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
  };

  return (
    <>
      <Typography
        textAlign={{ xs: "center", md: "center", lg: "center" }}
        variant="h4"
        fontWeight={"bold"}
        sx={{
          fontSize: { xs: 25, sm: 40 },
          "& span": { color: "#1F278D" },
        }}
      >
        <span>{department.name}</span>
      </Typography>
      <Typography
        textAlign={{ xs: "center", md: "center", lg: "center" }}
        variant="h4"
        fontWeight={"bold"}
        sx={{
          fontSize: { xs: 25, sm: 40 },
          textDecoration: "underline",
          "& span": { color: "#1F278D" },
          mb: 5,
        }}
      >
        Events
      </Typography>

      <Grid
        style={{ display: "flex" }}
        container
        alignItems="center"
        justifyContent="space-evenly"
        sx={{ mb: 5 }}
      >
        {department.events.map((event) => (
          <Grid
            item
            width={{ xs: "100%", sm: "100%", md: "35%" }}
            sx={gridItemSx}
          >
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DepartmentEvent;
