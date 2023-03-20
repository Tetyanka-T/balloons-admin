import s from "./CardDescription.module.scss";

const CardDescription = () => {
  return (
    <div className={s.cardDescription_container}>
      <div className={s.cardDescription_photo_container}>
        <img
          src="images/photo_1"
          alt=""
          width={200}
          height={100}
          className={s.cardDescription_image}
        />
      </div>

      <div>
        <h3 className={s.cardDescription_title}>Супер-пупер композиція</h3>
        <p className={s.cardDescription_article}>арт.№</p>
        <p className={s.cardDescription_descriptionComposition}>
          Композиція для дівчинки на День народження складається з ...
        </p>
        <div className={s.cardDescription_price_container}>
          <p className={s.cardDescription_price}>2000 грн.</p>
          <button className={s.cardDescription_button__basket}>Купити</button>
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
