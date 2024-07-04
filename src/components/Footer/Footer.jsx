import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { SubHeading } from "../Typographies/SubHeading";

export const Footer = () => {
  const theme = useTheme();
  const { footer } = theme.palette.backgrounds;
  return (
    <Box bgcolor={footer}>
      <Container>
        <Grid2 container>
          <Grid2 item xs={12} md={12}>
            <Box
              display='flex'
              justifyContent={"space-between"}
              px={5}
              //   borderRight={1}
              py={3}
              borderBottom={2}
              borderColor={"#412763"}
            >
              <Box display='flex' gap={2}>
                <img src='/icons/call.png' alt='' />
                <div>
                  <Typography
                    fontWeight={"600"}
                    variant='body1'
                    color={"backgrounds.navbar"}
                  >
                    Give us a call
                  </Typography>
                  <Typography fontWeight={600} variant='body2' color={"white"}>
                    9595959595
                  </Typography>
                </div>
              </Box>
              <Box ml='auto' display={"flex"} alignItems={"center"} gap={3}>
                {["fb", "yt", "in", "skype"].map((iconName, i) => (
                  <img
                    src={`/icons/${iconName}.png`}
                    width={"18px"}
                    style={{ cursor: "pointer" }}
                    height={"16px"}
                    key={i}
                    alt=''
                  />
                ))}
              </Box>
            </Box>
          </Grid2>
          {/* <Grid2 item xs={12} md={6}>
            <Box display='flex' justifyContent={"space-between"} alignItems={'center'} px={5} py={3}>
              <Box display='flex' gap={2}>
                <div>
                  <Typography
                    fontWeight={"600"}
                    variant='body1'
                    color={"backgrounds.navbar"}
                  >
                    Join Our Newsletter
                  </Typography>
                </div>
              </Box>
              <Box ml='auto' display={"flex"} alignItems={"center"} gap={3}>
                <TextField variant="outlined"
                  sx={{ borderRadius: 25, backgroundColor: "#043177" , border:"transparent" , ":focus":"none"}}
                              >
                </TextField>
                                  <Button>Submit</Button>
              </Box>
            </Box>
          </Grid2> */}
        </Grid2>

        <Grid2 container py={10}>
          <Grid2 item md={3} xs={12}>
            <Box display={"flex"} flexDirection={"column"}>
              <img
                src='/icons/footerLogo.png'
                height={"43px"}
                width={"90px"}
                alt=''
              />
              <SubHeading color={"whitesmoke"} variant={"body2"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis mollitia obcaecati, animi perferendis ad tempora
                maiores repudiandae ducimus architecto non dolorum, modi saepe
                provident libero, dolores aspernatur hic pariatur nisi?
              </SubHeading>
            </Box>
          </Grid2>
          <Grid2 item md={3} xs={4}>
            <Box
              display={"flex"}
              height={"100%"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              alignItems={"center"}
              color={"white"}
            >
              <Typography
                variant='h6'
                textAlign={"center"}
                color={"white"}
                sx={{ textDecoration: "underline" }}
              >
                RESOURCES
              </Typography>
              <Typography>About </Typography>
              <Typography>Faq</Typography>
              <Typography>Contact </Typography>
            </Box>
          </Grid2>
          <Grid2 item md={3} xs={4}>
            <Box
              display={"flex"}
              height={"100%"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              alignItems={"center"}
              color={"white"}
            >
              <Typography
                variant='h6'
                textAlign={"center"}
                color={"white"}
                sx={{ textDecoration: "underline" }}
              >
                COMPANY
              </Typography>
              <Typography>About </Typography>
              <Typography>Faq</Typography>
              <Typography>Contact </Typography>
            </Box>
          </Grid2>
          <Grid2 item md={3} xs={4}>
            <Box
              display={"flex"}
              height={"100%"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              alignItems={"center"}
              color={"white"}
            >
              <Typography
                variant='h6'
                textAlign={"center"}
                color={"white"}
                sx={{ textDecoration: "underline" }}
              >
                HELP PAGE
              </Typography>
              <Typography>About </Typography>
              <Typography>Faq</Typography>
              <Typography>Contact </Typography>
            </Box>
          </Grid2>
        </Grid2>

        <Box>
          <Typography textAlign={'center'} color={'white'}>© Copyright 2023 All rights reserved.</Typography>
          <Typography variant="body2" mt={2} textAlign={'center'} color={'white'}>Developed & Maintained by <a href="https://www.codechip.in" target="_blank" style={{color:'white'}}>Codechip</a>.</Typography>
        </Box>
      </Container>
    </Box>
  );
};
