import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Faculty } from "../../data/Faculty";
import { Department } from "../../data/Departments";
import image5 from "../../assets/images/image_5.png"

interface DepartmentFacultyProps {
  department: Department;
}

const DepartmentFaculty = ({ department }: DepartmentFacultyProps) => {
  return (
    <>
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
        textAlign={{ xs: "center", md: "center", lg: "center" }}
        variant="h4"
        fontWeight={"bold"}
        sx={{
          fontSize: { xs: 25, sm: 40 },
          mt: 5,
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
              {department.facultyInfo.facultyList.map((faculty: Faculty) => (
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
    </>
  );
};

export default DepartmentFaculty;
