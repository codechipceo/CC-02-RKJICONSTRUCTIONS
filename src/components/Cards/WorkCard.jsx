import { Box, Typography, useTheme } from "@mui/material";

export const WorkCard = ({ img, heading, para }) => {
  const theme = useTheme();
  return (
    <Box px={3}  py={2} borderRadius={2} width={240} sx={{boxShadow:2 , backgroundColor:'white'}}>
      <img
        width={"50%"}
        style={{ aspectRatio: 1 / 1 }}
        src={img}
        alt=''
      />
      <Typography
        mb={2}
        color={theme.palette.fontColor.heading}
        fontWeight={"bold"}
        variant='h6'
      >
        {heading}{" "}
      </Typography>
      <Typography color={theme.palette.fontColor.subHeading} fontWeight={"500"}>
        {" "}
        {para}
      </Typography>
    </Box>
  );
};
