import { BACKEND_URL, Namespace } from "@/settings";
import { SingleResponseWrapper, WrappedRequest } from "@/types/api";
import { ThunkApiConfig } from "@/types/redux";
import { User, UserUpdate } from "@/types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";

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

export const getUserByUsername = createAsyncThunk<User, User["username"], ThunkApiConfig>(
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

export const updateUserByUsername = createAsyncThunk<User, WrappedRequest<UserUpdate>, ThunkApiConfig>(
  `${Namespace.Users}/update`,
  async (userUpdate, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/users/${userUpdate.id}`;
    const { data } = await api.put<SingleResponseWrapper<User>>(requestUrl, userUpdate.data);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);
