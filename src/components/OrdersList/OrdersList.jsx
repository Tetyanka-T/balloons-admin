import { useDispatch, useSelector } from "react-redux";
import Basket from "./Basket";
import s from "./OrdersList.module.scss";
import moment from "moment";
import ChangeStatus from "./ChangeStatus";
// import { orderOperations, orderSelectors } from "redux/orders";
import * as API from "../../apiServise/api";

const OrdersList = ({ orders }) => {
  const timeFormat = () => {
    const time = moment().format("L");
    return time;
  };
  // const orders = useSelector(orderSelectors.getOrders);
  // const dispatch = useDispatch();
  const onDeleteOrder = (id) => API.deleteOrder(id);

  return (
    <>
      <ul className={s.orders_list}>
        {orders.map((order) => (
          <li className={s.orders_list__item} key={order._id}>
            <button onClick={() => onDeleteOrder(order.id)}>Delete</button>
            <div className={s.orders_list__item_title}>
              <p>Дата замолення: {timeFormat(order.updatedAt)}</p>
              <p>Статус замовлення: {order.statusOrder}</p>
            </div>
            <ul className={s.orders_list__item_userList}>
              <span>Замовник</span>
              <li className={s.orders_list__item_userList__item}>
                Ім'я: {order.userName}
              </li>
              <li className={s.orders_list__item_userList__item}>
                Телефон: {order.userPhone}
              </li>
              <li className={s.orders_list__item_userList__item}>
                Пошта: {order.userEmail}
              </li>
            </ul>
            <ul className={s.orders_list__item_userList}>
              <span>Доставка</span>
              <li>Дата свята: {order.deliveryDate}</li>
              <li>Спосіб: {order.deliveryMethod}</li>
              <li>Час: {order.deliveryTime}</li>
              {order.deliveryStreet && (
                <li>
                  Адреса: {order.deliveryStreet}, б.{order.deliveryHause}, кв.
                  {order.deliveryAppartment}
                </li>
              )}
            </ul>
            <ul className={s.orders_list__item_userList}>
              <span>Додаткова інформація</span>
              <li>Передзвонити: {order.callBack}</li>
              <li>Коментар: {order.comment}</li>
            </ul>
            <ul className={s.orders_list__item_userList}>
              <span>Композиція</span>
              {order.basket.map((b) => (
                <li key={b.id}>
                  <Basket basket={b} />
                </li>
              ))}
            </ul>
            <ChangeStatus order={order.id} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default OrdersList;
