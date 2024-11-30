import { Navigate } from "react-router";
import { AuthStatus, CURRENT_AUTH_STATUS, Path } from "../settings";

type ProtectedRouteProps = {
  children: React.ReactElement;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const currentAuthStatus = CURRENT_AUTH_STATUS;
  return currentAuthStatus === AuthStatus.Authorized ? children : <Navigate to={Path.Login} />;
}

export default ProtectedRoute;
