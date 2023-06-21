import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { faker } from "@faker-js/faker";
import AntSwitch from "../../components/AntSwitch"

import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { useState } from "react";
import useSettings from "../../hooks/useSettings";

const DashboardLayout = () => {

  const [selected, setSelected] = useState(0);
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  return (
    <>
      <Box p={2} sx={{ backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", height: "100vh", width: 100 }}>
       <Stack justifyContent="space-between" direction="column" alignItems={"center"} sx={{ height: "100%" }} spacing={3}>
        <Stack alignItems={"center"} spacing={4}>
          <Box sx={{ backgroundColor: theme.palette.primary.main, height: 64, width: 64, borderRadius: 1.5 }}>
            <img src={Logo} alt={"Chat App Logo"} />
          </Box>
          <Stack sx={{ width: "max-content" }} direction="column" alignItems="center" spacing={3}>
            {Nav_Buttons.map((el) => (
              el.index === selected ?
              <Box sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                <IconButton sx={{ width: "max-content", color: "white" }} key={el.index}>
                  {el.icon}
                </IconButton>
              </Box>
              : <IconButton onClick={() => {
                setSelected(el.index)
              }} sx={{ width: "max-content", color: theme.palette.mode === "light" ? "black" : theme.palette.text.primary }} key={el.index}>
              {el.icon}
            </IconButton>) 
            )}
          <Divider sx={{ width: "48px" }} />
          {selected === 3 ? (<Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
          <IconButton sx={{ width: "max-content", color: "white" }}>
            <Gear />
          </IconButton>
          </Box>) : (
          <IconButton onClick={() => {
            setSelected(3)
          }}
          sx={{ width: "max-content", color: theme.palette.mode === "light" ? "black" : theme.palette.text.primary }}>
            <Gear />
          </IconButton>)}
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <AntSwitch onChange={() => {
            onToggleMode()
          }} />
          <Avatar src={faker.image.avatar()}/>
        </Stack>
       </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
