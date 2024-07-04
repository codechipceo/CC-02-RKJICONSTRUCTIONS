import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useMemo } from "react";
import { SubHeading } from "../Typographies/SubHeading";
import SwiperComponent from "../Swiper/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import { MainHeading } from "../Typographies/MainHeading";
import DoneIcon from "@mui/icons-material/Done";
import { MainButton } from "../CustomButton/MainButton";

const HeaderLayout = ({ obj }) => {
  const theme = useTheme();
  const { navbar } = theme.palette.backgrounds;
  return (
    <Box
      style={{
        minHeight: "100vh",
        backgroundPosition: "center center",
        // background: `url(${img})`,
        cursor: "grab",
        backgroundSize: "cover",
        backgroundImage: ` url(${obj.bgImage})`,
      }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Container>
        <Grid2 container>
          {obj.id === 1 ? (
            <>
              <Grid2 item xs={12} md={6}>
                <SubHeading variant={"h6"} fontWeight={"bold"} color={navbar}>
                  {obj.subHeading}
                </SubHeading>
                <MainHeading
                  variant={"h5"}
                  color={"black"}
                  textAlign={"justify"}
                >
                  {obj.heading}{" "}
                </MainHeading>
                {obj.bulletPoints.map((point, i) => {
                  return (
                    <Typography
                      key={i}
                      display={"flex"}
                      alignItems={"center"}
                      gap={1}
                      mt={2}
                    >
                      <DoneIcon color='black' /> {point}
                    </Typography>
                  );
                })}
                <Box
                  sx={{
                    display: {
                      xs: "block", // flex on extra-small screens
                      md: "flex", // block (or any other non-flex value) on medium and larger screens
                    },
                  }}
                  mt={2}
                  alignItems={"center"}
                  gap={3}
                >
                  <MainButton border={"ROUND"}>Our Services </MainButton>
                  <MainButton border={"ROUND"}>Our Projects </MainButton>
                </Box>
              </Grid2>
              <Grid2 item xs={12} md={6}></Grid2>
            </>
          ) : (
            <>
              <Grid2 item xs={12} md={6}></Grid2>
              <Grid2 item xs={12} md={6}>
                <SubHeading variant={"h6"} fontWeight={"bold"} color={navbar}>
                  {obj.subHeading}
                </SubHeading>
                <MainHeading
                  variant={"h5"}
                  color={"black"}
                  textAlign={"justify"}
                >
                  {obj.heading}{" "}
                </MainHeading>
                {obj.bulletPoints.map((point, i) => {
                  return (
                    <Typography
                      key={i}
                      display={"flex"}
                      alignItems={"center"}
                      gap={1}
                      mt={2}
                    >
                      <DoneIcon color='black' /> {point}
                    </Typography>
                  );
                })}
                <Box
                  sx={{
                    display: {
                      xs: "block", // flex on extra-small screens
                      md: "flex", // block (or any other non-flex value) on medium and larger screens
                    },
                  }}
                  mt={2}
                  alignItems={"center"}
                  gap={3}
                >
                  <MainButton border={"ROUND"}>Our Services </MainButton>
                  <MainButton border={"ROUND"}>Our Projects </MainButton>
                </Box>
              </Grid2>
            </>
          )}
        </Grid2>
      </Container>
    </Box>
  );
};
export const MainHeader = () => {
  const swiperConfig = {
    spaceBetween: 0,
    slidesPerView: 1,
    delay: 3000,
  };
  const content = useMemo(
    () => [
      {
        id: 1,
        subHeading: "Welcome To RKJI Construction",
        heading:
          "RKJI's business management is 100% digitally channelised through RKJI-Tech software monitor, control & ensure",
        bulletPoints: ["mansab", "mansab", "mansab"],
        buttonLink: "",
        bgImage: "/images/headerOne.jpg",
      },
      {
        id: 2,
        subHeading: "Welcome To RKJI Construction",
        heading:
          "RKJI's business management is 100% digitally channelised through RKJI-Tech software monitor, control & ensure",
        bulletPoints: ["mansab", "mansab", "mansab"],
        buttonLink: "",
        bgImage: "/images/headerTwo.jpg",
      },
    ],
    []
  );
  return (
    <div>
      <SwiperComponent swiperConfig={swiperConfig}>
        {content.map((eachContent) => {
          return (
            <SwiperSlide key={eachContent.id}>
              <HeaderLayout obj={eachContent} />;
            </SwiperSlide>
          );
        })}
      </SwiperComponent>
    </div>
  );
};
