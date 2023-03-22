import { Link } from "react-router-dom";
import { ReactComponent as Basket } from "../../images/basket.svg";
import photo1 from "../../images/photo_1.jpg";
import s from "./CardDescription.module.scss";

const CardDescription = () => {
  return (
    <div className={s.cardDescription_container}>
      <div className={s.cardDescription_photo_container}>
        <img
          src={photo1}
          alt=""
          width={200}
          height={100}
          className={s.cardDescription_image}
        />
        <div className={s.transparent}></div>
      </div>
      <div>
        <h3 className={s.cardDescription_title}>Супер-пупер композиція</h3>
        <p className={s.cardDescription_article}>арт.№</p>
        <p className={s.cardDescription_descriptionComposition}>
          Композиція для дівчинки на День народження складається з ...
        </p>
        <div className={s.cardDescription_price_container}>
          <p className={s.cardDescription_price}>2000 грн.</p>
          <button className={s.cardDescription_button__basket}>
            Купити
            <Basket className={s.cardDescription_button__icon} />
          </button>
        </div>
        <p className={s.cardDescription_inform}>
          *Просимо звернути увагу: колір товару може відрізнятися в залежності
          від освітлення та налаштувань Вашого екрану.
        </p>
        <div className={s.change_composition}>
          <Link to="/compositions/change">Внести зміни до композиції</Link>
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
