import { AxiosInstance } from "axios";
import { Place } from "./place";
import { User } from "./user";

export type ThunkApiConfig = {
  extra: AxiosInstance;
};

interface BaseState {
  loading: boolean;
}

export interface InitialUserState extends BaseState {
  user: User | null;
}

export interface InitialPlaceState extends BaseState {
  place: Place | null;
  places: Place[];
}
