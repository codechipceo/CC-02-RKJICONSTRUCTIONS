import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

const NavInfo = ({ icon, heading, headingInfo }) => {
  return (
    <Box display={"flex"}>
      <img src='' alt='' />
      <Box>
        <Typography
          variant='body1'
          color={"black"}
          fontWeight={"600"}
          textAlign={"left"}
        >
          {" "}
          {heading}
        </Typography>
        <Typography
          variant='body2'
          color={"text.secondary"}
          fontWeight={"400"}
          textAlign={"left"}
        >
          {" "}
          {headingInfo}
        </Typography>
      </Box>
    </Box>
  );
};

export const NavHeader = () => {
  return (
    <Container>
      <Box >
        <Box display={"flex"} >
          <img src='/images/logo.png' alt='' />

          <Box mx={'auto'} bgcolor={"white"} display={"flex"} justifyContent={'space-around'}>
            <NavInfo heading={"Phone"} headingInfo={"8448728057"} />
            <NavInfo heading={"Phone"} headingInfo={"8448728057"} />
            <NavInfo heading={"Phone"} headingInfo={"8448728057"} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
