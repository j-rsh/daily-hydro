"use client";

import React, { useState } from "react";
import { useAtom } from "jotai";
import { Box, Button, TextField } from "@mui/material";
import { dailyGoalAtom } from "../_utils/atoms";

type Props = { onClose: () => void };

const AddGoal: React.FC<Props> = ({ onClose }) => {
  const [dailyGoal, setDailyGoal] = useAtom(dailyGoalAtom);

  const [goal, setGoal] = useState(dailyGoal);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    setGoal(value);
  };

  const handleSubmit = () => {
    setDailyGoal(goal);
    onClose();
  };

  return (
    <div>
      <TextField
        autoFocus
        margin="dense"
        label="Daily Goal (Litre)"
        type="number"
        fullWidth
        variant="outlined"
        value={goal}
        onChange={handleChange}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "320px",
          gap: "8px",
          paddingBottom: "30px",
          mt:"10px"
        }}
      >
        <Button
          variant="outlined"
          fullWidth
          sx={{
            borderColor: "#00796b",
            color: "#00796b",
            borderRadius: "8px",
            "&:hover": {
              borderColor: "#00796b",
              backgroundColor: "rgba(0, 121, 107, 0.04)",
            },
          }}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#00796b",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#00695c",
            },
          }}
          onClick={handleSubmit}
        >
          Save
        </Button>
      </Box>
    </div>
  );
};
export default AddGoal;
