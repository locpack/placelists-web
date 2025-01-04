import { Place } from "@/types/place";
import { MultipleResponseWrapper, SingleResponseWrapper } from "@/types/response";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { deleteToken, setToken } from "../services/token-service";
import { Namespace } from "../settings";
import { Placelist, PlacelistWithPlaces } from "../types/placelist";
import { UserIdentity, UserLogin } from "../types/user";

type ThunkApiConfig = {
  extra: AxiosInstance;
};

export const login = createAsyncThunk<UserIdentity, UserLogin, ThunkApiConfig>(
  `${Namespace.User}/login`,
  async (userLogin: UserLogin, { extra: api }) => {
    const { data } = await api.post<UserIdentity>("ApiRoute.Login", userLogin);
    setToken(data.token);
    return data;
  }
);

export const logout = createAsyncThunk<void, undefined, ThunkApiConfig>(
  `${Namespace.User}/logout`,
  async (_arg, { extra: api }) => {
    await api.delete("ApiRoute.Login");
    deleteToken();
  }
);

export const fetchPlacelists = createAsyncThunk<MultipleResponseWrapper<Placelist>, string, ThunkApiConfig>(
  `${Namespace.Placelists}/fetch`,
  async (query: string, { extra: api }) => {
    const { data } = await api.get<MultipleResponseWrapper<Placelist>>("/api/v1/placelists", {
      params: {
        query,
      },
    });
    return data;
  }
);

export const fetchPlacelist = createAsyncThunk<
  SingleResponseWrapper<PlacelistWithPlaces>,
  PlacelistWithPlaces["id"],
  ThunkApiConfig
>(`${Namespace.Placelist}/fetch`, async (placelistId, { extra: api }) => {
  const { data } = await api.get<SingleResponseWrapper<PlacelistWithPlaces>>(
    `/api/v1/placelists/${placelistId}`
  );
  return data;
});

export const visitPlace = createAsyncThunk<SingleResponseWrapper<Place>, Place["id"], ThunkApiConfig>(
  `${Namespace.Place}/visit`,
  async (placeId, { extra: api }) => {
    const { data } = await api.put<SingleResponseWrapper<Place>>(`/api/v1/places/${placeId}/visit`);
    return data;
  }
);
