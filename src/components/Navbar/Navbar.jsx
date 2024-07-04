import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const pages = ["Home", "About", "Service", "Project", "Contact"];

  const handleNavigation = (page) => {
    if (page === "Home") {
      page = "";
    }
    navigate(`/${String(page).toLowerCase()}`);
  };

  return (
    <AppBar
      elevation={0}
      position='relative'
      sx={{
        bgcolor: "backgrounds.navbar",
        maxWidth: {
          xs: "100%",
          md: "80%",
        },
        mx: "auto",
        borderRadius: 3,
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign='center'
                    onClick={() => handleNavigation(page)}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigation(page)}
                sx={{
                  my: 2, color: "white",fontWeight:600, display: "block", "&:hover": {
                  color:"fontColor.subHeading",
                }}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button
            onClick={() => handleNavigation("contact")}
            sx={{
              fontWeight: "bold",
              my: 2,
              backgroundColor: "white",
              color: "backgrounds.navbar",
              "&:hover": {
                backgroundColor:'fontColor.subHeading'
              }
            }}
          >
            Get A Quote
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
