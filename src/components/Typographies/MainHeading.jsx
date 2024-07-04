import { Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";

export const MainHeading = ({
  variant,
  color,
  textAlign,
  fontWeight,
  fontFamily,
  children,
}) => {
  const theme = useTheme();
  return (
    <div>
      <Typography
        variant={variant ? variant : "h4"}
        color={color ? color : theme?.palette?.fontColor.heading}
        textAlign={textAlign ? textAlign : "center"}
        fontWeight={fontWeight ? fontWeight : "bold"}
        fontFamily={fontFamily ? fontFamily : theme.typography.fontFamily}
      >
        {children}
      </Typography>
    </div>
  );
};

MainHeading.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  textAlign: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontFamily: PropTypes.string,
  children: PropTypes.node.isRequired,
};

MainHeading.defaultProps = {
  variant: "h4",
  textAlign: "center",
  fontWeight: "bold",
};
