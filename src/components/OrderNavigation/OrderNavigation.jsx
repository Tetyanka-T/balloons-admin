import { NavLink } from "react-router-dom";
import s from "./OrderNavigation.module.scss";

const OrderNavigation = () => {
  return (
    <>
      <ul className={s.order_list}>
        <li className={s.order_list__item}>
          <NavLink
            to="/orders/new"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Нові
          </NavLink>
        </li>
        <li className={s.order_list__item}>
          <NavLink
            to="/orders/inwork"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            В роботі
          </NavLink>
        </li>
        <li className={s.order_list__item}>
          <NavLink
            to="/orders/finish"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Завершені
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default OrderNavigation;
