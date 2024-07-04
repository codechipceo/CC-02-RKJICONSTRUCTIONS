import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { MainHeading } from "../../components/Typographies/MainHeading";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { SubHeading } from "../../components/Typographies/SubHeading";

const processData = [
  {
    heading: "Product Research",
    para: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
    url: "processOne.png",
    number: "01",
  },
  {
    heading: "Design Idea",
    para: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
    url: "processTwo.png",
    number: "02",
  },
  {
    heading: "Advice & Guides",
    para: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
    url: "processThree.png",
    number: "03",
  },
  {
    heading: "Great Solutions",
    para: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
    url: "processFour.png",
    number: "04",
  },
];

const ProcessComponentOne = ({ obj }) => {
  return (
    <Grid2 item xs={12} md={3}>
      <Box>
        <MainHeading variant={"h5"}>{obj.heading}</MainHeading>
        <SubHeading textAlign={"center"}>{obj.para}</SubHeading>
        <img src={`/images/${obj.url}`} />
        <Typography
          color={"#D4DDF1"}
          fontWeight={"bold"}
          textAlign={"center"}
          variant='h2'
        >
          {obj.number}
        </Typography>
      </Box>
    </Grid2>
  );
};
const ProcessComponentTwo = ({ obj }) => {
  return (
    <Grid2 item xs={12} md={3}>
      <Box>
        <Typography
          color={"#D4DDF1"}
          fontWeight={"bold"}
          textAlign={"center"}
          variant='h2'
        >
          {obj.number}
        </Typography>
        <img src={`/images/${obj.url}`} />

        <MainHeading variant={"h5"}>{obj.heading}</MainHeading>
        <SubHeading textAlign={"center"}>{obj.para}</SubHeading>
      </Box>
    </Grid2>
  );
};

export const HomeProcess = () => {
  return (
    <Box py={10} bgcolor={"backgrounds.secondaryBg"}>
      <MainHeading>OUR PROCESS</MainHeading>
      <Container >
        <Grid2 container mt={10}>
          {processData.map((process, i) => {
            return i % 2 === 0 ? (
              <ProcessComponentOne obj={process} />
            ) : (
              <ProcessComponentTwo obj={process} />
            );
          })}
        </Grid2>
      </Container>
    </Box>
  );
};
