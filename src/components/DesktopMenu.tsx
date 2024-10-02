"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./DesktopMenu.module.css";


const DesktopMenu = () => {
  const path = usePathname();

  return (
    <div className={styles.desktopMenuContainer}>
      <ul className={styles.desktopMenuList}>
        <li>
          <Link href="/categorie/portraits">
            portraits
          </Link>
        </li>
        <li>
          <Link href="/categorie/kids">
            kids
          </Link>
        </li>
        <li>
          <Link href="/categorie/preborn">
            preborn
          </Link>
        </li>
        <li>
          <Link href="/categorie/newborn">
            newborn
          </Link>
        </li>
        <li>
          <Link href="/categorie/food">
            food
          </Link>
        </li>
        <li>
          <Link href="/categorie/city">
            city
          </Link>
        </li>
        <li>
          <Link href="/categorie/landscape">
            landscape
          </Link>
        </li>
        {path != "/" && (
          <li>
            <Link href="/">
              home
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default DesktopMenu;
