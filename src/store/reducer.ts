import { Placelist } from "@/types/placelist";
import { createReducer } from "@reduxjs/toolkit";
import { AuthStatus, RequestStatus } from "../settings";
import { InitialState } from "../types/redux";
import { fetchPlacelist, fetchPlacelists, login, logout, visitPlace } from "./api-actions";

const initialState: InitialState = {
  authStatus: AuthStatus.Unknown,
  user: null,
  fetchingPlacelistsStatus: RequestStatus.Fulfilled,
  fetchingPlacelistStatus: RequestStatus.Fulfilled,
  placelists: [],
  placelist: null,
  places: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
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
      state.placelists = action.payload.data;
    })
    .addCase(fetchPlacelists.rejected, (state) => {
      state.fetchingPlacelistsStatus = RequestStatus.Error;
      state.placelists = [];
    })
    .addCase(fetchPlacelist.pending, (state) => {
      state.fetchingPlacelistStatus = RequestStatus.Pending;
      state.placelist = null;
      state.places = [];
    })
    .addCase(fetchPlacelist.fulfilled, (state, action) => {
      state.fetchingPlacelistStatus = RequestStatus.Fulfilled;
      state.placelist = action.payload.data! as Placelist;
      state.places = action.payload.data!.places;
    })
    .addCase(fetchPlacelist.rejected, (state) => {
      state.fetchingPlacelistStatus = RequestStatus.Error;
      state.placelist = null;
      state.places = [];
    })
    // .addCase(visitPlace.fulfilled, (state, action) => {
    //   const index = state.places.findIndex((place) => place.id === action.payload.data!.id);
    //   state.places[index] = {
    //     ...state.places[index],
    //     name: action.payload.name,
    //     address: action.payload.address,
    //     visited: action.payload.visited,
    //   };
    // })
    .addCase(visitPlace.fulfilled, (state, action) => {
      const index = 0;
      state.places[index] = {
        ...state.places[index],
        name: action.payload.data!.name,
        address: action.payload.data!.address,
        visited: action.payload.data!.visited,
      };
    });
});
