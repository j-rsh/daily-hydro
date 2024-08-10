"use client";

import React, { Component, useState } from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Dialog from "../components/Dialog";
import AddButton from "../components/AddButton";
import AddGoal from "../components/AddGoalContent";
import BeverageCard from "../components/BeverageCard";

const Add: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <Card
        variant="outlined"
        style={{
          marginBottom: 20,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Recourses</Typography>
          <IconButton onClick={handleClickOpen}>
            <SettingsIcon />
          </IconButton>
        </CardContent>
      </Card>
      <AddButton />
      <BeverageCard />
      <Dialog
        open={open}
        onClose={handleClose}
        title="Update Your Water Goal"
        content={<AddGoal onClose={handleClose} />}
        defaultGoal={2}
      />
    </div>
  );
};

export default Add;
