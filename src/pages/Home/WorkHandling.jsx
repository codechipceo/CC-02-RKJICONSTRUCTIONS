import { Box, Container } from "@mui/material";
import React from "react";
import { MainHeading } from "../../components/Typographies/MainHeading";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { WorkCard } from "../../components/Cards/WorkCard";

export const WorkHandling = () => {
  const loremIpsum = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`;

  const workData = [
    {
      img: "One",
      heading: "Institution",
      para: "lorem ipsum",
    },
    {
      img: "Two",
      heading: "Commercial",
      para: "lorem ipsum",
    },
    {
      img: "Three",
      heading: "Residential",
      para: "lorem ipsum",
    },
    {
      img: "Four",
      heading: "Industrials",
      para: "lorem ipsum",
    },
    {
      img: "Five",
      heading: "Textiles",
      para: "lorem ipsum",
    },
    {
      img: "Six",
      heading: "Government",
      para: "lorem ipsum",
    },
    {
      img: "Seven",
      heading: "Hotel",
      para: "lorem ipsum",
    },
    {
      img: "Eight",
      heading: "Wedding Hall",
      para: "lorem ipsum",
    },
  ];

  return (
    <Box py={10} mt={5} bgcolor={"backgrounds.secondaryBg"}>
      <Container>
        <MainHeading>Type Of Work We Handle</MainHeading>
        <Grid2 container mt={10}>
          {workData.map(({ img, para, heading }, i) => {
            return (
              <Grid2 item key={i}  md={3} xs={12} mb={4}>
                <WorkCard img={`/images/workHandle${img}.png`} heading={heading} para={loremIpsum || para} />
              </Grid2>
            );
          })}
        </Grid2>
      </Container>
    </Box>
  );
};
