import { NavLink } from "react-router-dom";
import { ReactComponent as User } from "../../images/user.svg";
import { useDispatch } from "react-redux";
import logo from "../../images/logo.png";
import { authOperations } from "../../redux/auth";

import s from "./Header.module.scss";

const AdminHeader = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={s.header}>
        <ul className={s.header_list}>
          <li className={s.header_list__item}>
            <NavLink
              to="/compositions"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Композиції
            </NavLink>
          </li>
          <li className={s.header_list__item}>
            <NavLink
              to="/orders/new"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Замовлення
            </NavLink>
          </li>
        </ul>
        <div className={s.header_logo}>
          <img src={logo} alt="" width={120} height={90} />
        </div>
        <div className={s.header_log}>
          <User />
          <p>Привіт адмін, гарного робочого дня</p>
          <button
            onClick={() => dispatch(authOperations.logOut())}
            className={s.header_log__out}
          >
            / Вийти
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
