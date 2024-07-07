import React from "react";
import { OurTestimonial } from "../../components/AccordionComponent/Common/OurTestimonial";
import { Footer } from "../../components/Footer/Footer";
import { PageHeader } from "../../components/Header/PageHeader";
import { TwoColumnGrid } from "../../components/Header/TwoColumnGrid";
import { HomeAbout } from "../Home/HomeAbout";
import { Container } from "@mui/material";
import { OurValuesSection } from "./OurValuesSection";
import { WhatWeDo } from "./WhatWeDo";

export const About = () => {
  return (
    <div>
      <PageHeader pageTitle={"About Us"} pages={["Home", "About"]} />
      <Container>
        <OurValuesSection />
      </Container>
      <WhatWeDo />

      <Container>
        <TwoColumnGrid
          textComponent={<HomeAbout />}
          imgComponent={
            <img src='/images/aboutOne.png' width={"100%"} height={"500px"} />
          }
          contentPosition={"LEFT"}
        />
      </Container>
      <OurTestimonial />
      <Footer />
    </div>
  );
};
