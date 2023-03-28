import HomePage from "pages/HomePage";
import { useSelector } from "react-redux";

import { authSelectors } from "../../redux/auth";
import AdminHeader from "./AdminHeader";

import s from "./Header.module.scss";

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <>{isLoggedIn ? <AdminHeader /> : <HomePage />}</>;
};

export default Header;
