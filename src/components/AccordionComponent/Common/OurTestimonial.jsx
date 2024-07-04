import { Box, Container } from "@mui/material";
import React from "react";
import { MainHeading } from "../../Typographies/MainHeading";
import { TestimonialCard } from "../../Cards/TestimonialCard";
import SwiperComponent from "../../Swiper/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
export const OurTestimonial = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolorum in provident tempore facere, tenetur illum et nihil ipsum similique quia praesentium nesciunt nam corrupti vitae odit, modi ad ab!";
  const testimonialsData = [
    {
      name: "Mansab",
      image: "/images/testimonialOne.png",
      para: lorem,
      position: "Engineer",
    },
  ];
  return (
    <Box py={10}>
      <MainHeading> Our Testimonials</MainHeading>
      <Container>
        <Box>
          <SwiperComponent>
            <SwiperSlide>
              <TestimonialCard testimonialObj={testimonialsData[0]} />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard testimonialObj={testimonialsData[0]} />
            </SwiperSlide>
          </SwiperComponent>
        </Box>
      </Container>
    </Box>
  );
};
