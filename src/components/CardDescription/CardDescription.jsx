import { useState } from "react";
import { toast } from "react-hot-toast";
import ChangeComposition from "components/ChangeComposition/ChangeComposition";
import * as API from "../../apiServise/api";
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

  const onDeleteBalloon = (id) => {
    API.deleteBalloon(id);
    toast.success("Композиція успішно видалена");
  };
  return (
    <>
      <div className={s.cardDescription_container}>
        <div className={s.cardDescription_photo_container}>
          <img
            src={balloons.imgSrc}
            alt="фото композиції"
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
          <div className={s.button_container}>
            <button
              className={s.change_composition}
              onClick={() => onShowChange()}
            >
              Внести зміни до композиції
            </button>

            <button
              className={s.change_composition}
              onClick={() => onDeleteBalloon(balloons._id)}
            >
              Видалити композицію
            </button>
          </div>
        </div>
      </div>
      {change && <ChangeComposition balloons={balloons} />}
    </>
  );
};

export default CardDescription;
