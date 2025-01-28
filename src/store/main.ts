import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createApi } from "../services/api-service";
import { oauthReducer } from "./reducers/oauth-reducer";

export const api = createApi();

const reducer = combineReducers({
  oauth: oauthReducer,
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
