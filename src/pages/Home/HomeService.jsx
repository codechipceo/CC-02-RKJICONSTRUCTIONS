import { Box, Container } from "@mui/material";
import { useState } from "react";
import { MainHeading } from "../../components/Typographies/MainHeading";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { AccordionComponent } from "../../components/AccordionComponent/AccordionComponent";

export const HomeService = () => {
  const [expanded, setExpanded] = useState(0);
  const handleExpand = (panel) => {
    setExpanded(expanded === panel ? false : panel);
  };
  const servicesData = [
    {
      title: "title",
      detail: "detail",
    },
    {
      title: "title",
      detail: "detail",
    },
    {
      title: "title",
      detail: "detail",
    },
    {
      title: "title",
      detail: "detail",
    },
    {
      title: "title",
      detail: "detail",
    },
    {
      title: "title",
      detail: "detail",
    },
  ];
  return (
    <Box py={10}>
      <MainHeading>Our Services</MainHeading>
      <Container>
        <Grid2 container>
          <Grid2 item xs={12} md={4}>
            <img src='/images/serviceMain.png' width={"100%"} alt='' />
          </Grid2>
          <Grid2 item xs={12} md={7} ml={3}>
            {servicesData.map((obj, i) => {
              return (
                <AccordionComponent
                  key={i}
                  index={i}
                  isExpanded={expanded}
                  handleChange={handleExpand}
                  title={obj.title}
                  detail={ obj.detail}
                />
              );
            })}
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};
