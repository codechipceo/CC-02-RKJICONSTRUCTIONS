import { Box } from "@mui/material";
import React from "react";

export const BulletPoint = ({ url, text }) => {
  return (
    <Box display={"flex"} alignItems={"center"} gap={1} mb={1}>
      <img src={url} alt='' />
      {text}
    </Box>
  );
};
