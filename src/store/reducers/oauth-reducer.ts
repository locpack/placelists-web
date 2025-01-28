import { AuthStatus, TOKEN_KEY_NAME } from "@/settings";
import { OauthInitialState } from "@/types/redux";
import { createReducer } from "@reduxjs/toolkit";
import { callback, login, logout } from "../api-actions/oauth-actions";

const initialState: OauthInitialState = {
  token: localStorage.getItem(TOKEN_KEY_NAME) ?? null,
  authStatus: AuthStatus.Unknown,
  loading: false,
};

export const oauthReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.pending, (state) => {
      state.loading = true;
    })
    .addCase(login.fulfilled, (state) => {
      state.loading = false;
    })
    .addCase(login.rejected, (state) => {
      state.loading = false;
    })
    .addCase(callback.pending, (state) => {
      state.loading = true;
    })
    .addCase(callback.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.authStatus = AuthStatus.Authorized;
    })
    .addCase(callback.rejected, (state) => {
      state.loading = false;
      state.authStatus = AuthStatus.Unknown;
    })
    .addCase(logout.pending, (state) => {
      state.loading = true;
    })
    .addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.token = null;
      state.authStatus = AuthStatus.NotAuthorized;
    })
    .addCase(logout.rejected, (state) => {
      state.loading = false;
      state.authStatus = AuthStatus.Unknown;
    });
});
