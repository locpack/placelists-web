import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";
import { BACKEND_URL, REQUEST_TIMEOUT } from "../settings";
import { getToken } from "./token-service";

export const createApi = () => {
  const api = applyCaseMiddleware(
    axios.create({
      baseURL: BACKEND_URL,
      timeout: REQUEST_TIMEOUT,
    })
  );

  api.interceptors.request.use((config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return api;
};
