import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import getTheme from "../Theme";

function RedirectPage({ to }: { to: string }) {
  let currentTheme = localStorage.getItem("theme");
  if (!currentTheme) currentTheme = "dark";

  const theme = createTheme(getTheme(currentTheme as "dark" | "light"));

  useEffect(() => {
    location.replace(to);
  }, [to]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            bgcolor: "background.default",
          }}
        >
          <Typography variant="h1" sx={{ typography: { xs: "h4", sm: "h1" } }}>
            Redirecting...
          </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default RedirectPage;
