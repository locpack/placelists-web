import { InitialAppState } from "@/types/redux";
import { Action, configureStore } from "@reduxjs/toolkit";
import { createApi } from "../services/api-service";
import { placeReducer } from "./reducers/place-reducer";
import { placelistReducer } from "./reducers/placelist-reducer";
import { userReducer } from "./reducers/user-reducer";

export const api = createApi();

const reducer = (state: InitialAppState | undefined, action: Action) => ({
  ...userReducer(state, action),
  ...placeReducer(state, action),
  ...placelistReducer(state, action),
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
