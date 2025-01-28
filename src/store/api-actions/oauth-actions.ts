import { deleteToken, setToken } from "@/services/token-service";
import { BACKEND_URL, Namespace, OauthProvider } from "@/settings";
import { OauthCredentials, OauthRequest } from "@/types/oauth";
import { ThunkApiConfig } from "@/types/redux";
import { SingleResponseWrapper } from "@/types/response";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk<void, OauthProvider, ThunkApiConfig>(
  `${Namespace.Oauth}/login`,
  async (provider, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/oauth/${provider}`;
    const { data } = await api.get<SingleResponseWrapper<OauthRequest>>(requestUrl);

    if (!data.data) {
      return rejectWithValue(data.errors);
    }

    window.location.href = data.data.redirectUrl;
  }
);

export const callback = createAsyncThunk<string, OauthCredentials, ThunkApiConfig>(
  `${Namespace.Oauth}/callback`,
  async (credentials: OauthCredentials, { rejectWithValue, extra: api }) => {
    const requestUrl = `${BACKEND_URL}/api/v1/oauth/${credentials.provider}/callback?code=${credentials.code}`;
    const { data } = await api.get<SingleResponseWrapper<string>>(requestUrl);

    if (!data.data) {
      return rejectWithValue(data.errors);
    }

    setToken(data.data);

    return data.data;
  }
);

export const logout = createAsyncThunk<void, undefined, ThunkApiConfig>(
  `${Namespace.Oauth}/logout`,
  async (_, {}) => {
    deleteToken();
  }
);
