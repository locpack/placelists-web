import { BACKEND_URL, Namespace } from "@/settings";
import { MultipleResponseWrapper, SingleResponseWrapper, WrappedRequest } from "@/types/api";
import { Id } from "@/types/common";
import { Place } from "@/types/place";
import { Placelist, PlacelistContent, PlacelistCreate, PlacelistUpdate } from "@/types/placelist";
import { ThunkApiConfig } from "@/types/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPlacelistsByQuery = createAsyncThunk<Placelist[], PlacelistContent, ThunkApiConfig>(
  `${Namespace.Placelists}/get/byQuery`,
  async (query, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/placelists`;
    const params = { query };
    const { data } = await api.get<MultipleResponseWrapper<Placelist>>(requestUrl, { params });

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);

export const getPlacelistsMy = createAsyncThunk<Placelist[], undefined, ThunkApiConfig>(
  `${Namespace.Placelists}/get/my`,
  async (_, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/placelists/my`;
    const { data } = await api.get<MultipleResponseWrapper<Placelist>>(requestUrl);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);

export const createPlacelist = createAsyncThunk<Placelist, PlacelistCreate, ThunkApiConfig>(
  `${Namespace.Placelists}/create`,
  async (placelistCreate, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/placelists`;
    const { data } = await api.post<SingleResponseWrapper<Placelist>>(requestUrl, placelistCreate);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);

export const getPlacelistById = createAsyncThunk<Placelist, Id, ThunkApiConfig>(
  `${Namespace.Placelists}/get/byId`,
  async (placelistId, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/placelists/${placelistId}`;
    const { data } = await api.get<SingleResponseWrapper<Placelist>>(requestUrl);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);

export const getPlacelistPlacesById = createAsyncThunk<Place[], Id, ThunkApiConfig>(
  `${Namespace.Placelists}/get/places`,
  async (placelistId, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/placelists/${placelistId}/places`;
    const { data } = await api.get<MultipleResponseWrapper<Place>>(requestUrl);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);

export const updatePlacelistPlacesById = createAsyncThunk<Place[], WrappedRequest<Place[]>, ThunkApiConfig>(
  `${Namespace.Placelists}/update/places`,
  async (placelistPlacesUpdate, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/placelists/${placelistPlacesUpdate.id}/places`;
    const { data } = await api.put<MultipleResponseWrapper<Place>>(requestUrl, placelistPlacesUpdate.data);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);

export const updatePlacelistById = createAsyncThunk<
  Placelist,
  WrappedRequest<PlacelistUpdate>,
  ThunkApiConfig
>(`${Namespace.Placelists}/update`, async (placelistUpdate, { rejectWithValue, extra: api }) => {
  const requestUrl = `${BACKEND_URL}/api/v1/placelists/${placelistUpdate.id}`;
  const { data } = await api.put<SingleResponseWrapper<Placelist>>(requestUrl, placelistUpdate.data);

  if (!data.data || !data.meta.success) {
    return rejectWithValue(data.errors);
  }

  return data.data;
});

export const deletePlacelistById = createAsyncThunk<void, Id, ThunkApiConfig>(
  `${Namespace.Placelists}/delete`,
  async (placelistId, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/placelists/${placelistId}`;
    const { data } = await api.delete<SingleResponseWrapper<Placelist>>(requestUrl);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }
  }
);
