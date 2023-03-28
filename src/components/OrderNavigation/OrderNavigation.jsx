import { NavLink } from "react-router-dom";
import s from "./OrderNavigation.module.scss";

const OrderNavigation = () => {
  return (
    <>
      <ul className={s.order_list}>
        <li className={s.order_list__item}>
          <NavLink to="/orders">Нові</NavLink>
        </li>
        <li className={s.order_list__item}>
          <NavLink to="/orders/in-work">В роботі</NavLink>
        </li>
        <li className={s.order_list__item}>
          <NavLink to="/orders/finish">Завершені</NavLink>
        </li>
      </ul>
    </>
  );
};

export default OrderNavigation;
