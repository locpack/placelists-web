import { AuthStatus } from "@/settings";
import { AxiosInstance } from "axios";

export type ThunkApiConfig = {
  extra: AxiosInstance;
};

export interface OauthInitialState {
  token: string | null;
  authStatus: AuthStatus;
  loading: boolean;
}
