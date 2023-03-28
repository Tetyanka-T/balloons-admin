import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";

const PrivateRoute = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRoute;
