import {
  Box,
  Container,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "@fontsource/inter";
import HeartIcon from "../../Assets/Icons/HeartIcon";
import CartIcon from "../../Assets/Icons/CartIcon";
import SearchIcon from "../../Assets/Icons/SearchIcon";
import Theme from "../../Theme/Theme";
import MenuIcon from "../../Assets/Icons/MenuIcon";

const Navbar = () => {
  const { tablet, mobile } = Theme();
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Sign up",
      path: "/signup",
    },
  ];
  return (
    <Container sx={{ position: "fixed" }} maxWidth="xl" disableGutters>
      <Stack
        bgcolor="#f9f9f9"
        zIndex={999}
        py="16px"
        px={{ lg: "60px", xs: "16px" }}
        direction="row"
        justifyContent={mobile ? "space-between" : undefined}
        alignItems="center"
      >
        <Box sx={{ cursor: "pointer" }}>
          <Typography
            fontFamily="Inter"
            fontSize="24px"
            fontStyle="normal"
            fontWeight={700}
            lineHeight="24px"
            letterSpacing="0.72px"
          >
            uShopHere
          </Typography>
        </Box>
        {mobile ? (
          <Box>
            <MenuIcon />
          </Box>
        ) : (
          <>
            <Box
              flex={1}
              gap="48px"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {navItems.map((item) => (
                <Typography
                  py="3px"
                  fontSize="16px"
                  fontWeight={400}
                  lineHeight="24px"
                  sx={{
                    borderBottom: "1px solid transparent",
                    cursor: "pointer",
                    "&:hover": {
                      borderBottomColor: "#000",
                    },
                  }}
                  key={item.name}
                >
                  {item.name}
                </Typography>
              ))}
            </Box>
            <Box display="flex" gap="24px" alignItems="center">
              <Box
                display="flex"
                alignItems="center"
                px="12px"
                gap="16px"
                py="7px"
                bgcolor="#f5f5f5"
              >
                {/* <TextField sx={{
            borderColor: '#f5f5f5', fontSize: '12px', '& .MuiTextField-root': {
            borderColor: 'transparent'
            }
          }} id="search" name='search' placeholder='What are you looking for?' margin='none' size='small' inputProps={{
            endIcon: <SendIcon />
          }} /> */}
                <Input
                  id="search"
                  name="search"
                  placeholder="What are you looking for?"
                  sx={{ fontSize: "12px", width: "158px" }}
                />
                <SearchIcon />
              </Box>
              <Box display="flex" gap="16px">
                <Box sx={{ cursor: "pointer" }}>
                  <HeartIcon />
                </Box>
                <Box sx={{ cursor: "pointer" }}>
                  <CartIcon />
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
