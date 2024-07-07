import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { SubHeading } from "../../components/Typographies/SubHeading";
import { MainButton } from "../../components/CustomButton/MainButton";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const OurValuesSection = () => {
  const [tabs, setTabs] = useState(0);
  const tabsConent = [
    `1Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate explicabo omnis saepe labore iusto molestias iste obcaecati, amet dolore nisi voluptates? Labore illum similique itaque  perspiciatis sed ex?`,
    `2Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate explicabo omnis saepe labore iusto molestias iste obcaecati, amet dolore nisi voluptates? Labore illum similique itaque  perspiciatis sed ex?`,
    `3Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate explicabo omnis saepe labore iusto molestias iste obcaecati, amet dolore nisi voluptates? Labore illum similique itaque  perspiciatis sed ex?`,
  ];
  return (
    <Grid2 container my={6}>
      <Grid2 item xs={12} md={5}>
        <Typography
          variant={"h4"}
          fontWeight={600}
          color={"black"}
          my={2}
          textAlign={"left"}
        >
          A team of reliable and <br /> experienced Contractors.
        </Typography>
        <SubHeading>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          voluptate explicabo omnis saepe labore iusto molestias iste obcaecati,
          amet dolore nisi voluptates? Labore illum similique itaque nihil
          perspiciatis sed ex?
        </SubHeading>
        <Box mt={3} gap={3} sx={{ display: { xs: "block", md: "flex" } }}>
          {["Our Vission", "Our Mission", "Our Value"].map((item, i) => {
            return (
              <Button
                sx={{
                  color: "black",
                  backgroundColor:
                    tabs === i ? "backgrounds.secondaryBg" : "transparent",
                  "&:hover": {
                    backgroundColor:
                      tabs === i ? "backgrounds.secondaryBg" : "transparent",
                  },
                }}
                onClick={() => {
                  setTabs(i);
                }}
                key={i}
              >
                {item}
              </Button>
            );
          })}
        </Box>
        <Box
          mt={2}
          borderLeft={1}
          borderColor={"backgrounds.navbar"}
          pl={2}
          mb={6}
        >
          <SubHeading>{tabsConent[tabs]}</SubHeading>
        </Box>
        <MainButton>Get A Quote</MainButton>
      </Grid2>
      <Grid2 ml={"auto"} xs={12} item md={4}>
        <img src='/images/aboutTwo.jpg' style={{ width: "100%" }} alt='' />
      </Grid2>
    </Grid2>
  );
};
