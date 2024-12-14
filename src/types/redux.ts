import { AuthStatus, RequestStatus } from "../settings";
import { Place } from "./place";
import { Placelist } from "./placelist";
import { UserIdentity } from "./user";

export interface InitialState {
  user: UserIdentity | null;
  authStatus: AuthStatus;
  fetchingPlacelistsStatus: RequestStatus;
  fetchingPlacelistStatus: RequestStatus;
  placelists: Placelist[];
  placelist: Placelist | null;
  places: Place[];
}
