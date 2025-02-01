import { InitialUserState } from "@/types/redux";
import { createReducer } from "@reduxjs/toolkit";
import { getUserByUsername, updateUserByUsername } from "../api-actions/user-actions";
import { Error } from "./../../types/common";

const initialState: InitialUserState = {
  user: null,
  loading: false,
  errors: [],
};

export const userReducer = createReducer(initialState, (builder) => {
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
    });
});
