import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { SubHeading } from "../../components/Typographies/SubHeading";
import { MainButton } from "../../components/CustomButton/MainButton";

export const WhatWeDo = () => {
  const whatWeDo = {
    first: [
      " World Wide Donation",
      " Various industrial Applications.",
      " Providing Solutions For Construction, Management",
      " Engineers design and build the structure",
    ],
    second: [
      " Certified & Awards winner",
      " Work with energetic team",
      " Just Because You Work Hard You’ll Be Successful.",
      " For all your construction needs!",
    ],
  };
  return (
    <div>
      <Box bgcolor={"#F7F7F7"}>
        <Container>
          <Grid2 container py={10}>
            <Grid2 item md={6}>
              <img src='/images/aboutThree.png' alt='' width={"100%"} />
            </Grid2>
            <Grid2 item md={6}>
              <Box>
                <Typography variant='h4' fontWeight={600} mb={2}>
                  What We Do!
                </Typography>
                <SubHeading>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </SubHeading>
                <Box mt={2}>
                  {whatWeDo.first.map((item, i) => {
                    return (
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        gap={1}
                        mb={1}
                        key={i}
                      >
                        {" "}
                        <img
                          height={"12px"}
                          width={"17px"}
                          src='/icons/bulletPoint.png'
                          alt=''
                        />
                        <Typography
                          variant='body1'
                          color={"fontColor.subHeading"}
                        >
                          {item}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
              <Box mt={2}>
                <Typography variant='h4' fontWeight={600} mb={2}>
                  What You Can Do In!
                </Typography>

                <Box mt={2} mb={4}>
                  {whatWeDo.second.map((item, i) => {
                    return (
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        gap={1}
                        mb={1}
                        key={i}
                      >
                        {" "}
                        <img
                          height={"12px"}
                          width={"17px"}
                          src='/icons/bulletPoint.png'
                          alt=''
                        />
                        <Typography
                          variant='body1'
                          color={"fontColor.subHeading"}
                        >
                          {item}
                        </Typography>
                      </Box>
                    );
                  })}
                              </Box>
                              <Box>
                                  <MainButton>Contact Us </MainButton>
                              </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};
