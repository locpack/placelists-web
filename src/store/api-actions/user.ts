import { createAsyncThunk } from "@reduxjs/toolkit";
import { BACKEND_URL } from "@/cfg/cfg";
import { Namespace } from "@/enums/enums";
import type {SingleResponseWrapper} from "@/types/api";
import type {ThunkApiConfig} from "@/types/redux";
import type {User} from "@/types/user";

export const getUserMy = createAsyncThunk<User, undefined, ThunkApiConfig>(
  `${Namespace.Users}/get/my`,
  async (_, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/users/my`;
    const { data } = await api.get<SingleResponseWrapper<User>>(requestUrl);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);

export const getUserById = createAsyncThunk<User, string, ThunkApiConfig>(
  `${Namespace.Users}/get/byId`,
  async (username, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/users/${username}`;
    const { data } = await api.get<SingleResponseWrapper<User>>(requestUrl);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);
