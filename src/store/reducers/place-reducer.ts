import { InitialPlaceState } from "@/types/redux";
import { createReducer } from "@reduxjs/toolkit";
import { createPlace, getPlaceById, getPlacesByQuery, updatePlaceById } from "../api-actions/place-actions";
import { Error } from "./../../types/common";

const initialState: InitialPlaceState = {
  place: null,
  places: [],
  loading: false,
  errors: [],
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
      state.errors = [];
    })
    .addCase(getPlacesByQuery.rejected, (state, action) => {
      state.place = null;
      state.places = [];
      state.loading = false;
      state.errors = action.payload as Error[];
    })
    .addCase(createPlace.pending, (state) => {
      state.loading = true;
    })
    .addCase(createPlace.fulfilled, (state, action) => {
      state.place = action.payload;
      state.places = [];
      state.loading = false;
      state.errors = [];
    })
    .addCase(createPlace.rejected, (state, action) => {
      state.place = null;
      state.places = [];
      state.loading = false;
      state.errors = action.payload as Error[];
    })
    .addCase(getPlaceById.pending, (state) => {
      state.loading = true;
    })
    .addCase(getPlaceById.fulfilled, (state, action) => {
      state.place = action.payload;
      state.places = [];
      state.loading = false;
      state.errors = [];
    })
    .addCase(getPlaceById.rejected, (state, action) => {
      state.place = null;
      state.places = [];
      state.loading = false;
      state.errors = action.payload as Error[];
    })
    .addCase(updatePlaceById.pending, (state) => {
      state.loading = true;
    })
    .addCase(updatePlaceById.fulfilled, (state, action) => {
      state.place = action.payload;
      state.places = [];
      state.loading = false;
      state.errors = [];
    })
    .addCase(updatePlaceById.rejected, (state, action) => {
      state.place = null;
      state.places = [];
      state.loading = false;
      state.errors = action.payload as Error[];
    });
});
