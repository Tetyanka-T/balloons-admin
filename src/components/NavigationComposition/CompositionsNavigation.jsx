import { useState } from "react";
import CreateComposition from "components/CreateComposition/CreateComposition";
import SearchComposition from "components/SearchComposition/SearchComposition";
import s from "./CompositionsNavigation.module.scss";

const CompositionsNavigation = () => {
  const [create, setCreate] = useState(false);
  const [change, setChange] = useState(false);

  const onShowCreate = () => {
    setCreate(true);
    toggleCreate();
    setChange(false);
  };
  const toggleCreate = () => {
    create ? setCreate(false) : setCreate(true);
  };

  const onShowChange = () => {
    setChange(true);
    toggleChange();
    setCreate(false);
  };
  const toggleChange = () => {
    change ? setChange(false) : setChange(true);
  };
  return (
    <>
      <ul className={s.navigation_list}>
        <li>
          <button onClick={() => onShowCreate()}>Створити композицію</button>
        </li>
        <li>
          <button onClick={() => onShowChange()}>
            Пошук композиції/змінити
          </button>
        </li>
      </ul>
      {create && <CreateComposition />}
      {change && <SearchComposition />}
    </>
  );
};

export default CompositionsNavigation;
