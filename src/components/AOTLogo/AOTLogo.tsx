import { CSSProperties } from "react";
import aot_blue from "../../assets/logo/aot_logo_blue.png";
import aot_white from "../../assets/logo/aot_logo_white.png";
import { PaletteMode } from "@mui/material";

interface AOTLogoProps {
  mode: PaletteMode;
  style: CSSProperties;
}

function AOTLogo({ mode, style }: AOTLogoProps) {
  return (
    <img
      src={mode === "light" ? aot_blue : aot_white}
      style={{ ...style }}
      alt="Academy Of Technology Logo"
    />
  );
}

export default AOTLogo;
