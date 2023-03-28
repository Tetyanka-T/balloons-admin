import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  admin: { email: null, password: null },
  token: null,
  isLoggedIn: false,
  isFetchingAdmin: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled]: (state, action) => {
      state.admin = action.payload.admin;
    },
    [authOperations.logIn.fulfilled]: (state, action) => {
      state.admin = action.payload.admin;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled]: (state, action) => {
      state.admin = { email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.currentAdmin.pending]: (state) => {
      state.isFetchingAdmin = true;
    },
    [authOperations.currentAdmin.fulfilled]: (state, action) => {
      state.admin = action.payload;
      state.isLoggedIn = true;
      state.isFetchingAdmin = false;
    },
    [authOperations.currentAdmin.rejected]: (state) => {
      state.isFetchingAdmin = false;
    },
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
