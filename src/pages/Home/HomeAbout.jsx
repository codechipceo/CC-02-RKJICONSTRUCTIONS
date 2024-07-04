import { MainHeading } from "../../components/Typographies/MainHeading";
import { SubHeading } from "../../components/Typographies/SubHeading";
import { Box } from "@mui/material";
import { BulletPoint } from "../../components/Cards/BulletPoint";

export const HomeAbout = () => {
  return (
    <div style={{marginTop:"auto", display:"flex", flexDirection:'column' , rowGap:15}}>
      <MainHeading textAlign={"left"}>About Us</MainHeading>
      <SubHeading>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
        aliquam corrupti culpa, aut suscipit cum repudiandae dolore commodi
        omnis deserunt eius amet. Beatae odio facere corrupti quia nobis,
        nostrum pariatur?
      </SubHeading>
      <SubHeading>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
        aliquam corrupti culpa, aut suscipit cum repudiandae dolore commodi
        omnis deserunt eius amet. Beatae odio facere corrupti quia nobis,
        nostrum pariatur?
      </SubHeading>
      <Box display={"flex"} gap={8}>
        <Box>
          {" "}
          <SubHeading fontWeight={"bold"}>
                      {" "}
                     <BulletPoint  url={'/icons/aboutArrow.png'} text={"100% Satisfaction"}/>
          </SubHeading>
          <SubHeading fontWeight={"bold"}>
                      {" "}
                     <BulletPoint  url={'/icons/aboutArrow.png'} text={"100% Satisfaction"}/>
          </SubHeading>
        </Box>
        <Box>
          {" "}
          <SubHeading fontWeight={"bold"}>
                      {" "}
                     <BulletPoint  url={'/icons/aboutArrow.png'} text={"100% Satisfaction"}/>
          </SubHeading>
          <SubHeading fontWeight={"bold"}>
                      {" "}
                     <BulletPoint  url={'/icons/aboutArrow.png'} text={"100% Satisfaction"}/>
          </SubHeading>
        </Box>
      </Box>
    </div>
  );
};
