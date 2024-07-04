import { Box, useTheme } from "@mui/material";
import React from "react";
import { ServiceDetailCard } from "./Cards/ServiceDetailCard";
import { TestimonialCard } from "./Cards/TestimonialCard";
import { WorkCard } from "./Cards/WorkCard";
import { MainButton } from "./CustomButton/MainButton";
import { NavHeader } from "./Navbar/NavHeader";
import { NavBar } from "./Navbar/Navbar";

export const ColorPalette = () => {
  const theme = useTheme();
  const { palette } = theme;
  const { fontColor, backgrounds } = palette;
  const { onHover, heading, subHeading } = fontColor;
  const { main, secondaryBg, buttonBg, footer } = backgrounds;
  const colors = [
    onHover,
    heading,
    subHeading,
    main,
    secondaryBg,
    buttonBg,
    footer,
  ];
  return (
    <div>
      {colors.map((color, i) => {
        return (
          <Box key={i} display={"flex"}>
            {color}
            <Box height={30} width={30} bgcolor={color}></Box>
          </Box>
        );
      })}

      <MainButton>Flat button</MainButton>
      <MainButton border={"ROUND"}>Round button</MainButton>
      <ServiceDetailCard
        serviceDetailObject={{
          heading: "Service Card",
          para: "Service Para",
          bulletPoints: [1, 2],
        }}
      />

      <WorkCard heading={"Work Card"} para={"Work Para"} />
      <TestimonialCard
        testimonialObj={{
          name: "Mansab",
          para: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam delectus corrupti eos ea laudantium, repudiandae ab et velit praesentium quasi labore eaque quas vero fugiat culpa ipsa laborum voluptate porro!",
          position: "Engineer",
        }}
      />
      <NavHeader />
      <NavBar/>
    </div>
  );
};
