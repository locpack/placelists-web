import { AuthStatus, RequestStatus } from "../settings";
import { PlacelistCompressed } from "./placelist";
import { UserIdentity } from "./user";

export interface InitialState {
  user: UserIdentity | null;
  authStatus: AuthStatus;
  fetchingPlacelistsStatus: RequestStatus;
  placelists: PlacelistCompressed[];
}
