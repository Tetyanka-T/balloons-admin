import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import LoginPage from "./LoginPage";

const HomePage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <>{isLoggedIn ? <Navigate to="/orders/new" /> : <LoginPage />}</>;
};

export default HomePage;
