import type { InitialState } from "@/types/redux.ts";
import { createReducer } from "@reduxjs/toolkit";
import { AuthStatus } from "@/enums/enums.ts";
import { checkAuth, login, register } from "@/store/api-actions/auth.ts";
import type { Error } from "@/types/api.ts";
import { clearFoundPacks } from "@/store/actions/pack.ts";
import { getPacksByQuery, updateDiscoverPack } from "@/store/api-actions/pack.ts";

const initialState: InitialState = {
  user: null,
  foundPacks: [],
  auth: AuthStatus.No,
  loading: false,
  errors: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(clearFoundPacks, (state) => {
      state.foundPacks = [];
    })
    .addCase(getPacksByQuery.pending, (state) => {
      state.loading = true;
    })
    .addCase(getPacksByQuery.fulfilled, (state, action) => {
      state.loading = false;
      state.errors = [];
      state.foundPacks = action.payload;
    })
    .addCase(getPacksByQuery.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload as Error[];
      state.foundPacks = [];
    })
    .addCase(updateDiscoverPack.pending, (state) => {
      // state.loading = true;
    })
    .addCase(updateDiscoverPack.fulfilled, (state, action) => {
      // state.loading = false;
      state.errors = [];
      const packIndex = state.foundPacks.findIndex((pack) => pack.id === action.payload.id);
      if (packIndex !== -1) {
        state.foundPacks[packIndex] = action.payload;
      }
    })
    .addCase(updateDiscoverPack.rejected, (state, action) => {
      // state.loading = false;
      state.errors = action.payload as Error[];
    })
    .addCase(checkAuth.pending, (state) => {
      state.loading = true;
    })
    .addCase(checkAuth.fulfilled, (state, action) => {
      state.loading = false;
      state.errors = [];
      state.user = action.payload;
      state.auth = AuthStatus.Yes;
    })
    .addCase(checkAuth.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload as Error[];
      state.user = null;
      state.auth = AuthStatus.No;
    })
    .addCase(login.pending, (state) => {
      state.loading = true;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.errors = [];
      state.user = action.payload;
      state.auth = AuthStatus.Yes;
    })
    .addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload as Error[];
      state.user = null;
      state.auth = AuthStatus.No;
    })
    .addCase(register.pending, (state) => {
      state.loading = true;
    })
    .addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.errors = [];
      state.user = action.payload;
      state.auth = AuthStatus.Yes;
    })
    .addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload as Error[];
      state.user = null;
      state.auth = AuthStatus.No;
    });
  // .addCase(getUserMy.pending, (state) => {
  //   state.loading = true;
  // })
  // .addCase(getUserMy.fulfilled, (state, action) => {
  //   state.user = action.payload;
  //   state.loading = false;
  //   state.errors = [];
  // })
  // .addCase(getUserMy.rejected, (state, action) => {
  //   state.user = null;
  //   state.loading = false;
  //   state.errors = action.payload as ErrorPage[];
  // })
  // .addCase(getUserById.pending, (state) => {
  //   state.loading = true;
  // })
  // .addCase(getUserById.fulfilled, (state, action) => {
  //   state.user = action.payload;
  //   state.loading = false;
  //   state.errors = [];
  // })
  // .addCase(getUserById.rejected, (state, action) => {
  //   state.user = null;
  //   state.loading = false;
  //   state.errors = action.payload as ErrorPage[];
  // })
  // .addCase(getPacksByQuery.pending, (state) => {
  //   state.loading = true;
  // })
  // .addCase(getPacksByQuery.fulfilled, (state, action) => {
  //   state.pack = null;
  //   state.foundPacks = action.payload;
  //   state.loading = false;
  //   state.errors = [];
  // })
  // .addCase(getPacksByQuery.rejected, (state, action) => {
  //   state.pack = null;
  //   state.foundPacks = [];
  //   state.loading = false;
  //   state.errors = action.payload as ErrorPage[];
  // })
  // .addCase(createPack.pending, (state) => {
  //   state.loading = true;
  // })
  // .addCase(createPack.fulfilled, (state, action) => {
  //   state.pack = action.payload;
  //   state.packs = [];
  //   state.loading = false;
  //   state.errors = [];
  // })
  // .addCase(createPack.rejected, (state, action) => {
  //   state.pack = null;
  //   state.packs = [];
  //   state.loading = false;
  //   state.errors = action.payload as ErrorPage[];
  // })
  // .addCase(getPacksFollowed.pending, (state) => {
  //   state.loading = true;
  // })
  // .addCase(getPacksFollowed.fulfilled, (state, action) => {
  //   state.pack = null;
  //   state.packs = action.payload;
  //   state.loading = false;
  //   state.errors = [];
  // })
  // .addCase(getPacksFollowed.rejected, (state, action) => {
  //   state.pack = null;
  //   state.packs = [];
  //   state.loading = false;
  //   state.errors = action.payload as ErrorPage[];
  // })
  // .addCase(getPackById.pending, (state) => {
  //   state.loading = true;
  // })
  // .addCase(getPackById.fulfilled, (state, action) => {
  //   state.pack = action.payload;
  //   state.packs = [];
  //   state.loading = false;
  //   state.errors = [];
  // })
  // .addCase(getPackById.rejected, (state, action) => {
  //   state.pack = null;
  //   state.packs = [];
  //   state.loading = false;
  //   state.errors = action.payload as ErrorPage[];
  // })
  // .addCase(getPlacelistPlacesById.pending, (state) => {
  //   state.loading = true;
  // })
  // .addCase(getPlacelistPlacesById.fulfilled, (state, action) => {
  //   state.places = action.payload;
  //   state.loading = false;
  //   state.errors = [];
  // })
  // .addCase(getPlacelistPlacesById.rejected, (state, action) => {
  //   state.places = [];
  //   state.loading = false;
  //   state.errors = action.payload as ErrorPage[];
  // })
  // .addCase(updatePlacelistPlacesById.pending, (state) => {
  //   state.loading = true;
  // })
  // .addCase(updatePlacelistPlacesById.fulfilled, (state, action) => {
  //   state.places = action.payload;
  //   state.loading = false;
  //   state.errors = [];
  // })
  // .addCase(updatePlacelistPlacesById.rejected, (state, action) => {
  //   state.places = [];
  //   state.loading = false;
  //   state.errors = action.payload as ErrorPage[];
  // })
  // .addCase(updatePackById.pending, (state) => {
  //   state.loading = true;
  // })
  // .addCase(updatePackById.fulfilled, (state, action) => {
  //   state.pack = action.payload;
  //   state.packs = [];
  //   state.loading = false;
  //   state.errors = [];
  // })
  // .addCase(updatePackById.rejected, (state, action) => {
  //   state.pack = null;
  //   state.packs = [];
  //   state.loading = false;
  //   state.errors = action.payload as ErrorPage[];
  // })
  // .addCase(deletePlacelistById.pending, (state) => {
  //   state.loading = true;
  // })
  // .addCase(deletePlacelistById.fulfilled, (state) => {
  //   state.pack = null;
  //   state.packs = [];
  //   state.loading = false;
  //   state.errors = [];
  // })
  // .addCase(deletePlacelistById.rejected, (state, action) => {
  //   state.packs = [];
  //   state.loading = false;
  //   state.errors = action.payload as ErrorPage[];
  // })
  // .addCase(getPlacesByQuery.pending, (state) => {
  //   state.loading = true;
  // })
  // .addCase(getPlacesByQuery.fulfilled, (state, action) => {
  //   state.place = null;
  //   state.foundPlaces = action.payload;
  //   state.loading = false;
  //   state.errors = [];
  // })
  // .addCase(getPlacesByQuery.rejected, (state, action) => {
  //   state.place = null;
  //   state.foundPlaces = [];
  //   state.loading = false;
  //   state.errors = action.payload as ErrorPage[];
  // })
  // .addCase(createPlace.pending, (state) => {
  //   state.loading = true;
  // })
  // .addCase(createPlace.fulfilled, (state, action) => {
  //   state.place = action.payload;
  //   state.places = [];
  //   state.loading = false;
  //   state.errors = [];
  // })
  // .addCase(createPlace.rejected, (state, action) => {
  //   state.place = null;
  //   state.places = [];
  //   state.loading = false;
  //   state.errors = action.payload as ErrorPage[];
  // })
  // .addCase(getPlaceById.pending, (state) => {
  //   state.loading = true;
  // })
  // .addCase(getPlaceById.fulfilled, (state, action) => {
  //   state.place = action.payload;
  //   state.places = [];
  //   state.loading = false;
  //   state.errors = [];
  // })
  // .addCase(getPlaceById.rejected, (state, action) => {
  //   state.place = null;
  //   state.places = [];
  //   state.loading = false;
  //   state.errors = action.payload as ErrorPage[];
  // })
  // .addCase(updatePlaceById.pending, (state) => {
  //   state.loading = true;
  // })
  // .addCase(updatePlaceById.fulfilled, (state, action) => {
  //   state.place = action.payload;
  //   state.places = [];
  //   state.loading = false;
  //   state.errors = [];
  // })
  // .addCase(updatePlaceById.rejected, (state, action) => {
  //   state.place = null;
  //   state.places = [];
  //   state.loading = false;
  //   state.errors = action.payload as ErrorPage[];
  // });
});
