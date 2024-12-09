import { AuthStatus } from "../settings";
import { UserIdentity } from "./user";

export interface InitialState {
  user: UserIdentity | null;
  authStatus: AuthStatus;
}
