import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserStart: (state) => {
      state.loading = true;
    },
    getUserSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    },
    getUserFailure: (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //       builder.addCase(fetchUsers.pending, state => {
  //           state.loading = true;
  //       })
  //       builder.addCase(fetchUsers.success, (state, action) => {
  //           state.loading = false;
  //           state.users = action.payload;
  //           state.error = ''
  //       })
  //       builder
  //         .addCase(fetchUsers.rejected, (state, action) => {
  //           state.loading = false;
  //           state.users = [];
  //           state.error = action.payload;
  //         })
  //         builder.addDefaultCase((state, action) => {});
  //   }
});

export const { getUserFailure, getUserStart, getUserSuccess } =
  userSlice.actions;
export default userSlice.reducer;
