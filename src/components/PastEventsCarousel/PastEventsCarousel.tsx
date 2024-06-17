import { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Grid,
  useTheme,
  useMediaQuery,
  Stack,
  PaletteMode,
  Typography,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { PastEvent } from "../../data/PastEvent";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";

const timeInterval = 2000;

interface PhotoCarouselProps {
  mode: PaletteMode;
  pastEvents: PastEvent[];
}

const PastEventsCarousel = ({ mode, pastEvents }: PhotoCarouselProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastUserClick, setLastUserClick] = useState(Date.now());
  const [isHovered, setIsHovered] = useState(false);
  const [loadingArray, setLoadingArray] = useState([true, true, true]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pastEvents.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    resetLoadingArray();
    setCurrentIndex((prevIndex) =>
      prevIndex === pastEvents.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (isHovered || loadingArray.some((loading) => loading)) return;
    const interval = setInterval(() => {
      if (Date.now() > lastUserClick + timeInterval) handleNext();
    }, timeInterval);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastUserClick, isHovered, loadingArray]);

  const handleLoadingChange = (index: number, isLoading: boolean) => {
    setLoadingArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = isLoading;
      return newArray;
    });
  };

  const resetLoadingArray = () => {
    setLoadingArray([true, true, true]);
  }

  const visiblePastEvents = isMobile
    ? [pastEvents[currentIndex]]
    : [
        pastEvents[currentIndex],
        pastEvents[(currentIndex + 1) % pastEvents.length],
        pastEvents[(currentIndex + 2) % pastEvents.length],
      ];

  const renderPastEvents = () => {
    return visiblePastEvents.map((pastEvent, index) => (
      <Grid
        item
        key={`${pastEvent.image}-${currentIndex}-${index}`}
        sx={{ position: "relative", overflow: "hidden", borderRadius: "10px" }}
      >
        <ProgressiveImage
          src={pastEvent.image}
          alt={pastEvent.title}
          sx={{
            width: isMobile
              ? "100%"
              : {
                  lg: index === 1 ? "450px" : "300px",
                  xl: index === 1 ? "600px" : "400px",
                  xxl: index === 1 ? "750px" : "500px",
                },
            height: isMobile
              ? "auto"
              : {
                  lg: index === 1 ? "250px" : "200px",
                  xl: index === 1 ? "300px" : "225px",
                  xxl: index === 1 ? "350px" : "250px",
                },
            aspectRatio: "4/3",
            transition: "transform 0.5s ease-in-out",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          onLoadingChange={(isLoading) => handleLoadingChange(index, isLoading)}
        />
        <Box
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: isMobile
              ? "100%"
              : {
                  lg: index === 1 ? "450px" : "300px",
                  xl: index === 1 ? "600px" : "400px",
                  xxl: index === 1 ? "750px" : "500px",
                },
            height: isMobile
              ? "auto"
              : {
                  lg: index === 1 ? "250px" : "200px",
                  xl: index === 1 ? "300px" : "225px",
                  xxl: index === 1 ? "350px" : "250px",
                },
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: 0,
            transition: "opacity 0.3s ease-in-out",
            display: "flex",
            color: "#fff",
            borderRadius: "10px",
            "&:hover": {
              opacity: 1,
            },
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "start",
            p: 2,
          }}
        >
          <Typography variant="h6">{pastEvent.title}</Typography>
          <Typography
            variant="body2"
            color={mode == "dark" ? "text.secondary" : "text.semiSecondary"}
          >
            {pastEvent.date}
          </Typography>
        </Box>
      </Grid>
    ));
  };

  const renderDots = () => {
    return pastEvents.map((_, index) => (
      <Box
        key={index}
        onClick={() => {
          setCurrentIndex(index);
          setLastUserClick(Date.now());
        }}
        sx={{
          width: currentIndex === index ? 12 : 8,
          height: currentIndex === index ? 12 : 8,
          borderRadius: "50%",
          backgroundColor:
            currentIndex === index
              ? theme.palette.primary.main
              : theme.palette.grey[400],
          margin: "0 4px",
          transition: "all 0.1s ease-in-out",
          cursor: "pointer",
        }}
      />
    ));
  };

  return (
    <Stack
      direction={"column"}
      spacing={2}
      sx={{ display: "flex", width: "100%", textAlign: "center" }}
    >
      <Grid
        container
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        alignContent={"center"}
        gap={2}
      >
        {renderPastEvents()}
      </Grid>

      <Stack
        direction={"row"}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
        gap={5}
      >
        <IconButton
          sx={{
            backgroundColor: mode == "light" ? "#9CCCFC" : "#033363",
          }}
          onClick={() => {
            setLastUserClick(Date.now());
            handlePrevious();
          }}
        >
          <ArrowBack />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {renderDots()}
        </Box>
        <IconButton
          sx={{
            backgroundColor: mode == "light" ? "#9CCCFC" : "#033363",
          }}
          onClick={() => {
            setLastUserClick(Date.now());
            handleNext();
          }}
        >
          <ArrowForward />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default PastEventsCarousel;
