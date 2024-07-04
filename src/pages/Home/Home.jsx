import { Container } from "@mui/material";
import React from "react";
import { DefaultBottomLayout } from "../../components/AccordionComponent/Common/DefaultBottomLayout";
import { MainHeader } from "../../components/Header/MainHeader";
import { TwoColumnGrid } from "../../components/Header/TwoColumnGrid";
import { NavHeader } from "../../components/Navbar/NavHeader";
import { NavBar } from "../../components/Navbar/Navbar";
import { HomeAbout } from "./HomeAbout";
import { HomeProcess } from "./HomeProcess";
import { HomeService } from "./HomeService";
import { SecondBanner } from "./SecondBanner";

export const Home = () => {
  return (
    <div>
      <NavHeader />
      <NavBar />
      <MainHeader />
      <Container>
        <TwoColumnGrid
          textComponent={<HomeAbout />}
          imgComponent={
            <img src='/images/aboutOne.png' width={"100%"} height={"500px"} />
          }
          contentPosition={"LEFT"}
        />
      </Container>
      <HomeProcess />
      <HomeService />
      <SecondBanner />
      <DefaultBottomLayout />
   
    </div>
  );
};
