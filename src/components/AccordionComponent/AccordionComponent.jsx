import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material";

export const AccordionComponent = ({
  isExpanded,
  handleChange,
  index,
  title,
  detail,
}) => {
  const theme = useTheme();
  const { navbar } = theme.palette.backgrounds;

  console.log(handleChange);
  return (
    <Accordion
      elevation={0}
      expanded={isExpanded === index}
      sx={{ border: 0 }}
      onChange={() => handleChange(index)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1bh-content'
        id='panel1bh-header'
      >
        <Typography
          variant='h6'
          textAlign={"center"}
          sx={{ width: "10%", flexShrink: 0 }}
          border={2}
          borderRadius={50}
          mr={3}
        >
          0{index + 1}
        </Typography>
        <Typography
          variant='h6'
          sx={{ color: "fontColor.subHeading", fontWeight: "bold" }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{detail}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
