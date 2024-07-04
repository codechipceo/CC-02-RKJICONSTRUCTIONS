import { Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";

export const SubHeading = ({
  variant,
  color,
  textAlign,
  fontWeight,
  fontFamily,
  children,
}) => {
  const theme = useTheme();
  return (
    <Typography
      variant={variant ? variant : "body1"}
      color={color ? color : theme?.palette?.fontColor.subHeading}
      textAlign={textAlign ? textAlign : "justify"}
      fontWeight={fontWeight ? fontWeight : "normal"}
      fontFamily={fontFamily ? fontFamily : theme.typography.fontFamily}
    >
      {children}
    </Typography>
  );
};

SubHeading.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  textAlign: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontFamily: PropTypes.string,
  children: PropTypes.node.isRequired,
};

SubHeading.defaultProps = {
  variant: "body1",
  textAlign: "justify",
  fontWeight: "normal",
};
