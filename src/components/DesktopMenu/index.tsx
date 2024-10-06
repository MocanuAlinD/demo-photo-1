"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./DesktopMenu.module.css";

const DesktopMenu = () => {
  const path = usePathname();
  const pg = path.split("/")[path.split("/").length - 1];

  const paths = [
    "portraits",
    "kids",
    "preborn",
    "newborn",
    "food",
    "city",
    "landscape",
  ];

  return (
    <div
      className={
        path == "/" ? styles.desktopMenuContainer : styles.categoryMenuDesktop
      }
    >
      <ul className={styles.desktopMenuList}>
        {paths.map((addr) => {
          return (
            <li
              key={addr}
              className={pg == addr ? styles.liActive : styles.liInactive}
            >
              <Link href={"/categorie/" + addr}>{addr}</Link>
            </li>
          );
        })}
        {path != "/" && (
          <li>
            <Link href="/" className={styles.homeLink}>
              home
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default DesktopMenu;
