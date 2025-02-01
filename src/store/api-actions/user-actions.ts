import { BACKEND_URL, Namespace } from "@/settings";
import { ThunkApiConfig } from "@/types/redux";
import { SingleResponseWrapper } from "@/types/response";
import { User, UserUpdate } from "@/types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserByUsername = createAsyncThunk<User, string, ThunkApiConfig>(
  `${Namespace.Users}/get/byUsername`,
  async (username, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/users/${username}`;
    const { data } = await api.get<SingleResponseWrapper<User>>(requestUrl);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);

export const updateUserByUsername = createAsyncThunk<User, UserUpdate, ThunkApiConfig>(
  `${Namespace.Users}/update/byUsername`,
  async (userUpdate, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/users/${userUpdate.username}`;
    const { data } = await api.put<SingleResponseWrapper<User>>(requestUrl, userUpdate);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);
