import { AuthStatus, RequestStatus } from "../settings";
import { Placelist, PlacelistCompressed } from "./placelist";
import { UserIdentity } from "./user";

export interface InitialState {
  user: UserIdentity | null;
  authStatus: AuthStatus;
  fetchingPlacelistsStatus: RequestStatus;
  fetchingPlacelistStatus: RequestStatus;
  placelists: PlacelistCompressed[];
  placelist: Placelist | null;
}
