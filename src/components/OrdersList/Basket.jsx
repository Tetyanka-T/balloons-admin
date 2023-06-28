// import { useEffect, useState } from "react";
// import * as API from "../../apiServise/api";
import s from "./OrdersList.module.scss";

const Basket = ({ basket }) => {
  // const [balloon, setBallons] = useState("");

  // useEffect(() => {
  //   API.getBalloonsById(basket.balloon).then(setBallons);
  // }, [basket.balloon]);

  return (
    <ul className={s.basket_list}>
      <li key={basket.id} className={s.basket_list__item}>
        <img src={basket.img} alt="" width={340} height={360} />
        <p>Код: {basket.code}</p>
        <p>Ціна: {basket.price}</p>
        <p>Кількість: {basket.quantity}</p>
      </li>
    </ul>
  );
};

export default Basket;
