import { Navigate } from "react-router";
import { AuthStatus, CURRENT_AUTH_STATUS, Path } from "../settings";

type ProtectedRouteProps = {
  child: React.ReactElement;
};

function ProtectedRoute({ child }: ProtectedRouteProps) {
  const currentAuthStatus = CURRENT_AUTH_STATUS;
  return currentAuthStatus === AuthStatus.Authorized ? child : <Navigate to={Path.Login} />;
}

export default ProtectedRoute;
