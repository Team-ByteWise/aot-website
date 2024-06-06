import { PaletteMode, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import image4 from "../../assets/images/image_4.png";
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter";
import heroData from "../../assets/data/hero_data.json";

interface SummaryProps {
  mode: PaletteMode;
}

const Summary = ({ mode }: SummaryProps) => {
  return (
    <div
      style={{
        height: "300px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "15px",
      }}
    >
      <img
        src={image4}
        alt="Image 1"
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "300px",
          backgroundColor:
            mode === "light" ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.8)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "100%",
          zIndex: 2,
          textAlign: "left",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            px: { xs: 2, sm: 5, md: 10 },
          }}
          spacing={{ xs: 2, sm: 5, md: 10 }}
        >
          {heroData.map((item, index) => (
            <Stack key={index} direction="row" spacing={2} alignItems="center">
              <AnimatedCounter
                targetNumber={item.amount}
                appendText={item.appendText}
                fontWeight={"bold"}
                fontSize={{
                  xs: "1.2rem",
                  sm: "1.5rem",
                  md: "2.5rem",
                  lg: "3rem",
                }}
                animationDuration={1000}
                color="white"
              />

              <Typography
                fontWeight={"bold"}
                fontSize={{
                  xs: "0.8rem",
                  sm: "1rem",
                  md: "1.2rem",
                  lg: "1.5rem",
                }}
                sx={{
                  textTransform: "uppercase",
                }}
                color={"white"}
              >
                {item.caption.split(" ").map((word, index) => (
                  <span key={index}>
                    {word}
                    <br />
                  </span>
                ))}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default Summary;
