import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../../Firebase/FirebaseAuth";

const auth = getAuth(app);

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password,
        userData.name
      );
      await updateProfile(userCredential.user, {
        displayName: userData.name,
      });
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }
);
export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(state.user));
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(state.user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(logoutUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        localStorage.removeItem("user");
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

// const initialState = {
//   loading: false,
//   user: null,
//   error: "",
//   errorCode: ''
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     createUser: async (state, action) => {
//       try {
//         state.loading = true
//         const userCredential = await createUserWithEmailAndPassword(auth, action.payload)
//         state.user = userCredential.user;
//         state.error = '';
//         state.loading = false;
//       }
//         catch (error) {
//            state.errorCode = error.code;
//           state.error = error.message;
//           state.loading = false;
//           // ..
//         };
//     }
//   },
//   //   extraReducers: (builder) => {
//   //       builder.addCase(fetchUsers.pending, state => {
//   //           state.loading = true;
//   //       })
//   //       builder.addCase(fetchUsers.success, (state, action) => {
//   //           state.loading = false;
//   //           state.users = action.payload;
//   //           state.error = ''
//   //       })
//   //       builder
//   //         .addCase(fetchUsers.rejected, (state, action) => {
//   //           state.loading = false;
//   //           state.users = [];
//   //           state.error = action.payload;
//   //         })
//   //         builder.addDefaultCase((state, action) => {});
//   //   }
// });
// export { createUser }
// export const { createUser } =
//   userSlice.actions;
export default userSlice.reducer;
