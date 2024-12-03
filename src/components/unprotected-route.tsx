import { Navigate } from "react-router";
import { AUTH_STATUS, AuthStatus, Path } from "../settings";

type UnprotectedRouteProps = {
  children: React.ReactElement;
};

function UnprotectedRoute({ children }: UnprotectedRouteProps) {
  const authStatus = AUTH_STATUS;
  return authStatus !== AuthStatus.Authorized ? children : <Navigate to={Path.Home} />;
}

export default UnprotectedRoute;
