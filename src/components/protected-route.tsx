import { Navigate } from "react-router";
import { AUTH_STATUS, AuthStatus, Path } from "../settings";

type ProtectedRouteProps = {
  children: React.ReactElement;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const authStatus = AUTH_STATUS;
  return authStatus === AuthStatus.Authorized ? children : <Navigate to={Path.Login} />;
}

export default ProtectedRoute;
