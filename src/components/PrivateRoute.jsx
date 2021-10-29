import { Route, Navigate } from "react-router-dom";
import { useLogin } from "../contexts/loginProvider";

export default function PrivateRoute({ path, ...props }) {
  const { isUserLoggedIn } = useLogin();
  return isUserLoggedIn ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
