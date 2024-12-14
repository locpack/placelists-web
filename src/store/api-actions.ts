import { Place } from "@/types/place";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { deleteToken, setToken } from "../services/token-service";
import { ApiRoute, DISCOVER_PAGE_PLACELISTS, Namespace, PLACELIST, PLACELIST_PAGE_PLACES } from "../settings";
import { Placelist, PlacelistWithPlaces } from "../types/placelist";
import { UserIdentity, UserLogin } from "../types/user";

type ThunkApiConfig = {
  extra: AxiosInstance;
};

export const checkAuth = createAsyncThunk<UserIdentity, undefined, ThunkApiConfig>(
  `${Namespace.User}/checkAuth`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserIdentity>(ApiRoute.Login);
    return data;
  }
);

export const login = createAsyncThunk<UserIdentity, UserLogin, ThunkApiConfig>(
  `${Namespace.User}/login`,
  async (userLogin: UserLogin, { extra: api }) => {
    const { data } = await api.post<UserIdentity>(ApiRoute.Login, userLogin);
    setToken(data.token);
    return data;
  }
);

export const logout = createAsyncThunk<void, undefined, ThunkApiConfig>(
  `${Namespace.User}/logout`,
  async (_arg, { extra: api }) => {
    await api.delete(ApiRoute.Logout);
    deleteToken();
  }
);

export const fetchPlacelists = createAsyncThunk<Placelist[], string, ThunkApiConfig>(
  `${Namespace.Placelists}/fetch`,
  async (query: string, { extra: api }) => {
    // const { data } = await api.get<PlacelistCompressed[]>(ApiRoute.Placelists, {
    //   params: {
    //     query,
    //   },
    // });
    const data = DISCOVER_PAGE_PLACELISTS.filter(
      (placelist) =>
        placelist.author.name.toLowerCase().includes(query.toLowerCase()) ||
        placelist.name.toLowerCase().includes(query.toLowerCase())
    );
    return data;
  }
);

export const fetchPlacelist = createAsyncThunk<PlacelistWithPlaces, Placelist["id"], ThunkApiConfig>(
  `${Namespace.Placelist}/fetch`,
  async (placelistId, { extra: api }) => {
    //const { data } = await api.get<Placelist>(`${ApiRoute.Placelists}/${placelistId}`);
    const data = { placelist: PLACELIST, places: PLACELIST_PAGE_PLACES };
    return data;
  }
);

export const updatePlace = createAsyncThunk<Place, Place, ThunkApiConfig>(
  `${Namespace.Place}/update`,
  async (place, { extra: api }) => {
    //const { data } = await api.get<Placelist>(`${ApiRoute.Placelists}/${placelistId}`);
    const data = place;
    return data;
  }
);
