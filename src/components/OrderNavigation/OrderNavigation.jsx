import { Link } from "react-router-dom";
import s from "./OrderNavigation.module.scss";

const OrderNavigation = () => {
  return (
    <>
      <ul className={s.order_list}>
        <li className={s.order_list__item}>
          <Link to="/orders/new">Нові</Link>
        </li>
        <li className={s.order_list__item}>
          <Link to="/orders/in-work">В роботі</Link>
        </li>
        <li className={s.order_list__item}>
          <Link to="/orders/finish">Завершені</Link>
        </li>
      </ul>
    </>
  );
};

export default OrderNavigation;
