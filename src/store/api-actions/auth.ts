import { createAsyncThunk } from "@reduxjs/toolkit";
import { BACKEND_URL } from "@/cfg/cfg.ts";
import { Namespace } from "@/enums/enums.ts";
import { decodeToken, setToken } from "@/services/token.ts";
import type { SingleResponseWrapper } from "@/types/api.ts";
import type { AccessToken, Login, Refresh, Register } from "@/types/auth.ts";
import type { ThunkApiConfig } from "@/types/redux.ts";
import type { User } from "@/types/user.ts";
import type { AxiosError } from "axios";

export const checkAuth = createAsyncThunk<User, undefined, ThunkApiConfig>(
  `${Namespace.Auth}/checkAuth`,
  async (_, { rejectWithValue, extra: api }) => {
    const url = `${BACKEND_URL}/api/v1/users/me`;
    const response = await api
      .get<SingleResponseWrapper<User>>(url)
      .then((response) => response.data)
      .catch((error: AxiosError<SingleResponseWrapper<User>>) => error.response?.data);

    if (!response || !response.data || !response.meta.success) {
      return rejectWithValue(response?.errors ?? []);
    }

    return response.data;
  }
);

export const register = createAsyncThunk<User, Register, ThunkApiConfig>(
  `${Namespace.Auth}/register`,
  async (register, { rejectWithValue, extra: api }) => {
    const url = `${BACKEND_URL}/api/v1/auth/register`;
    const response = await api
      .post<SingleResponseWrapper<AccessToken>>(url, register)
      .then((response) => response.data)
      .catch((error: AxiosError<SingleResponseWrapper<AccessToken>>) => error.response?.data);

    if (!response || !response.data || !response.meta.success) {
      return rejectWithValue(response?.errors ?? []);
    }

    setToken(response.data);

    const token = decodeToken();
    if (!token) {
      return rejectWithValue([]);
    }

    const user: User = {
      id: token.preferred_username,
      username: token.preferred_username,
    };

    return user;
  }
);

export const login = createAsyncThunk<User, Login, ThunkApiConfig>(
  `${Namespace.Auth}/login`,
  async (login, { rejectWithValue, extra: api }) => {
    const url = `${BACKEND_URL}/api/v1/auth/login`;
    const response = await api
      .post<SingleResponseWrapper<AccessToken>>(url, login)
      .then((response) => response.data)
      .catch((error: AxiosError<SingleResponseWrapper<AccessToken>>) => error.response?.data);

    if (!response || !response.data || !response.meta.success) {
      return rejectWithValue(response?.errors ?? []);
    }

    setToken(response.data);

    const token = decodeToken();
    if (!token) {
      return rejectWithValue([]);
    }

    const user: User = {
      id: token.preferred_username,
      username: token.preferred_username,
    };

    return user;
  }
);

export const refresh = createAsyncThunk<AccessToken, Refresh, ThunkApiConfig>(
  `${Namespace.Auth}/refresh`,
  async (refresh, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/auth/refresh`;
    const { data } = await api.post<SingleResponseWrapper<AccessToken>>(requestUrl, refresh);

    if (!data.data || !data.meta.success) {
      return rejectWithValue(data.errors);
    }

    return data.data;
  }
);
