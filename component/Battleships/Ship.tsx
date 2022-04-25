import { Box } from "@mui/material";
import React from "react";

type Props = {
  name: string;
  size: number;
};

const Ship = ({ name, size }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "20px",
        // marginBottom: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: size * 40,
        height: 40,
        backgroundColor: "red",
        border: true ? "5px solid blue" : "0px",
        opacity: true ? 0.5 : 1,
        "&:hover": {
          // backgroundColor: "yellow",
          opacity: [0.9, 0.8, 0.7],
          cursor: "pointer",
        },
      }}
    >
      {name}
    </Box>
  );
};

export default Ship;
