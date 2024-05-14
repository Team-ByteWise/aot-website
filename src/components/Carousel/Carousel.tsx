import React, { CSSProperties } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Button, styled } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

export interface SlideImage {
  image: string;
  alt: string;
  text: string;
  buttonText: string;
  link: string;
}

const ElevatedButton = styled(Button)({
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  borderRadius: "8px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },
});

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <ElevatedButton
    onClick={onClick}
    style={{
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-100%)",
      zIndex: 1,
    }}
  >
    <ArrowForwardIcon />
  </ElevatedButton>
);

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <ElevatedButton
    onClick={onClick}
    style={{
      position: "absolute",
      left: "10px",
      top: "50%",
      transform: "translateY(-100%)",
      zIndex: 1,
    }}
  >
    <ArrowBackIcon />
  </ElevatedButton>
);

const Carousel = ({ slideImages, sx }: { slideImages: SlideImage[]; sx: CSSProperties }) => {
  const settings: Settings = {
    dots: true,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          zIndex: 5,
          bottom: "5%",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          borderRadius: "10px",
          padding: "10px",
          width: "max-content",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul
          style={{
            margin: "0px",
            padding: "0px",
            alignItems: "center",
            display: "flex",
            color: "primary"
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const floatingStyle: React.CSSProperties = {
    position: "absolute",
    left: "5%",
    zIndex: 2,
    textAlign: "left",
  };

  const imageProperties: React.CSSProperties = {
    width: "100%",
    objectFit: "cover",
    height: sx.height,
    borderRadius: sx.borderRadius,
  };

  const navigate = useNavigate();

  return (
    <div
      style={{ height: sx.height, position: "relative", overflow: "hidden" }}
    >
      <Slider {...settings}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                overflow: "hidden",
                borderRadius: sx.borderRadius,
                height: sx.height,
              }}
            >
              <img src={slideImage.image} alt={slideImage.alt} style={imageProperties} />
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: sx.height,
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  borderRadius: sx.borderRadius,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: sx.height,
                  backgroundImage:
                    "linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))",
                  borderRadius: sx.borderRadius,
                }}
              />
            </div>

            <Typography
              style={{ ...floatingStyle, top: "20%" }}
              color={"primary.dark"}
              fontWeight={"bold"}
              fontSize={{sm: "1.5rem", md: "2rem", lg: "2rem"}}
              maxWidth={{sm: "50%", md: "40%", lg: "30%"}}
              variant="h5"
              component="h2"
            >
              {slideImage.text}
            </Typography>

            <Button
              style={{ ...floatingStyle, bottom: "30%" }}
              variant="contained"
              color="primary"
              sx={{ p: 3 }}
              onClick={(event) => {
                event.preventDefault();
                navigate(slideImage.link);
              }}
            >
              {slideImage.buttonText}
            </Button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
