import { Box, Container } from "@mui/material";
import { DefaultBottomLayout } from "../../components/AccordionComponent/Common/DefaultBottomLayout";
import { PageHeader } from "../../components/Header/PageHeader";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ServiceDetailCard } from "../../components/Cards/ServiceDetailCard";

const ServiceComponent = ({ serviceObj, direction }) => {
  console.log(direction);
  const { img } = serviceObj;
  return (
    <Container>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        sx={{
          flexWrap: "wrap",
          flexDirection: {
            xs: "column",
            md: direction ? "row" : "row-reverse",
          },
        }}
      >
        <Box flex={1} ml={"auto"}>
          <img src={`/images/${img}.png`} alt='' height={""} width={"100%"} />
        </Box>
        <Box flex={0.5}></Box>
        <Box flex={1}>
          <ServiceDetailCard serviceDetailObject={serviceObj} />
        </Box>
      </Box>
    </Container>
  );
};

export const Service = () => {
  const services = [
    {
      heading: "3D Modelling",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in egestas felis, vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in egestas felis, vitae. Lorem ipsum dolor sit amet",
      bulletPoints: ["First", "Second", "Third", "Fourth"],
      img: "serviceOne",
      direction: "left",
    },
    {
      heading: "2D Floor Plans",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in egestas felis, vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in egestas felis, vitae. Lorem ipsum dolor sit amet",
      bulletPoints: ["First", "Second", "Third", "Fourth"],
      img: "serviceTwo",
    },
    {
      heading: "Private Villa Construction",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in egestas felis, vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in egestas felis, vitae. Lorem ipsum dolor sit amet",
      bulletPoints: ["First", "Second", "Third", "Fourth"],
      img: "serviceThree",
      direction: "left",
    },
    {
      heading: "Interior Designing",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in egestas felis, vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in egestas felis, vitae. Lorem ipsum dolor sit amet",
      bulletPoints: ["First", "Second", "Third", "Fourth"],
      img: "serviceFour",
      direction: "left",
    },
    {
      heading: "Commercial Construction",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in egestas felis, vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in egestas felis, vitae. Lorem ipsum dolor sit amet",
      bulletPoints: ["First", "Second", "Third", "Fourth"],
      img: "serviceFive",
      direction: "left",
    },
    {
      heading: "Apartment Construction",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in egestas felis, vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in egestas felis, vitae. Lorem ipsum dolor sit amet",
      bulletPoints: ["First", "Second", "Third", "Fourth"],
      img: "serviceSix",
      direction: "left",
    },
  ];
  return (
    <div>
      <PageHeader pageTitle={"Our Services"} pages={["Home", "Services"]} />

      {services.map((serviceObj, i) => {
        return (
          <Box key={i} my={5}>
            <ServiceComponent
              key={i}
              serviceObj={serviceObj}
              direction={i % 2 === 0 ? "left" : ""}
            />
            ;
          </Box>
        );
      })}
      <DefaultBottomLayout />
    </div>
  );
};
