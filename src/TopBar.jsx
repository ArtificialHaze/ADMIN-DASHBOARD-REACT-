import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "./theme";
import { InputBase } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2}>
      <Box
        display={"flex"}
        backgroundColor={colors.primary[400]}
        borderRadius={"3px"}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search.." />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display={"flex"}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
