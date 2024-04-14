import { Grid, PaletteMode, Theme, alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AOTLogo from "../AOTLogo/AOTLogo";
import NewsBulletin from "../NewsBulletin/NewsBulletin";
import newsArray from "../../assets/data/news.json";
import announcementsArray from "../../assets/data/announcements.json";
import eventsArray from "../../assets/data/events.json";
import { Link } from "@mui/material";

interface HeroProps {
  mode: PaletteMode;
}

export default function Hero({ mode }: HeroProps) {
  const logoStyle = {
    width: "30vh",
    height: "auto",
  };

  const gridStyle = (theme: Theme) => ({
    alignSelf: "center",
    backgroundImage:
      theme.palette.mode === "light"
        ? 'url("/static/images/templates/templates-images/hero-light.png")'
        : 'url("/static/images/templates/templates-images/hero-dark.png")',
    backgroundSize: "cover",
    borderRadius: "10px",
    outline: "1px solid",
    outlineColor:
      theme.palette.mode === "light"
        ? alpha("#BFCCD9", 0.5)
        : alpha("#9CCCFC", 0.1),
    boxShadow:
      theme.palette.mode === "light"
        ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
        : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
  });

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 25, sm: 25 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AOTLogo mode={mode} style={logoStyle} />
          </Box>

          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            Academy Of Technology
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Translate your vision into reality
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Approved by AICTE, Affiliated to MAKAUT, Accredited by NBA & Ranked
            by NIRF
          </Typography>
        </Stack>

        <Container
          style={{
            marginTop: "50px",
          }}
          sx={gridStyle}
          maxWidth="xl"
        >
          <NewsBulletin newsArray={newsArray} />
        </Container>

        <Container
          maxWidth="xl"
          sx={{
            mt: { xs: 8, sm: 10 },
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "flex-start",
            alignItems: "left",
            justifyContent: "space-between",
          }}
        >
          <Grid
            style={{ display: "flex" }}
            container
            gap={{ xs: 3, sm: 5, md: 10 }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid
              item
              width={{ xs: "100%", sm: "100%", md: "40%" }}
              sx={gridStyle}
            >
              <Container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "flex-start",
                  alignItems: "center",
                }}
                sx={{ my: 5 }}
              >
                <Typography
                  textAlign="center"
                  variant="h4"
                  marginBottom={"20px"}
                >
                  Announcements
                </Typography>

                {announcementsArray.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      textAlign="center"
                      color="text.secondary"
                      sx={{
                        margin: { sm: "3px", md: "5px" },
                      }}
                      href={item.link}
                      underline="none"
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </Container>
            </Grid>

            <Grid
              item
              width={{ xs: "100%", sm: "100%", md: "40%" }}
              sx={gridStyle}
            >
              <Container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "flex-start",
                  alignItems: "center",
                }}
                sx={{ my: 5 }}
              >
                <Typography
                  textAlign="center"
                  variant="h4"
                  marginBottom={"20px"}
                >
                  Events
                </Typography>

                {eventsArray.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      textAlign="center"
                      color="text.secondary"
                      sx={{
                        margin: { sm: "3px", md: "5px" },
                      }}
                      href={item.link}
                      underline="none"
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
