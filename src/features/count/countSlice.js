import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  currentUser: JSON.parse(localStorage.getItem("user")), //This holds the list of users. I would not be needing that outside this file
  error: "",
  authenticatedUser: null,
  isAuthenticatedUser: JSON.parse(localStorage.getItem("authenticatedUser")), //This holds the data of the currently logged in user
};

const countSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("user", JSON.stringify(state.users));
    },
    loginUser: (state, action) => {
      state.currentUser
        .filter((user) => user?.name?.firstname === action.payload)
        .map((user) => (state.authenticatedUser = user));
      if (state.authenticatedUser?.name?.firstname !== action.payload)
        state.error = "Wrong name";
      else {
        localStorage.setItem(
          "authenticatedUser",
          JSON.stringify(state.authenticatedUser)
        );
        state.error = "";
      }
    },
  },
});

export const { incrementCount, createUser, loginUser } = countSlice.actions;

export default countSlice.reducer;
