import style from "./Burger.module.css";

const Burger = ({ data }) => {

  return (
    <div className={style.toggleButton} onClick={() => data.changeActive()}>
      <div className={style.line1}></div>
      <div className={style.line2}></div>
      <div className={style.line3}></div>
    </div>
  );
};

export default Burger;
