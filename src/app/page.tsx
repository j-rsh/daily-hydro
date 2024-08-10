"use client";

import { Box } from "@mui/material";
import ControlAmount from "./components/ControlAmount";
import WaterLevel from "./components/WaterLevel";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

export default function Home() {
  return (
    <Box>
      <Box style={{display:"flex" , justifyContent:"space-between" , padding:"10px" , color:"gray"}}>
        <CalendarMonthIcon/>
        <EditCalendarIcon/>
      </Box>
      <WaterLevel />
      <ControlAmount />
    </Box>
  );
}
