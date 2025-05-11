import { Namespace } from "@/enums/enums.ts";
import type { Pack, PackCreate, PackUpdate } from "@/types/pack.ts";
import type { ThunkApiConfig } from "@/types/redux.ts";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";
import { BACKEND_URL } from "@/cfg/cfg.ts";
import type { MultipleResponseWrapper, SingleResponseWrapper, WrappedRequest } from "@/types/api.ts";

export const getPacksByQuery = createAsyncThunk<Pack[], string, ThunkApiConfig>(
  `${Namespace.Packs}/get/byQuery`,
  async (query, { rejectWithValue, extra: api }) => {
    const url = `${BACKEND_URL}/api/v1/packs`;
    const params = { query };
    const response = await api
      .get<MultipleResponseWrapper<Pack>>(url, { params })
      .then((response) => response.data)
      .catch((error: AxiosError<MultipleResponseWrapper<Pack>>) => error.response?.data);

    if (!response || !response.data || !response.meta.success) {
      return rejectWithValue(response?.errors ?? []);
    }

    return response.data;
  }
);

export const createPack = createAsyncThunk<Pack, PackCreate, ThunkApiConfig>(
  `${Namespace.Packs}/create`,
  async (packCreate, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/packs`;
    const { data } = await api.post<SingleResponseWrapper<Pack>>(requestUrl, packCreate);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);

export const getPacksFollowed = createAsyncThunk<Pack[], undefined, ThunkApiConfig>(
  `${Namespace.Packs}/get/followed`,
  async (_, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/packs/followed`;
    const { data } = await api.get<MultipleResponseWrapper<Pack>>(requestUrl);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);

export const getPacksCreated = createAsyncThunk<Pack[], undefined, ThunkApiConfig>(
  `${Namespace.Packs}/get/created`,
  async (_, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/packs/created`;
    const { data } = await api.get<MultipleResponseWrapper<Pack>>(requestUrl);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);

export const getPackById = createAsyncThunk<Pack, string, ThunkApiConfig>(
  `${Namespace.Packs}/get/byId`,
  async (packId, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/packs/${packId}`;
    const { data } = await api.get<SingleResponseWrapper<Pack>>(requestUrl);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);

export const updateDiscoverPack = createAsyncThunk<Pack, WrappedRequest<PackUpdate>, ThunkApiConfig>(
  `${Namespace.Packs}/updateDiscoverPack`,
  async (packUpdate, { rejectWithValue, extra: api }) => {
    const url = `${BACKEND_URL}/api/v1/packs/${packUpdate.id}`;
    const response = await api
      .put<SingleResponseWrapper<Pack>>(url, packUpdate.data)
      .then((response) => response.data)
      .catch((error: AxiosError<SingleResponseWrapper<Pack>>) => error.response?.data);

    if (!response || !response.data || !response.meta.success) {
      return rejectWithValue(response?.errors ?? []);
    }

    return response.data;
  }
);
