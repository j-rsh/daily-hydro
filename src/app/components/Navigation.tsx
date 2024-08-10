"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AddIcon from "@mui/icons-material/Add";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Paper from "@mui/material/Paper";
import OtherHousesOutlined from "@mui/icons-material/OtherHousesOutlined";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import { useRouter, usePathname } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navigationPaths = ["/", "/add", "/notifications", "/profile"];
  const [value, setValue] = React.useState(
    navigationPaths.indexOf(pathname) !== -1
      ? navigationPaths.indexOf(pathname)
      : 0
  );

  const handleNavigationChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);
    router.push(navigationPaths[newValue]);
  };

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          zIndex: 1000,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleNavigationChange}
          sx={{
            height: "100%",
            "& .MuiBottomNavigationAction-root": {
              minHeight: 72,
              position: "relative",
              "& .MuiBottomNavigationAction-icon": {
                marginBottom: 8,
                color: "#000",
                transition: "color 0.3s, fill 0.3s",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 12,
                left: "50%",
                transform: "translateX(-50%)",
                width: 8,
                height: 8,
                borderRadius: "50%",
              },
              "&.Mui-selected": {
                color: "#0A8080",
                "& .MuiBottomNavigationAction-icon": {
                  color: "#0A8080",
                  zIndex: 0,
                },
              },
              "&:nth-of-type(2).Mui-selected": {
                color: "#ffff",
                position: "relative",
                zIndex: 1,
              },
              "&:nth-of-type(2).Mui-selected::before": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 30,
                height: 30,
                backgroundColor: "#0A8080",
                borderRadius: "50%",
                zIndex: -1,
              },
              "&.Mui-selected::after": {
                backgroundColor: "#0A8080",
              },
            },
          }}
        >
          <BottomNavigationAction
            icon={value === 0 ? <OtherHousesIcon /> : <OtherHousesOutlined />}
          />
          <BottomNavigationAction
            icon={value === 1 ? <AddIcon /> : <AddRoundedIcon />}
          />
          <BottomNavigationAction
            icon={
              value === 2 ? (
                <NotificationsRoundedIcon />
              ) : (
                <NotificationsNoneRoundedIcon />
              )
            }
          />
          <BottomNavigationAction
            icon={
              value === 3 ? <PersonRoundedIcon /> : <PermIdentityRoundedIcon />
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
export default Navigation