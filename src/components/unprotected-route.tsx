import { Navigate } from "react-router";
import { AuthStatus, CURRENT_AUTH_STATUS, Path } from "../settings";

type UnprotectedRouteProps = {
  children: React.ReactElement;
};

function UnprotectedRoute({ children }: UnprotectedRouteProps) {
  const currentAuthStatus = CURRENT_AUTH_STATUS;
  return currentAuthStatus !== AuthStatus.Authorized ? children : <Navigate to={Path.Home} />;
}

export default UnprotectedRoute;
