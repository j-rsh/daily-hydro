"use client";

import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  DrinkItem,
  dailyGoalAtom,
  drinkItemsAtom,
  sumItemsAtom,
} from "../_utils/atoms";
import Image from "next/image";

const ControlAmount = () => {
  const drinkItems = useAtomValue(drinkItemsAtom);
  const [selectedCard, setSelectedCard] = useState(null);
  const setSumItems = useSetAtom(sumItemsAtom);
  const goal = useAtomValue(dailyGoalAtom);
  const [percentage, setPercentage] = useAtom(sumItemsAtom);

  const handleCardClick = (id: any) => {
    setSelectedCard(id);
  };

  const handleAddClick = (item: DrinkItem) => {
    const mlGoal = goal * 1000;
    const stepPercentage = (Number(item.amount) * 100) / mlGoal;
    percentage > 99
      ? setSumItems((prev: number) => prev)
      : setSumItems((prev: number) => prev + stepPercentage);
  };

  const handleRemoveClick = (item: DrinkItem) => {
    const mlGoal = goal * 1000;
    const stepPercentage = (Number(item.amount) * 100) / mlGoal;
   percentage < 1
      ? setSumItems((prev: number) => prev)
      : setSumItems((prev: number) => prev - stepPercentage);
  };

  return (
    <Box sx={{ paddingTop: 4, paddingX: 2, marginBottom: 5 }}>
      <Grid container spacing={2} justifyContent="center" wrap="nowrap">
        {drinkItems.map((item) => (
          <Grid item key={item.id}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              position="relative"
              onClick={() => handleCardClick(item.id)}
            >
              {selectedCard === item.id && (
                <AddIcon
                  sx={{
                    color: "green",
                    fontSize: 16,
                    position: "absolute",
                    top: -20,
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    handleAddClick(item);
                  }}
                />
              )}
              <Card
                style={{
                  width: 100,
                  height: 140,
                  textAlign: "center",
                  borderRadius: 12,
                  padding: 8,
                  border: "2px solid black",
                  boxShadow: "none",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  style={{ height: "40%" }}
                >
                  <Image
                    src={`/${item.name}.png`}
                    width={40}
                    height={40}
                    alt={item.name}
                  />
                </Box>
                <CardContent style={{ padding: 0 }}>
                  <Typography
                    variant="subtitle2"
                    style={{ fontWeight: "bold" }}
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {item.amount} ml
                  </Typography>
                </CardContent>
              </Card>
              {selectedCard === item.id && (
                <RemoveIcon
                  sx={{
                    color: "red",
                    fontSize: 16,
                    position: "absolute",
                    bottom: -20,
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    handleRemoveClick(item);
                  }}
                />
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ControlAmount;
