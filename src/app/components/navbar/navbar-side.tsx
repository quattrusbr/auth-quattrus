"use client";
import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faHouse, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));


export function NavBarSide({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  const getIconForText = (text: string) => {
    switch (text) {
      case 'Projetos':
        return <FontAwesomeIcon icon={faHouse} />;
      case 'Tarefas':
        return <FontAwesomeIcon icon={faLayerGroup} />; 
      case 'Send email':
        return <FontAwesomeIcon icon={faCalendarDay} />; 
      case 'Drafts':
        return <FontAwesomeIcon icon={faCalendarDay} />; 
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row h-full w-full">
      <div className="flex flex-col">
        <Drawer
          variant="permanent"
          open={open}
          PaperProps={{
            sx: {
              backgroundColor: "#31353C",
              marginTop: "64px",
            },
          }}
        >
          <DrawerHeader
            sx={{ padding: 0, display: "flex", justifyContent: "left" }}
          >
            <IconButton
              onClick={() => setOpen(!open)}
              sx={{
                color: "white",
              }}
            >
              {open ? (
                <ChevronLeftIcon fontSize="large" />
              ) : (
                <ChevronRightIcon fontSize="large" />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[
              { url: "/projetos", text: "Projetos" },
              { url: "/tarefas", text: "Tarefas" },
              { url: "/", text: "Send email" },
              { url: "/", text: "Drafts" },
            ].map((el, index) => (
              <ListItem key={el.text} disablePadding sx={{ display: "block" }}>
                <Link href={el.url} key={el.text}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      color: "white",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      {getIconForText(el.text)}
                    </ListItemIcon>
                    <ListItemText
                      primary={el.text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
      {children}
    </div>
  );
}
