import axios from "axios";
import { BACKEND_URL, REQUEST_TIMEOUT } from "../settings";
import { getToken } from "./token-service";

export const createApi = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers["x-token"] = token;
    }
    return config;
  });

  return api;
};
