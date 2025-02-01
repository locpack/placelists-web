import { InitialPlacelistState } from "@/types/redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  createPlacelist,
  deletePlacelistById,
  getPlacelistById,
  getPlacelistPlacesById,
  getPlacelistsByQuery,
  updatePlacelistById,
  updatePlacelistPlacesById,
} from "../api-actions/placelist-actions";
import { Error } from "./../../types/common";

const initialState: InitialPlacelistState = {
  placelist: null,
  placelists: [],
  places: [],
  loading: false,
  errors: [],
};

export const placelistReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getPlacelistsByQuery.pending, (state) => {
      state.loading = true;
    })
    .addCase(getPlacelistsByQuery.fulfilled, (state, action) => {
      state.placelist = null;
      state.placelists = action.payload;
      state.loading = false;
      state.errors = [];
    })
    .addCase(getPlacelistsByQuery.rejected, (state, action) => {
      state.placelist = null;
      state.placelists = [];
      state.loading = false;
      state.errors = action.payload as Error[];
    })
    .addCase(createPlacelist.pending, (state) => {
      state.loading = true;
    })
    .addCase(createPlacelist.fulfilled, (state, action) => {
      state.placelist = action.payload;
      state.placelists = [];
      state.loading = false;
      state.errors = [];
    })
    .addCase(createPlacelist.rejected, (state, action) => {
      state.placelist = null;
      state.placelists = [];
      state.loading = false;
      state.errors = action.payload as Error[];
    })
    .addCase(getPlacelistById.pending, (state) => {
      state.loading = true;
    })
    .addCase(getPlacelistById.fulfilled, (state, action) => {
      state.placelist = action.payload;
      state.placelists = [];
      state.loading = false;
      state.errors = [];
    })
    .addCase(getPlacelistById.rejected, (state, action) => {
      state.placelist = null;
      state.placelists = [];
      state.loading = false;
      state.errors = action.payload as Error[];
    })
    .addCase(getPlacelistPlacesById.pending, (state) => {
      state.loading = true;
    })
    .addCase(getPlacelistPlacesById.fulfilled, (state, action) => {
      state.places = action.payload;
      state.loading = false;
      state.errors = [];
    })
    .addCase(getPlacelistPlacesById.rejected, (state, action) => {
      state.places = [];
      state.loading = false;
      state.errors = action.payload as Error[];
    })
    .addCase(updatePlacelistPlacesById.pending, (state) => {
      state.loading = true;
    })
    .addCase(updatePlacelistPlacesById.fulfilled, (state, action) => {
      state.places = action.payload;
      state.loading = false;
      state.errors = [];
    })
    .addCase(updatePlacelistPlacesById.rejected, (state, action) => {
      state.places = [];
      state.loading = false;
      state.errors = action.payload as Error[];
    })
    .addCase(updatePlacelistById.pending, (state) => {
      state.loading = true;
    })
    .addCase(updatePlacelistById.fulfilled, (state, action) => {
      state.placelist = action.payload;
      state.placelists = [];
      state.loading = false;
      state.errors = [];
    })
    .addCase(updatePlacelistById.rejected, (state, action) => {
      state.placelist = null;
      state.placelists = [];
      state.loading = false;
      state.errors = action.payload as Error[];
    })
    .addCase(deletePlacelistById.pending, (state) => {
      state.loading = true;
    })
    .addCase(deletePlacelistById.fulfilled, (state) => {
      state.placelist = null;
      state.placelists = [];
      state.loading = false;
      state.errors = [];
    })
    .addCase(deletePlacelistById.rejected, (state, action) => {
      state.placelists = [];
      state.loading = false;
      state.errors = action.payload as Error[];
    });
});
