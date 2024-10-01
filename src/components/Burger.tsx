import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import styles from "./Burger.module.css";

const Burger = () => {
  const [burgerState, setBurgerState] = useState(true);
  const closeBurger = () => {
    setBurgerState(true);
    return true;
  };
  return (
    <div className={styles.burgerContainer}>
      <div
        className={styles.linesContainer}
        onClick={() => setBurgerState(!burgerState)}
      >
        <div className={styles.burgerLine1}></div>
        <div className={styles.burgerLine2}></div>
        <div className={styles.burgerLine3}></div>
      </div>
      <BurgerMenu
        currentBurgerState={{ burgerState }}
        closeBurger={{ closeBurger }}
      />
    </div>
  );
};

export default Burger;
