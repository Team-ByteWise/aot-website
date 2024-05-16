import React, { CSSProperties } from "react";
import { Container, Theme, alpha } from "@mui/material";

interface CustomCardProps {
  children: React.ReactNode | React.ReactNode[];
  sx?: CSSProperties;
}

const CustomCard = ({ children, sx }: CustomCardProps) => {
  const gridStyle = (theme: Theme) => ({
    mt: 2,
    mb: 2,
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
    ...sx,
  });

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-start",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
      sx={gridStyle}
    >
      {children}
    </Container>
  );
};

export default CustomCard;
