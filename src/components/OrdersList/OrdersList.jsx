import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import s from "./OrdersList.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
  },
});

const OrdersList = () => {
  const [status, setStatus] = useState("новий");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const deleteOrder = () => {
    // console.log(order.id)
  };
  return (
    <>
      <ul className={s.orders_list}>
        <li className={s.orders_list__item}>
          <div className={s.orders_list__item_title}>
            <p>Дата замолення: 20.03.2023</p>
            <p>Статус замовлення: {status}</p>
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
            <li>Спосіб: адресна доставка</li>
            <li>Час: 10-11</li>
            {/* якщо на хату показувати адресу */}
            <li>Адреса: вулиця Гарна б. 5 кв. 10</li>
          </ul>
          <ul className={s.orders_list__item_userList}>
            <span>Додаткова інформація</span>
            <li>Передзвонити: так</li>
            <li>Коментар: шось хочу написати, бо є куди</li>
          </ul>
          <ul className={s.orders_list__item_userList}>
            <span>Композиція</span>
            <li>
              <img src="" alt="" width={320} height={300} />
            </li>
            <li>Категорія: день народження</li>
            <li>Код: ДН-01</li>
            <li>Ціна: 2000</li>
            <li>Кількість: 1</li>
          </ul>

          <FormControl sx={{ width: 320 }}>
            <ThemeProvider theme={theme}>
              <InputLabel id="status">Змінити статус замовлення</InputLabel>
              <Select
                labelId="status"
                id="status"
                value={status}
                label="Змінити статус замовлення"
                onChange={handleChange}
              >
                <MenuItem value={"В роботі"}>В роботі</MenuItem>
                <MenuItem value={"Завершений"}>Завершений</MenuItem>
              </Select>
            </ThemeProvider>
          </FormControl>
          <button
            onClick={() => deleteOrder()}
            className={s.ordersList_change_status}
          ></button>
        </li>
      </ul>
    </>
  );
};

export default OrdersList;
