import { useEffect, useState } from "react";
import * as API from "../../apiServise/api";
import s from "./OrdersList.module.scss";

const Basket = ({ basket }) => {
  const [balloon, setBallons] = useState("");

  useEffect(() => {
    API.getBalloonsById(basket.balloon).then(setBallons);
  }, [basket.balloon]);

  return (
    <ul className={s.basket_list}>
      {/* {balloons.map((balloon) => ( */}
      <li key={balloon.id} className={s.basket_list__item}>
        <img src={balloon.imgSrc} alt="" width={350} height={370} />
        <p>Категорія: {balloon.category}</p>
        <p>Код: {balloon.code}</p>
        <p>Ціна: {balloon.price}</p>
        <p>Кількість: {basket.quantite}</p>
      </li>
      {/* ))} */}
    </ul>
  );
};

export default Basket;
