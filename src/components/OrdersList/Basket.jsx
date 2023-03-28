import { useEffect, useState } from "react";
import * as API from "../../apiServise/api";

const Basket = ({ basket }) => {
  const [balloon, setBallons] = useState("");

  useEffect(() => {
    API.getBalloonsById(basket.balloon).then(setBallons);
  }, [basket.balloon]);

  return (
    <ul>
      {/* {balloons.map((balloon) => ( */}
      <li key={balloon.id}>
        <img src="" alt="" width={320} height={300} />
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
