import ChangeComposition from "components/ChangeComposition/ChangeComposition";
import { useState } from "react";
import { ReactComponent as Basket } from "../../images/basket.svg";
import photo1 from "../../images/photo_1.jpg";
import s from "./CardDescription.module.scss";

const CardDescription = ({ balloons }) => {
  const [change, setChange] = useState(false);
  const onShowChange = () => {
    setChange(true);
    toggleChange();
  };
  const toggleChange = () => {
    change ? setChange(false) : setChange(true);
  };
  return (
    <div className={s.cardDescription_container}>
      <div className={s.cardDescription_photo_container}>
        <img
          src={balloons.imgSrc}
          alt=""
          width={200}
          height={100}
          className={s.cardDescription_image}
        />
        <div className={s.transparent}></div>
      </div>
      <div>
        <h3 className={s.cardDescription_title}>{balloons.name}</h3>
        <p className={s.cardDescription_article}>арт.№ {balloons.code}</p>
        <p className={s.cardDescription_descriptionComposition}>
          {balloons.description}
        </p>
        <div className={s.cardDescription_price_container}>
          <p className={s.cardDescription_price}>{balloons.price} грн.</p>
        </div>
        <button className={s.change_composition} onClick={() => onShowChange()}>
          Внести зміни до композиції
        </button>
        {change && <ChangeComposition balloons={balloons} />}
      </div>
    </div>
  );
};

export default CardDescription;
