import { Grid, Theme, alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import image1 from "../../assets/images/image_1.png";
import image2 from "../../assets/images/image_2.png";
import image3 from "../../assets/images/image_3.png";
import image4 from "../../assets/images/image_4.png";
import NewsBulletin from "../NewsBulletin/NewsBulletin";
import newsArray from "../../assets/data/news.json";
import announcementsArray from "../../assets/data/announcements.json";
import eventsArray from "../../assets/data/events.json";
import { Link } from "@mui/material";
import Carousel, {SlideImage} from "../Carousel/Carousel";

export default function Hero() {
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

  const slideImages: SlideImage[] = [
    {
      image: image1,
      alt: "Image 1",
      text: "“The Gates of Success in life Swings on the hinges of Education”",
      buttonText: "Explore",
      link: "/",
    },
    {
      image: image2,
      alt: "Image 2",
      text: "“Engineering is the VISA to Innovation”",
      buttonText: "Take Website Tour",
      link: "/about",
    },
    {
      image: image3,
      alt: "Image 3",
      text: "“The harder the battle, the sweeter the victory”",
      buttonText: "Meet our Faculty",
      link: "/faculty",
    },
    {
      image: image4,
      alt: "Image 4",
      text: "“Education is the most powerful weapon which you can use to change the world.”",
      buttonText: "Check out our Placement Records",
      link: "/placement",
    },
  ];

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
        sx={{
          minWidth: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 25, sm: 25 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Container sx={{ minWidth: "100%", width: "100%" }}>
          <Carousel
            slideImages={slideImages}
            sx={{ height: "500px", borderRadius: "20px" }}
          />
        </Container>

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
                  sx={{ fontSize: { xs: 25, sm: 40 } }}
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
                  sx={{ fontSize: { xs: 25, sm: 40 } }}
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
