import { TailSpin } from "react-loader-spinner";
import s from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={s.spin}>
      <TailSpin
        color="orange"
        height={80}
        width={80}
        ariaLabel="loading-indicator"
      />
    </div>
  );
};

export default Loader;
