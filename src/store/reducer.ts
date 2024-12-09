import { createReducer } from "@reduxjs/toolkit";
import { AuthStatus } from "../settings";
import { InitialState } from "../types/redux";
import { checkAuth, login, logout } from "./api-actions";

const initialState: InitialState = {
  authStatus: AuthStatus.Unknown,
  user: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(checkAuth.pending, (state) => {
      state.authStatus = AuthStatus.Unknown;
    })
    .addCase(checkAuth.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authStatus = AuthStatus.Authorized;
    })
    .addCase(checkAuth.rejected, (state) => {
      state.user = null;
      state.authStatus = AuthStatus.NotAuthorized;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authStatus = AuthStatus.Authorized;
    })
    .addCase(login.rejected, (state) => {
      state.user = null;
      state.authStatus = AuthStatus.NotAuthorized;
    })
    .addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.authStatus = AuthStatus.NotAuthorized;
    });
});
