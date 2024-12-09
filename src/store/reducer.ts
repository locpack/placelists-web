import { createReducer } from "@reduxjs/toolkit";
import { AuthStatus, RequestStatus } from "../settings";
import { InitialState } from "../types/redux";
import { checkAuth, fetchPlacelists, login, logout } from "./api-actions";

const initialState: InitialState = {
  authStatus: AuthStatus.Unknown,
  user: null,
  fetchingPlacelistsStatus: RequestStatus.Idle,
  placelists: [],
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
    })
    .addCase(fetchPlacelists.pending, (state) => {
      state.fetchingPlacelistsStatus = RequestStatus.Pending;
    })
    .addCase(fetchPlacelists.fulfilled, (state, action) => {
      state.fetchingPlacelistsStatus = RequestStatus.Success;
      state.placelists = action.payload;
    })
    .addCase(fetchPlacelists.rejected, (state) => {
      state.fetchingPlacelistsStatus = RequestStatus.Error;
    });
});
