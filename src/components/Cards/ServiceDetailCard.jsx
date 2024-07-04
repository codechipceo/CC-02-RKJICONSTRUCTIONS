import { Box, Typography, useTheme } from "@mui/material";
import { MainButton } from "../CustomButton/MainButton";

function BulletPoint({ children }) {
  return (
    <Box display={"flex"} gap={1} alignItems={"center"} my={1}>
      <img src='/icons/bulletArrow.png' alt='' />
      {children}
    </Box>
  );
}

export const ServiceDetailCard = ({ serviceDetailObject }) => {
  const theme = useTheme();
  const { heading, para, bulletPoints } = serviceDetailObject;
  return (
    <Box>
      <Typography
        variant='h3'
        fontWeight={"bold"}
        textAlign={"left"}
        color={theme.palette.fontColor.subHeading}
      >
        {" "}
        {heading}
      </Typography>
      <Typography
        variant='body1'
        textAlign={"justify"}
        color={theme.palette.fontColor.para}
      >
        {para}
      </Typography>
      {bulletPoints.map((point, i) => {
        return (
          <BulletPoint key={i}>
            <Typography
              color={theme.palette.fontColor.subHeading}
              variant='body1'
              fontWeight={"bold"}
            >
              {point}
            </Typography>
          </BulletPoint>
        );
      })}
      <MainButton border={"ROUND"} url={"/contact-us"}>
        {" "}
        Get A Quote
      </MainButton>
    </Box>
  );
};
