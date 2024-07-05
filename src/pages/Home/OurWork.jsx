import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { MainHeading } from "../../components/Typographies/MainHeading";
import SwiperComponent from "../../components/Swiper/SwiperComponent";
import { SwiperSlide } from "swiper/react";

export const OurWork = () => {
  const ourWorkData = [
    {
      bgImage: "workOne",
      projectName: "Hotel",
      projectType: "Hotel",
    },
    {
      bgImage: "workTwo",
      projectName: "Hotel",
      projectType: "Hotel",
    },
    {
      bgImage: "workThree",
      projectName: "Hotel",
      projectType: "Hotel",
    },
    {
      bgImage: "workOne",
      projectName: "Hotel",
      projectType: "Hotel",
    },
    {
      bgImage: "workTwo",
      projectName: "Hotel",
      projectType: "Hotel",
    },
    {
      bgImage: "workThree",
      projectName: "Hotel",
      projectType: "Hotel",
    },
  ];
  const swiperConfig = {
    spaceBetween: 10,
    delay: 1000,
    slidesPerView: 3,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  };
  return (
    <div>
      <Box my={8}>
        <Container>
          <Box display={"flex"} justifyContent={"space-between"}>
            <MainHeading>Our Latest Work</MainHeading>
            <Box>Filters</Box>
          </Box>
          <Box mt={5}>
            <SwiperComponent swiperConfig={swiperConfig}>
              {ourWorkData.map((obj, i) => {
                const { bgImage, projectName, projectType } = obj;
                return (
                  <SwiperSlide key={i}>
                    <Box
                      sx={{
                        borderRadius: 5,
                        backgroundImage: `url(/images/${bgImage}.png)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "460px",
                        width: "100%",
                      }}
                      display={"flex"}
                      flexDirection={"column"}
                    >
                      <Box
                        mt={"auto"}
                        bgcolor={"rgba(0,0,0,0.5)"}
                        borderRadius={5}
                      >
                        <Typography
                          textAlign={"center"}
                          variant='h6'
                          color={"white"}
                          mt={"auto"}
                        >
                          {projectName}
                        </Typography>
                        <Typography
                          textAlign={"center"}
                          color={"white"}
                          variant='body1'
                        >
                          {projectType}
                        </Typography>
                      </Box>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </SwiperComponent>
          </Box>
        </Container>
      </Box>
    </div>
  );
};
