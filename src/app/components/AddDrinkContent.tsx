"use client";
import React, { useMemo, useState } from "react";
import { useAtom } from "jotai";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { drinkItemsAtom } from "../_utils/atoms";

type Props = { onClose: () => void };

const items = ["water", "coffee", "tea"];

const AddDrinkContent: React.FC<Props> = ({ onClose }) => {
  const [drinkItems, setDrinkItems] = useAtom(drinkItemsAtom);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    console.log(name, amount);
    if (name && amount) {
      const newDrinkItem = {
        id: drinkItems.length + 1,
        name,
        amount,
      };
      setDrinkItems([...drinkItems, newDrinkItem]);
      setName("");
      setAmount("");
      onClose();
    }
  };

  const curentItems = useMemo(
    () => items.filter((i) => !drinkItems.map((j) => j.name).includes(i)),
    [drinkItems]
  );

  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 120, margin: 0 }} size="small">
          <InputLabel id="demo-select-small-label">Title</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={name}
            label="Name"
            onChange={handleChange}
            sx={{
              flexGrow: 1,
              borderRadius: "8px",
              "& fieldset": { borderRadius: "8px" },
              height: "50px",
              padding: "0 14px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {curentItems.map((item) => (
              <MenuItem
                sx={{ textTransform: "capitalize" }}
                key={item}
                value={item}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Amount(ml)"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          sx={{
            flexGrow: 1,
            borderRadius: "8px",
            "& fieldset": { borderRadius: "8px" },
          }}
          InputProps={{
            sx: {
              height: "50px",
              padding: "0 14px",
              display: "flex",
              alignItems: "center",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "320px",
          gap: "8px",
          paddingBottom: "30px",
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
    </Box>
  );
};

export default AddDrinkContent;
