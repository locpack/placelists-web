import { createReducer } from "@reduxjs/toolkit";
import { AuthStatus, RequestStatus } from "../settings";
import { InitialState } from "../types/redux";
import { checkAuth, fetchPlacelist, fetchPlacelists, login, logout, updatePlace } from "./api-actions";

const initialState: InitialState = {
  authStatus: AuthStatus.Unknown,
  user: null,
  fetchingPlacelistsStatus: RequestStatus.Fulfilled,
  fetchingPlacelistStatus: RequestStatus.Fulfilled,
  placelists: [],
  placelist: null,
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
      state.fetchingPlacelistsStatus = RequestStatus.Fulfilled;
      state.placelists = action.payload;
    })
    .addCase(fetchPlacelists.rejected, (state) => {
      state.fetchingPlacelistsStatus = RequestStatus.Error;
    })
    .addCase(fetchPlacelist.pending, (state) => {
      state.fetchingPlacelistStatus = RequestStatus.Pending;
      state.placelist = null;
    })
    .addCase(fetchPlacelist.fulfilled, (state, action) => {
      state.fetchingPlacelistStatus = RequestStatus.Fulfilled;
      state.placelist = action.payload;
    })
    .addCase(fetchPlacelist.rejected, (state) => {
      state.fetchingPlacelistStatus = RequestStatus.Error;
      state.placelist = null;
    })
    .addCase(updatePlace.fulfilled, (state, action) => {
      const places = state.placelist!.places;
      const index = places.findIndex((place) => place.id === action.payload.id);
      places[index] = {
        ...places[index],
        name: action.payload.name,
        address: action.payload.address,
        visited: action.payload.visited,
      };
    });
});
