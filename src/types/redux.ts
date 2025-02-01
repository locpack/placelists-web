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
  place: Place | null;
  places: Place[];
  loading: boolean;
  errors: Error[];
}
