import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import OnboardingSideIcon from "../../Assets/Icons/OnboardingSideIcon";
import GoogleIcon from "../../Assets/Icons/GoogleIcon";
import { useNavigate } from "react-router-dom";
import Popup from "../../Components/Modals/Popup";
import { createUser } from "../../features/users/userSlice";
import useSelectors from "../../app/selectors";

const SignUp = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { dispatch } = useSelectors();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCreateAccount = async (email, password, name) => {
    try {
      // Dispatch the createUserAsync action to create a user
      await dispatch(createUser({ email, password, name }));

      // The above dispatch will automatically handle loading, success, and error states.
      // You can handle any further actions or UI updates as needed.

      // If the user creation was successful, navigate to the desired route
      navigate("/");
    } catch (error) {
      // Handle any errors, if necessary
    }
  };
  return (
    <Stack>
      <Stack
        direction="row"
        gap="130px"
        alignItems="center"
        pb="140px"
        pt="30px"
      >
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
            Create an account
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="name"
              variant="standard"
              placeholder="Name"
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
              }}
            />
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
          <Stack justifyContent="center" mb="32px" gap="16px">
            <Button
              variant="contained"
              bgcolor="#DB4444"
              sx={{
                py: "16px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
              }}
              onClick={() => handleCreateAccount(email, password, name)}
            >
              Create Account
            </Button>
            <Button
              startIcon={<GoogleIcon />}
              variant="outlined"
              sx={{
                py: "16px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
              }}
              onClick={handleOpen}
            >
              Sign up with Google
            </Button>
          </Stack>
          <Typography
            fontSize="16px"
            fontWeight={400}
            lineHeight="24px"
            align="center"
          >
            Already have an account?{" "}
            <Typography
              fontWeight={600}
              sx={{ cursor: "pointer", display: "inline" }}
              onClick={() => navigate("/login")}
            >
              Log in
            </Typography>
          </Typography>
        </Stack>
      </Stack>
      <Popup open={open} handleClose={handleClose} />
    </Stack>
  );
};

export default SignUp;
