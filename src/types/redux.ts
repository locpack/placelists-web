import type { AxiosInstance } from "axios";
import { AuthStatus } from "@/enums/enums";
import type { Error } from "@/types/api";
import type { User } from "@/types/user";

export type ThunkApiConfig = {
  rejectValue: Error[];
  extra: AxiosInstance;
};

export interface InitialState {
  user: User | null;
  auth: AuthStatus;
  // placelist: Placelist | null;
  // placelists: Placelist[];
  // foundPlacelists: Placelist[];
  // place: Place | null;
  // places: Place[];
  // foundPlaces: Place[];
  loading: boolean;
  errors: Error[];
}
