import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { SubHeading } from "../Typographies/SubHeading";
import { MainHeading } from "../Typographies/MainHeading";

export const TestimonialCard = ({ testimonialObj }) => {
  const { name, img, para, position } = testimonialObj;
  return (
    <Grid2 container columnGap={2} display={'flex'}>


      <Grid2 item xs={8} md={2} ml={"auto"}>
        <Box
          borderRadius={2}
          mx={5}
          component='img'
          src={img || "/images/testimonialOne.png"} // Use the provided image or fallback to a default one
          alt=''
          sx={{
            maxWidth: 240,
            marginX: "auto",
            width: "100%", // Make the image take up the full width of its container
            height: "auto", // Maintain the aspect ratio
            objectFit: "cover", // Ensure the image covers the container without stretching
          }}
        />
      </Grid2>
      <Grid2 item xs={12} md={5} my={"auto"} mr={"auto"}>
        <Box display={"flex "} flexDirection={"column"} rowGap={2}>
          <img src='/icons/quotes.png' height={"60px"} width={"60px"} alt='' />
          <SubHeading color={"#A7A7A7"}>{para} </SubHeading>
          <SubHeading color={"#484848"}>{name} </SubHeading>
          <MainHeading variant={"body2"} textAlign={"left"}>
            {position}{" "}
          </MainHeading>
        </Box>
      </Grid2>

    </Grid2>
  );
};
