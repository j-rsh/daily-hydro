"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Wavify from "react-wavify";
import Image from "next/image";
import { useAtom, useAtomValue } from "jotai";
import { drinkItemsAtom, sumItemsAtom } from "../_utils/atoms";

const WaterLevel: React.FC = () => {
  const [percentage, setPercentage] = useAtom(sumItemsAtom);

  return (
    <Box sx={{ flexDirection: "column", marginTop: "20px" }}>
      <Box
        sx={{
          position: "relative",
          width: "50vh",
          height: "50vh",
          margin: "20px auto",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Image
          style={{ zIndex: 99 }}
          src="/glass.png"
          alt="Empty Glass"
          layout="fill"
          objectFit="contain"
        />
        <h2
          style={{
            position: "absolute",
            bottom: "0px",
            zIndex: 999,
            fontWeight: "bolder",
            color: "gray",
            fontSize: "larger",
          }}
        >
          {percentage}%
        </h2>

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "47%",
            height: `${percentage}%`,
            overflow: "hidden",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Wavify
            fill="#0077cc"
            paused={false}
            options={{
              height: 20,
              amplitude: 15,
              speed: 0.2,
              points: 3,
            }}
          />

          <Wavify
            fill="#00aaff"
            paused={false}
            options={{
              height: 25,
              amplitude: 10,
              speed: 0.15,
              points: 3,
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default WaterLevel;
