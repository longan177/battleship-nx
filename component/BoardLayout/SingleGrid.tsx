import { Box } from "@mui/material";
import React from "react";
import { useShipContext } from "../../context/BattleshipContext";

type Props = {
  coordinateX: number;
  coordinateY: number;
};

const SingleGrid = ({ coordinateX, coordinateY }: Props) => {
  return (
    <Box
      sx={{
        margin: "0",
        border: "1px solid black",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        backgroundColor: "cyan",
        transition: "all 0.05s linear",
        "&:hover": {
          backgroundColor: "red",
          cursor: "pointer",
        },
      }}
    ></Box>
  );
};

export default SingleGrid;
