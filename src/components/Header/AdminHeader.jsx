import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import { ReactComponent as User } from "../../images/user.svg";
import logo from "../../images/logo.png";
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
              to="/orders"
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
          <p>
            Привіт адмін, <br /> гарного робочого дня
          </p>
          <button
            onClick={() => dispatch(authOperations.logout())}
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
