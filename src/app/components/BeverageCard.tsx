"use client";
import React from "react";
import { useAtom } from "jotai";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { drinkItemsAtom } from "../_utils/atoms";
import Image from "next/image";
import { Box } from "@mui/material";

 const BeverageCard = () => {
  const [drinkItems] = useAtom(drinkItemsAtom);

  return (
    <Box style={{ marginTop: "40px" }}>
      {drinkItems.map((item) => (
        <Card
          key={item.id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
            mb: 2,
            borderRadius: 3,
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ marginRight: 16 }}>
              <Image
                src={`/${item.name}.png`}
                width={40}
                height={40}
                alt={item.name}
              />
            </div>
            <div>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.amount} ml
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <IconButton>
              <EditIcon sx={{ color: "#9E9E9E" }} />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
export default BeverageCard