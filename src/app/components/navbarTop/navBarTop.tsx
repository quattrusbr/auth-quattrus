"use client";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import logoQuattrus from "./../../../../public/assets/logoQuattrusWhite.svg";
import logoProject from "./../../../../public/assets/logoProject.svg";
import { useRouter } from "next/navigation";
import { DeleteCookies } from "./delete-cookie";

const TopBar: React.FC = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const settings = ["Profile", "Account", "Dashboard"];
  const router = useRouter();
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleSignOut = () => {
    DeleteCookies();
    router.push("/");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="bg-primaryMain flex items-center">
      <div className="h-full items-center justify-center bg-project">
        <img
          className="h-full md:py-[21px] md:px-[16.4px] py-[22px] px-[12.4px]"
          src={logoProject.src}
        ></img>
      </div>
      <div className="flex flex-1 items-center h-12">
        <img className="max-h-4 me-2 ms-4" src={logoQuattrus.src}></img>
        <Typography variant="h6" color="common.white" fontWeight="normal">
          | Project
        </Typography>
      </div>
      <Toolbar>
        <Tooltip title="Abrir configurações">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
          <MenuItem>
            <button onClick={handleSignOut}>Logout</button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </div>
  );
};

export default TopBar;
