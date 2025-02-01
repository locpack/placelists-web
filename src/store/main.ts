import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createApi } from "../services/api-service";
import { userReducer } from "./reducers/user-reducer";

export const api = createApi();

const reducer = combineReducers({
  user: userReducer,
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
