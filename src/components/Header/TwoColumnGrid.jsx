import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export const TwoColumnGrid = ({
  textComponent,
  imgComponent,
  contentPosition,
}) => {
  return (
    <Grid2 container>
      {contentPosition === "LEFT" ? (
        <>
          <Grid2 xs={12} md={6} my={"auto"}>
            {textComponent}{" "}
          </Grid2>
          <Grid2 xs={12} md={6}>
            {imgComponent}{" "}
          </Grid2>
        </>
      ) : (
        <>
          <Grid2 xs={12} md={6}>
            {imgComponent}{" "}
          </Grid2>
          <Grid2 xs={12} md={6}>
            {textComponent}{" "}
          </Grid2>
        </>
      )}
    </Grid2>
  );
};
