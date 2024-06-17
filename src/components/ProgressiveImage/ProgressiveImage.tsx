import { useState } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import Shimmer from "../Shimmer/Shimmer";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  sx: SxProps<Theme>;
  onLoadingChange?: (isLoading: boolean) => void;
}

const ProgressiveImage = ({
  src,
  alt,
  sx,
  onLoadingChange,
}: ProgressiveImageProps) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = (src: string) => {
    console.log(src);
    setLoading(false);
    onLoadingChange?.(false);
  };

  return (
    <Box
      sx={{
        ...sx,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {loading && <Shimmer sx={sx} />}
      <Box
        component="img"
        src={src}
        alt={alt}
        onLoad={ () => handleLoad(src)}
        onError={ () => handleLoad(src)}
        sx={sx}
        style={{ display: loading ? "none" : "block" }}
      />
    </Box>
  );
};

export default ProgressiveImage;
