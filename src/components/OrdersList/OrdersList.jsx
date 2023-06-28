import Basket from "./Basket";
import ChangeStatus from "./ChangeStatus";
import * as API from "../../apiServise/api";
import s from "./OrdersList.module.scss";
import { toast } from "react-hot-toast";

const OrdersList = ({ orders }) => {
  const onDeleteOrder = (id) => {
    API.deleteOrder(id);
    toast.success("Замовлення успішно видалено");
  };

  return (
    <>
      <ul className={s.orders_list}>
        {orders.map((order) => (
          <li className={s.orders_list__item} key={order._id}>
            <div className={s.orders_list__item_title}>
              <p className={s.text}>
                Дата замолення: <br />
                {order.updatedAt.split("T")[0]}
              </p>
              <p className={s.text}>
                Статус замовлення: <br />
                {order.statusOrder}
              </p>
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
              {order.deliveryAddress && (
                <li>Адреса: {order.deliveryAddress}</li>
              )}
            </ul>
            <ul className={s.orders_list__item_userList}>
              <span>Додаткова інформація</span>
              <li>Передзвонити: {order.callBack === false ? "так" : "ні"}</li>
              <li>Коментар: {order.comment}</li>
            </ul>
            {order.basket.balloons && (
              <ul className={s.orders_list__item_userList_composition}>
                <span>Композиція</span>

                {order.basket.balloons.map((b) => (
                  <li key={b.id}>
                    <Basket basket={b} />
                  </li>
                ))}
              </ul>
            )}

            <p className={s.orders_list_amount}>
              Сума заказу: {order.basket.amount} грн
            </p>
            <ChangeStatus order={order} />
            <button
              onClick={() => onDeleteOrder(order._id)}
              className={s.deleteButton}
            >
              Видалити замовлення
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default OrdersList;
