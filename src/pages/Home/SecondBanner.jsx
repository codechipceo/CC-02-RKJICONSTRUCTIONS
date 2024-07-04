import { Box, Button, Container } from "@mui/material";
import React from "react";
import { MainHeading } from "../../components/Typographies/MainHeading";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { MainButton } from "../../components/CustomButton/MainButton";

export const SecondBanner = () => {
  return (
    <Container>
      <Box bgcolor={"backgrounds.navbar"} py={4} borderRadius={5} px={4}>
        <Grid2 container>
          <Grid2 md={6} item display={"flex"} flexDirection={"column"}>
            <MainHeading textAlign={"left"}>
              Embark on your Business modernization journey today
                      </MainHeading>
                      <Box mt={"auto"} display={'flex'} gap={4}>

            <Button
              variant='contained'
              sx={{
                mt: "auto",
                backgroundColor: "fontColor.subHeading",
                maxWidth: "fit-content",
                "&:hover": {
                  backgroundColor: "fontColor.subHeading",
                },
              }}
            >
              Our Services
            </Button>
            <Button
              variant='contained'
              sx={{
                mt: "auto",
                backgroundColor: "fontColor.subHeading",
                maxWidth: "fit-content",
                "&:hover": {
                  backgroundColor: "fontColor.subHeading",
                },
              }}
            >
              Get A QUote
            </Button>
                      </Box>
          </Grid2>
          <Grid2 md={4} item ml={"auto"}>
            <img src='/images/bannerOne.png' width={"100%"} alt='' />
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};
