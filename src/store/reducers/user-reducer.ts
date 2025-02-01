import { InitialUserState } from "@/types/redux";
import { createReducer } from "@reduxjs/toolkit";
import { getUserByUsername, updateUserByUsername } from "../api-actions/user-actions";

const initialState: InitialUserState = {
  user: null,
  loading: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUserByUsername.pending, (state) => {
      state.loading = true;
    })
    .addCase(getUserByUsername.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    })
    .addCase(getUserByUsername.rejected, (state) => {
      state.user = null;
      state.loading = false;
    })
    .addCase(updateUserByUsername.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateUserByUsername.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    })
    .addCase(updateUserByUsername.rejected, (state) => {
      state.user = null;
      state.loading = false;
    });
});
