import {
  Container,
  Typography,
  Grid,
  Stack,
  Box,
  PaletteMode,
  Link,
} from "@mui/material";
import AOTLogo from "../AOTLogo/AOTLogo";
import { HomeOutlined, MailOutline, PhoneOutlined } from "@mui/icons-material";

export default function Footer({ mode }: { mode: PaletteMode }) {
  const divStyle = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "fit-content",
    px: "0.7rem",
    gap: "0.5rem",
  };

  return (
    <footer
      style={{
        backgroundColor: mode === "light" ? "#C9EBFF" : "#070812",
      }}
    >
      <Container
        sx={{
          minWidth: "100%",
        }}
      >
        <Grid
          style={{ display: "flex" }}
          container
          justifyContent="space-between"
          alignContent={"flex-start"}
          alignItems={"flex-start"}
        >
          <Grid
            item
            width={{ xs: "100%", sm: "100%", md: "30%" }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "flex-start",
              alignItems: "center",
              mt: 5,
              mb: 2,
            }}
          >
            <Stack
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
                alignItems: "center",
              }}
              spacing={2}
              direction={"column"}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <AOTLogo
                  mode={mode}
                  style={{
                    width: "auto",
                    height: "8vh",
                    padding: "0.7rem",
                    cursor: "pointer",
                    marginRight: "1em",
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={"bold"}
                    color={mode === "light" ? "#262A63" : "#C9EBFF"}
                  >
                    ACADEMY OF TECHNOLOGY
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Translate your vision into reality
                  </Typography>
                  <Typography variant="body2" color="text.semiSecondary">
                    Approved by AICTE, Affiliated to MAKAUT, Accredited by NBA &
                    Ranked by NIRF
                  </Typography>
                </Box>
              </Box>

              <Box sx={divStyle}>
                <HomeOutlined sx={{ color: "text.primary" }} />
                <Typography variant="body2" color="text.primary">
                  P.O - Aedconagar, Adisaptagram <br />
                  District - Hooghly, PIN - 712121
                </Typography>
              </Box>

              <Box sx={divStyle}>
                <MailOutline sx={{ color: "text.primary" }} />
                <Typography variant="body2" color="text.primary">
                  <Link href="mailto:academy@aot.edu.in">
                    academy@aot.edu.in
                  </Link>
                </Typography>
              </Box>

              <Box sx={divStyle}>
                <PhoneOutlined sx={{ color: "text.primary" }} />
                <Typography variant="body2" color="text.primary">
                  <Link href="tel:+919830196317">+91-9830196317</Link> /{" "}
                  <Link href="tel:+919073360791">+91-9073360791</Link>
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid
            item
            width={{ xs: "100%", sm: "100%", md: "30%" }}
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              mt: 5,
              mb: 2,
            }}
          >
            <Stack
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
              }}
              spacing={2}
              direction={"column"}
            >
              <Typography
                variant="h6"
                color={mode === "light" ? "#262A63" : "#C9EBFF"}
              >
                Quick Links
              </Typography>
              <Stack
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "flex-start",
                  alignItems: "flex-start",
                }}
                spacing={2}
                direction={"column"}
              >
                <Typography variant="body2" color="text.primary">
                  Academics
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Admissions
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Research
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Students
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Faculty
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid
            item
            width={{ xs: "100%", sm: "100%", md: "30%" }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              mt: 5,
              mb: 2,
            }}
          >
            <Stack
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
              }}
              spacing={2}
              direction={"column"}
            >
              <Typography
                variant="h6"
                color={mode === "light" ? "#262A63" : "#C9EBFF"}
              >
                Navigate
              </Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.892761770176!2d88.37518185226898!3d22.954176193894902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8930eeb863655%3A0xb3a6adf26d41d0b5!2sAcademy%20of%20Technology!5e0!3m2!1sen!2sin!4v1715502116178!5m2!1sen!2sin"
                style={{
                  border: "0",
                  borderRadius: "20px",
                }}
                loading="lazy"
              ></iframe>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          py: 1,
          backgroundImage:
            "linear-gradient(to bottom, rgba(28, 68, 128, 1), rgba(26, 22, 22, 1))",
        }}
      >
        <Typography variant="body2" color="white" align="center">
          © 2024 Academy of Technology, All Rights Reserved.
        </Typography>
      </Box>
    </footer>
  );
}
