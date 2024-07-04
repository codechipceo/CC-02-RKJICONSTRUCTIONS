import { Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const MainButton = ({ children, border, url, ...props }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const buttonBg = theme.palette.backgrounds.buttonBg;
  const btnHover = theme.palette.backgrounds.btnHover;


  const borderRadius =
    border === "ROUND"
      ? 5
      : border === "FLAT"
      ? 0
      : border === undefined
      ? 0
      : 0;
  return (
    <Button
      {...props}
      variant='contained'
      sx={{
        bgcolor: buttonBg,
        px: 3,
        py: 1,
        "&:hover": { bgcolor: btnHover },
        borderRadius: borderRadius,
      }}
      onClick={() => navigate(url)}
    >
      {" "}
      {children}
    </Button>
  );
};
