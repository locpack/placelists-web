import { InitialState } from "@/types/redux";
import { createReducer } from "@reduxjs/toolkit";
import { clearPlaces } from "./actions/place-actions";
import { clearPlacelists } from "./actions/placelist-actions";
import {
  createPlace,
  getPlaceById,
  getPlacesByQuery,
  updatePlaceById,
} from "./api-actions/place-api-actions";
import {
  createPlacelist,
  deletePlacelistById,
  getPlacelistById,
  getPlacelistPlacesById,
  getPlacelistsByQuery,
  updatePlacelistById,
  updatePlacelistPlacesById,
} from "./api-actions/placelist-api-actions";
import { getUserByUsername, updateUserByUsername } from "./api-actions/user-api-actions";

const initialState: InitialState = {
  user: null,
  placelist: null,
  placelists: [],
  place: null,
  places: [],
  loading: false,
  errors: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUserByUsername.pending, (state) => {
      state.loading = true;
    })
    .addCase(getUserByUsername.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.errors = [];
    })
    .addCase(getUserByUsername.rejected, (state, action) => {
      state.user = null;
      state.loading = false;
      state.errors = action.payload as Error[];
    })
    .addCase(updateUserByUsername.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateUserByUsername.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.errors = [];
    })
    .addCase(updateUserByUsername.rejected, (state, action) => {
      state.user = null;
      state.loading = false;
      state.errors = action.payload as Error[];
    })
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
    })
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
    })
    .addCase(clearPlacelists, (state) => {
      state.placelists = [];
    })
    .addCase(clearPlaces, (state) => {
      state.places = [];
    });
});
