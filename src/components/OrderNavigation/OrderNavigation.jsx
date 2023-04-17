import { NavLink } from "react-router-dom";
import s from "./OrderNavigation.module.scss";

const OrderNavigation = () => {
  // const isLoading = useSelector(orderSelectors.getIsLoading);

  // const inWorkOrder = orders.filter(
  //   (order) => order.statusOrder === "в роботі"
  // );
  // const finishOrder = orders.filter(
  //   (order) => order.statusOrder === "завершений"
  // );
  // console.log(inWorkOrder);
  // console.log(finishOrder);
  return (
    <>
      <ul className={s.order_list}>
        <li className={s.order_list__item}>
          <NavLink to="/orders/new">Нові</NavLink>
        </li>
        <li className={s.order_list__item}>
          <NavLink to="/orders/inwork">В роботі</NavLink>
        </li>
        <li className={s.order_list__item}>
          <NavLink to="/orders/finish">Завершені</NavLink>
        </li>
      </ul>
      {/* 
      {ordersInWork && <OrdersList orders={inWorkOrder} />}
      {ordersFinish && <OrdersList orders={finishOrder} />} */}
    </>
  );
};

export default OrderNavigation;
