import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { deleteToken, setToken } from "../services/token-service";
import { ApiRoute, Namespace } from "../settings";
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
