import { BACKEND_URL, Namespace } from "@/settings";
import { MultipleResponseWrapper, SingleResponseWrapper, WrappedRequest } from "@/types/api";
import { Place, PlaceContent, PlaceCreate, PlaceUpdate } from "@/types/place";
import { ThunkApiConfig } from "@/types/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPlacesByQuery = createAsyncThunk<Place[], PlaceContent, ThunkApiConfig>(
  `${Namespace.Places}/get/byQuery`,
  async (query, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/places`;
    const params = { query };
    const { data } = await api.get<MultipleResponseWrapper<Place>>(requestUrl, { params });

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);

export const createPlace = createAsyncThunk<Place, PlaceCreate, ThunkApiConfig>(
  `${Namespace.Places}/create`,
  async (placeCreate, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/places`;
    const { data } = await api.post<SingleResponseWrapper<Place>>(requestUrl, placeCreate);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);

export const getPlaceById = createAsyncThunk<Place, Place["id"], ThunkApiConfig>(
  `${Namespace.Places}/get/byId`,
  async (placeId, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/places/${placeId}`;
    const { data } = await api.get<SingleResponseWrapper<Place>>(requestUrl);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);

export const updatePlaceById = createAsyncThunk<Place, WrappedRequest<PlaceUpdate>, ThunkApiConfig>(
  `${Namespace.Places}/update`,
  async (placeUpdate, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/places/${placeUpdate.id}`;
    const { data } = await api.put<SingleResponseWrapper<Place>>(requestUrl, placeUpdate.data);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);
