import { AxiosInstance } from "axios";
import { User } from "./user";

export type ThunkApiConfig = {
  extra: AxiosInstance;
};

export interface InitialUserState {
  user: User | null;
  loading: boolean;
}
