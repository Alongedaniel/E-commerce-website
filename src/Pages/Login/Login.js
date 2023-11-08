import {
  Box,
  Button,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import OnboardingSideIcon from "../../Assets/Icons/OnboardingSideIcon";
import { loginUser } from "../../features/users/userSlice";
import useSelectors from "../../app/selectors";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useSelectors();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      // Dispatch the createUserAsync action to create a user
      await dispatch(loginUser({ email, password }));

      // The above dispatch will automatically handle loading, success, and error states.
      // You can handle any further actions or UI updates as needed.

      // If the user creation was successful, navigate to the desired route
      navigate(location.state.path);
    } catch (error) {
      // Handle any errors, if necessary
    }
  };
  return (
    <Stack direction="row" gap="130px" alignItems="center" pb="140px" pt="30px">
      <OnboardingSideIcon />
      <Stack maxWidth="381px">
        <Typography
          fontFamily="Inter"
          fontSize="36px"
          fontWeight={500}
          lineHeight="30px"
          letterSpacing="1.44px"
          mb="24px"
        >
          Log in to uShopHere
        </Typography>
        <Typography
          fontSize="16px"
          fontWeight={400}
          lineHeight="24px"
          mb="48px"
        >
          Enter your details below
        </Typography>
        <Stack gap="40px" mb="40px">
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            variant="standard"
            placeholder="Email"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
            }}
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            variant="standard"
            placeholder="Password"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
            }}
          />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb="32px"
        >
          <Button
            variant="contained"
            bgcolor="#DB4444"
            sx={{
              px: "48px",
              py: "16px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
            }}
            onClick={handleLogin}
          >
            Log in
          </Button>
          <Typography
            sx={{ cursor: "pointer" }}
            fontSize="16px"
            fontWeight={400}
            lineHeight="24px"
            color="#DB4444"
          >
            Forget Password?
          </Typography>
        </Stack>
        <Typography
          fontSize="16px"
          fontWeight={400}
          lineHeight="24px"
          align="center"
        >
          Don't have an account?{" "}
          <Typography
            fontWeight={600}
            sx={{ cursor: "pointer", display: "inline" }}
            onClick={() => navigate("/sign-up")}
          >
            Create account
          </Typography>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Login;
