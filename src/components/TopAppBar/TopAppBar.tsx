import * as React from "react";
import { useNavigate } from "react-router-dom";
import { PaletteMode } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import {
  CloseOutlined,
  KeyboardArrowDown,
  KeyboardArrowRight,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import ToggleColorMode from "../ToggleColorMode/ToggleColorMode";
import NavBarItem from "../NavBarItem/NavBarItem";
import AOTLogo from "../AOTLogo/AOTLogo";

const logoStyle: React.CSSProperties = {
  width: "auto",
  height: "70px",
  padding: "0.7rem",
  cursor: "pointer",
  marginRight: "20px",
};

const Search = styled("div")(({ theme }) => ({
  color: theme.palette.text.secondary,
  position: "relative",
  borderRadius: "999px",
  backgroundColor: alpha(theme.palette.text.secondary, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.text.secondary, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SearchStyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

type NavBarItemRecord = { title: string; link: string };
type NestedRecord = { [k: string]: Array<NavBarItemRecord> | NestedRecord };

interface TopAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function TopAppBar({ mode, toggleColorMode }: TopAppBarProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // Links will be updated later
  const navBarItems: NestedRecord = {
    Academics: {
      Departments: {
        "B. Tech": [
          { title: "CSBS", link: "#" },
          { title: "CSE", link: "#" },
          { title: "ECE", link: "#" },
          { title: "EE", link: "#" },
          { title: "EEE", link: "#" },
          { title: "EIE", link: "#" },
          { title: "IT", link: "#" },
          { title: "ME", link: "#" },
        ],
        PG: [
          { title: "MBA", link: "#" },
          { title: "MCA", link: "#" },
        ],
      },
      Programs: [
        { title: "UG Programs", link: "#" },
        { title: "PG Programs", link: "#" },
        { title: "Program Structure", link: "#" },
        { title: "Regulations", link: "#" },
        { title: "Curriculum", link: "#" },
      ],
      Resources: [
        { title: "Library", link: "library" },
        { title: "Moodle", link: "moodle" },
      ],
      Admission: [
        { title: "UG Admission", link: "#" },
        { title: "PG Admission", link: "#" },
      ],
    },
    Research: [
      { title: "Current Research", link: "#" },
      { title: "Past Research", link: "#" },
      { title: "Research Facilities", link: "#" },
    ],
    Students: [
      { title: "Life @ AOT", link: "#" },
      { title: "Campus Facilities", link: "#" },
      { title: "Career Services", link: "#" },
      { title: "Events", link: "#" },
    ],
    Faculty: [
      { title: "Faculty List", link: "#" },
      { title: "Faculty Positions", link: "#" },
      { title: "Career Benefits @ AOT", link: "#" },
    ],
  };
  const navigate = useNavigate();
  const parseNavBarItems = (
    navBarItems: Array<NavBarItemRecord> | NestedRecord,
    suffix: string = "",
    depth: number = 1
  ) => {
    if (Array.isArray(navBarItems)) {
      return navBarItems.map((navBarItem) => (
        <MenuItem
          key={navBarItem.title + "-" + suffix}
          onClick={(event) => {
            event.preventDefault();
            navigate(navBarItem.link);
          }}
          sx={{ py: "6px", px: "12px" }}
        >
          <Typography variant="body2" color="text.primary">
            {navBarItem.title}
          </Typography>
        </MenuItem>
      ));
    } else {
      return Object.entries(navBarItems).map(([title, children]) => (
        <NavBarItem
          key={title + "-" + suffix}
          title={title}
          popoverOrigin={
            depth == 1
              ? { vertical: "bottom", horizontal: "left" }
              : { vertical: "top", horizontal: "right" }
          }
          popupIcon={
            depth == 1 ? <KeyboardArrowDown /> : <KeyboardArrowRight />
          }
          sx={{ py: "6px", px: "12px" }}
        >
          {parseNavBarItems(children, suffix, depth + 1)}
        </NavBarItem>
      ));
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
        }}
      >
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            paddingBottom: { xs: 1, md: 2 },
            borderBottomLeftRadius: "25px",
            borderBottomRightRadius: "25px",
            bgcolor:
              theme.palette.mode === "light"
                ? "rgba(255, 255, 255, 0.4)"
                : "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(24px)",
            maxHeight: 400,
            width: "100%",
            border: "1px solid",
            borderColor: "divider",
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
          })}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                height: "100px",
              }}
            >
              <AOTLogo mode={mode} style={logoStyle} />
              <Box>
                <Typography variant="h6" color="text.primary">
                  Academy Of Technology
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Translate your vision into reality
                </Typography>
                <Typography variant="body2" color="text.semiSecondary">
                  Approved by AICTE, Affiliated to MAKAUT, Accredited by NBA &
                  Ranked by NIRF
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                paddingTop: "40px",
                paddingBottom: "40px",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                height: "30px",
              }}
            >
              <AOTLogo
                mode={mode}
                style={{
                  width: "auto",
                  height: "25px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              />
              <Box>
                <Typography variant="h6" color="text.primary">
                  Academy Of Technology
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Translate your vision into reality
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="text"
                  color="primary"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                  sx={{ minWidth: "30px", p: "4px" }}
                >
                  <MenuIcon />
                </Button>
                <Drawer
                  anchor="right"
                  open={open}
                  onClose={toggleDrawer(false)}
                >
                  <Box
                    sx={{
                      minWidth: "60dvw",
                      p: 2,
                      backgroundColor: "background.paper",
                      flexGrow: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexGrow: 1,
                        marginTop: "5px",
                        marginBottom: "20px",
                      }}
                    >
                      <Button
                        variant="text"
                        color="primary"
                        aria-label="menu"
                        onClick={toggleDrawer(false)}
                        sx={{ minWidth: "30px", p: "4px" }}
                      >
                        <CloseOutlined />
                      </Button>

                      <ToggleColorMode
                        mode={mode}
                        toggleColorMode={toggleColorMode}
                      />
                    </Box>
                    <Search sx={{ marginBottom: "15px" }}>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <SearchStyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                      />
                    </Search>
                    {parseNavBarItems(navBarItems, "sm")}
                  </Box>
                </Drawer>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "20px",
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  ml: "-18px",
                  px: 0,
                }}
              >
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  {parseNavBarItems(navBarItems, "md")}
                </Box>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 0.5,
                  alignItems: "center",
                }}
              >
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <SearchStyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <ToggleColorMode
                  mode={mode}
                  toggleColorMode={toggleColorMode}
                />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopAppBar;
