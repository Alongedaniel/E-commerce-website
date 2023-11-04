import React from "react";
import { Stack, Typography, Box, InputAdornment, Input } from "@mui/material";
import SendIcon from "../../Assets/Icons/SendIcon";

const Footer = () => {
  return (
    <Stack bgcolor="#000" pt="80px" pb="24px">
      <Box
        display="flex"
        px={{ lg: "60px", xs: "16px" }}
        mb="60px"
        justifyContent="space-between"
      >
        <Box float="left">
          <Typography
            fontFamily="Inter"
            fontSize="24px"
            mb="24px"
            fontWeight={700}
            lineHeight="24px"
            letterSpacing="0.72px"
            color="#fafafa"
          >
            uShopHere
          </Typography>
          <Typography
            fontSize="20px"
            fontWeight={500}
            mb="24px"
            lineHeight="28px"
            color="#fafafa"
          >
            Subcribe
          </Typography>
          <Typography
            fontSize="16px"
            mb="16px"
            fontWeight={500}
            lineHeight="24px"
            color="#fafafa"
          >
            Get 10% off your first order
          </Typography>
          {/* <TextField sx={{
            borderColor: '#f5f5f5', bgcolor: 'red', color: 'blue', fontSize: '212px', '& .MuiTextField-outlined': {
              borderColor: '#fff'
            }
          }} id="email" InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SendIcon />
              </InputAdornment>
            ),
            }} name='email' placeholder='Enter your email' margin='none' size='small' /> */}
          <Input
            id="search"
            name="search"
            placeholder="Enter your email?"
            sx={{
              fontSize: "12px",
              px: "16px",
              py: "12px",
              border: "1px solid white",
              color: "#fafafa",
            }}
            endAdornment={
              <InputAdornment sx={{ cursor: "pointer" }} position="end">
                <SendIcon />
              </InputAdornment>
            }
          />
        </Box>
        <Box display="flex" gap="87px">
          <Box>
            <Typography
              fontSize="20px"
              fontWeight={500}
              mb="24px"
              lineHeight="28px"
              color="#fafafa"
            >
              Support
            </Typography>
            <Typography
              fontSize="16px"
              mb="16px"
              fontWeight={500}
              lineHeight="24px"
              color="#fafafa"
            >
              No.5 Close E, Ikeja, Lagos
            </Typography>
            <Typography
              fontSize="16px"
              mb="16px"
              fontWeight={500}
              lineHeight="24px"
              color="#fafafa"
            >
              alongedaniel41@gmail.com
            </Typography>
            <Typography
              fontSize="16px"
              fontWeight={500}
              lineHeight="24px"
              color="#fafafa"
            >
              0916000000
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize="20px"
              fontWeight={500}
              mb="24px"
              lineHeight="28px"
              color="#fafafa"
            >
              Account
            </Typography>
            <Typography
              fontSize="16px"
              mb="16px"
              fontWeight={500}
              lineHeight="24px"
              color="#fafafa"
              sx={{ cursor: "pointer" }}
            >
              My Account
            </Typography>
            <Typography
              fontSize="16px"
              mb="16px"
              fontWeight={500}
              lineHeight="24px"
              color="#fafafa"
              sx={{ cursor: "pointer" }}
            >
              Login/Register
            </Typography>
            <Typography
              fontSize="16px"
              mb="16px"
              fontWeight={500}
              lineHeight="24px"
              color="#fafafa"
              sx={{ cursor: "pointer" }}
            >
              Cart
            </Typography>
            <Typography
              fontSize="16px"
              mb="16px"
              fontWeight={500}
              lineHeight="24px"
              color="#fafafa"
              sx={{ cursor: "pointer" }}
            >
              Wishlist
            </Typography>
            <Typography
              fontSize="16px"
              fontWeight={500}
              lineHeight="24px"
              color="#fafafa"
              sx={{ cursor: "pointer" }}
            >
              Shop
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize="20px"
              fontWeight={500}
              mb="24px"
              lineHeight="28px"
              color="#fafafa"
            >
              Quick Link
            </Typography>
            <Typography
              fontSize="16px"
              mb="16px"
              fontWeight={500}
              lineHeight="24px"
              color="#fafafa"
              sx={{ cursor: "pointer" }}
            >
              Privacy Policy
            </Typography>
            <Typography
              fontSize="16px"
              mb="16px"
              fontWeight={500}
              lineHeight="24px"
              color="#fafafa"
              sx={{ cursor: "pointer" }}
            >
              Term Of Use
            </Typography>
            <Typography
              fontSize="16px"
              mb="16px"
              fontWeight={500}
              lineHeight="24px"
              color="#fafafa"
              sx={{ cursor: "pointer" }}
            >
              FAQ
            </Typography>
            <Typography
              fontSize="16px"
              fontWeight={500}
              lineHeight="24px"
              color="#fafafa"
              sx={{ cursor: "pointer" }}
            >
              Contact
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box height="1px" bgcolor="#fff" sx={{ opacity: 0.5 }}></Box>
      <Box
        pt="16px"
        px={{ lg: "60px", xs: "16px" }}
        display="flex"
        justifyContent="center"
      >
        <Typography
          fontSize="16px"
          fontWeight={400}
          lineHeight="24px"
          color="#555"
        >
          &copy; Copyright 2023. All rights reserved
        </Typography>
      </Box>
    </Stack>
  );
};

export default Footer;
