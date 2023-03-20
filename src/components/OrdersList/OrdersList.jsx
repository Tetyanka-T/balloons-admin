import { useState } from "react";
import s from "./OrdersList.module.scss";

const OrdersList = () => {
  const [status, setStatus] = useState(false);

  const onChangeStatus = () => {
    setStatus(true);
    toggleStatus();
  };
  const toggleStatus = () => {
    status ? setStatus(false) : setStatus(true);
  };

  return (
    <>
      <ul className={s.orders_list}>
        <li className={s.orders_list__item}>
          <div className={s.orders_list__item_title}>
            <p>Дата замолення: 20.03.2023</p>
            <p>Статус замовлення: new</p>
          </div>
          <ul className={s.orders_list__item_userList}>
            <span>Замовник</span>
            <li className={s.orders_list__item_userList__item}>Ім'я: Тетяна</li>
            <li className={s.orders_list__item_userList__item}>
              Телефон: 0975081398
            </li>
            <li className={s.orders_list__item_userList__item}>
              Пошта: tata@ukr.net
            </li>
          </ul>
          <ul className={s.orders_list__item_userList}>
            <span>Доставка</span>
            <li>Дата свята: 01.04.2023</li>
            <li>Спосіб: на хату</li>
            <li>Час: 10-11</li>
            {/* якщо на хату показувати адресу */}
            <li>Адреса: вулиця Гарна б. 5 кв. 10</li>
          </ul>
          <p>Передзвонити: так</p>
          <p>Коментар: шось хочу написати, бо є куди</p>
          <ul className={s.orders_list__item_userList}>
            <span>Композиція</span>
            <li>
              <img src="" alt="" width={320} height={300} />
            </li>
            <li>Категорія</li>
            <li>Код:</li>
            <li>Ціна</li>
            <li>Кількість</li>
          </ul>
          <div>
            <button
              onClick={() => onChangeStatus()}
              className={s.ordersList_change_status}
            >
              Змінити статус замовлення
            </button>
            {status && (
              <ul>
                <li>В роботі</li>
                <li>Завершений</li>
                <li>Видалити</li>
              </ul>
            )}
          </div>
        </li>

        <li className={s.orders_list__item}>
          <div className={s.orders_list__item_title}>
            <p>Дата замолення: 20.03.2023</p>
            <p>Статус замовлення: new</p>
          </div>
          <ul className={s.orders_list__item_userList}>
            <span>Замовник</span>
            <li className={s.orders_list__item_userList__item}>Ім'я: Тетяна</li>
            <li className={s.orders_list__item_userList__item}>
              Телефон: 0975081398
            </li>
            <li className={s.orders_list__item_userList__item}>
              Пошта: tata@ukr.net
            </li>
          </ul>
          <ul className={s.orders_list__item_userList}>
            <span>Доставка</span>
            <li>Дата свята: 01.04.2023</li>
            <li>Спосіб: на хату</li>
            <li>Час: 10-11</li>
            {/* якщо на хату показувати адресу */}
            <li>Адреса: вулиця Гарна б. 5 кв. 10</li>
          </ul>
          <p>Передзвонити: так</p>
          <p>Коментар: шось хочу написати, бо є куди</p>
          <ul className={s.orders_list__item_userList}>
            <span>Композиція</span>
            <li>
              <img src="" alt="" width={320} height={300} />
            </li>
            <li>Категорія</li>
            <li>Код:</li>
            <li>Ціна</li>
            <li>Кількість</li>
          </ul>
          <div>
            <button
              onClick={() => onChangeStatus()}
              className={s.ordersList_change_status}
            >
              Змінити статус замовлення
            </button>
            {status && (
              <ul>
                <li>В роботі</li>
                <li>Завершений</li>
                <li>Видалити</li>
              </ul>
            )}
          </div>
        </li>
        <li className={s.orders_list__item}>
          <div className={s.orders_list__item_title}>
            <p>Дата замолення: 20.03.2023</p>
            <p>Статус замовлення: new</p>
          </div>
          <ul className={s.orders_list__item_userList}>
            <span>Замовник</span>
            <li className={s.orders_list__item_userList__item}>Ім'я: Тетяна</li>
            <li className={s.orders_list__item_userList__item}>
              Телефон: 0975081398
            </li>
            <li className={s.orders_list__item_userList__item}>
              Пошта: tata@ukr.net
            </li>
          </ul>
          <ul className={s.orders_list__item_userList}>
            <span>Доставка</span>
            <li>Дата свята: 01.04.2023</li>
            <li>Спосіб: на хату</li>
            <li>Час: 10-11</li>
            {/* якщо на хату показувати адресу */}
            <li>Адреса: вулиця Гарна б. 5 кв. 10</li>
          </ul>
          <p>Передзвонити: так</p>
          <p>Коментар: шось хочу написати, бо є куди</p>
          <ul className={s.orders_list__item_userList}>
            <span>Композиція</span>
            <li>
              <img src="" alt="" width={320} height={300} />
            </li>
            <li>Категорія</li>
            <li>Код:</li>
            <li>Ціна</li>
            <li>Кількість</li>
          </ul>
          <div>
            <button
              onClick={() => onChangeStatus()}
              className={s.ordersList_change_status}
            >
              Змінити статус замовлення
            </button>
            {status && (
              <ul>
                <li>В роботі</li>
                <li>Завершений</li>
                <li>Видалити</li>
              </ul>
            )}
          </div>
        </li>
      </ul>
    </>
  );
};

export default OrdersList;
