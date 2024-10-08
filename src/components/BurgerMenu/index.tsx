"use client";
import styles from "./BurgerMenu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

// navbar from index page
const BurgerMenu = ({
  currentBurgerState,
  closeBurger,
}: {
  currentBurgerState: {
    burgerState: boolean;
  };
  closeBurger: { closeBurger: () => boolean };
}) => {
  const path = usePathname();
  const curr = currentBurgerState.burgerState;

  const closeBurgerMenu = () => closeBurger.closeBurger();
  return (
    <div className={styles.burgerMenuContainer}>
      <ul
        className={styles.burgerListMenu}
        style={
          {
            transform: curr ? "translateX(100%)" : "translateX(0%)",
          } as React.CSSProperties
        }
      >
        <li>
          <Link onClick={closeBurgerMenu} href="/categorie/portraits">
            portraits
          </Link>
        </li>
        <li>
          <Link onClick={closeBurgerMenu} href="/categorie/kids">
            kids
          </Link>
        </li>
        <li>
          <Link onClick={closeBurgerMenu} href="/categorie/preborn">
            preborn
          </Link>
        </li>
        <li>
          <Link onClick={closeBurgerMenu} href="/categorie/newborn">
            newborn
          </Link>
        </li>
        <li>
          <Link onClick={closeBurgerMenu} href="/categorie/food">
            food
          </Link>
        </li>
        <li>
          <Link onClick={closeBurgerMenu} href="/categorie/city">
            city
          </Link>
        </li>
        <li>
          <Link onClick={closeBurgerMenu} href="/categorie/landscape">
            landscape
          </Link>
        </li>
        {path != "/" && (
          <li className={styles.homeLink}>
            <Link onClick={closeBurgerMenu} href="/">
              home
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default BurgerMenu;
