import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";
import { BACKEND_URL, REQUEST_TIMEOUT } from "@/cfg/cfg.ts";
import { getToken } from "@/services/token.ts";
import { reducer } from "@/store/reducer.ts";

const api = applyCaseMiddleware(
  axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  })
);

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
