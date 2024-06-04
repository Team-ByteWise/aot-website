import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";

interface RedirectPageProps {
  to: string;
  theme: Theme;
}

function RedirectPage({ to, theme }: RedirectPageProps) {
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
