import React from "react";
import { Box, SxProps, Theme } from "@mui/material";

const Shimmer: React.FC<{
  sx?: SxProps<Theme>;
}> = ({ sx }) => {
  return (
    <Box
      sx={{
        ...sx,
        background:
          "linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)",
        backgroundSize: "800px 104px",
        animation: "shimmer 1.5s infinite linear",
        "@keyframes shimmer": {
          "0%": {
            backgroundPosition: "-800px 0",
          },
          "100%": {
            backgroundPosition: "800px 0",
          },
        },
      }}
    />
  );
};

export default Shimmer;
