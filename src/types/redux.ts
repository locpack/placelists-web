import { AxiosInstance } from "axios";
import { Error } from "./common";
import { Place } from "./place";
import { Placelist } from "./placelist";
import { User } from "./user";

export type ThunkApiConfig = {
  extra: AxiosInstance;
};

interface BaseState {
  loading: boolean;
  errors: Error[];
}

export interface InitialUserState extends BaseState {
  user: User | null;
}

export interface InitialPlacelistState extends BaseState {
  placelist: Placelist | null;
  placelists: Placelist[];
  places: Place[];
}

export interface InitialPlaceState extends BaseState {
  place: Place | null;
  places: Place[];
}

export interface InitialAppState extends InitialUserState, InitialPlacelistState, InitialPlaceState {}
