import { AxiosInstance } from "axios";
import { Error } from "./common";
import { Place } from "./place";
import { Placelist } from "./placelist";
import { User } from "./user";

export type ThunkApiConfig = {
  extra: AxiosInstance;
};

export interface InitialState {
  user: User | null;
  placelist: Placelist | null;
  placelists: Placelist[];
  foundPlacelists: Placelist[];
  place: Place | null;
  places: Place[];
  foundPlaces: Place[];
  loading: boolean;
  errors: Error[];
}
