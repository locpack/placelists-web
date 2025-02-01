import { InitialPlaceState } from "@/types/redux";
import { createReducer } from "@reduxjs/toolkit";
import { createPlace, getPlaceById, getPlacesByQuery, updatePlaceById } from "../api-actions/place-actions";

const initialState: InitialPlaceState = {
  place: null,
  places: [],
  loading: false,
};

export const placeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getPlacesByQuery.pending, (state) => {
      state.loading = true;
    })
    .addCase(getPlacesByQuery.fulfilled, (state, action) => {
      state.place = null;
      state.places = action.payload;
      state.loading = false;
    })
    .addCase(getPlacesByQuery.rejected, (state) => {
      state.place = null;
      state.places = [];
      state.loading = false;
    })
    .addCase(createPlace.pending, (state) => {
      state.loading = true;
    })
    .addCase(createPlace.fulfilled, (state, action) => {
      state.place = action.payload;
      state.places = [];
      state.loading = false;
    })
    .addCase(createPlace.rejected, (state) => {
      state.place = null;
      state.places = [];
      state.loading = false;
    })
    .addCase(getPlaceById.pending, (state) => {
      state.loading = true;
    })
    .addCase(getPlaceById.fulfilled, (state, action) => {
      state.place = action.payload;
      state.places = [];
      state.loading = false;
    })
    .addCase(getPlaceById.rejected, (state) => {
      state.place = null;
      state.places = [];
      state.loading = false;
    })
    .addCase(updatePlaceById.pending, (state) => {
      state.loading = true;
    })
    .addCase(updatePlaceById.fulfilled, (state, action) => {
      state.place = action.payload;
      state.places = [];
      state.loading = false;
    })
    .addCase(updatePlaceById.rejected, (state) => {
      state.place = null;
      state.places = [];
      state.loading = false;
    });
});
