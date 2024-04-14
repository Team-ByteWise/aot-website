import { BrowserView, MobileView } from "react-device-detect";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, PopoverOrigin, SxProps, Theme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import PopupState, { bindHover, bindMenu } from "material-ui-popup-state";
import React from "react";
import HoverMenu from "material-ui-popup-state/HoverMenu";

interface NavBarItemProps {
  title: string;
  children: React.ReactNode[];
  popoverOrigin?: PopoverOrigin;
  popupIcon?: React.ReactNode;
  sx?: SxProps<Theme>;
}

function NavBarItem({
  title,
  children,
  popoverOrigin = { vertical: "center", horizontal: "center" },
  popupIcon = <KeyboardArrowDownIcon fontSize="small" />,
  sx = {},
}: NavBarItemProps) {
  let i = 1;
  return (
    <>
      <BrowserView>
        <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
          <PopupState variant="popover" popupId={title}>
            {(popupState) => (
              <React.Fragment>
                <Button
                  {...bindHover(popupState)}
                  sx={{
                    ...sx,
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography variant="body2" color="text.primary">
                    {title}
                  </Typography>
                  {popupIcon}
                </Button>
                <HoverMenu
                  {...bindMenu(popupState)}
                  anchorOrigin={popoverOrigin}
                >
                  {children.map((child) => child)}
                </HoverMenu>
              </React.Fragment>
            )}
          </PopupState>
        </ul>
      </BrowserView>
      <MobileView>
        <Accordion sx={{ my: "5px" }}>
          <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
            <Typography variant="body2" color="text.primary">
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
              {children.map((child) => (
                // TODO : Fix li under li; Check if child is a li then directly put child else wrap child in li
                <li key={title + "-" + i++}>{child}</li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      </MobileView>
    </>
  );
}

export default NavBarItem;
