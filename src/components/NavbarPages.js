"use client";
import { useState } from "react";
import Link from "next/link";
import Burger from "./Burger";
import styles from "./NavbarPages.module.css";

// nav menu from specific categories. FIX to be only one.
const NavbarPages = (props) => {
  const [state, setState] = useState(true);

  return (
    <div className={styles.entireNavbar}>
      {/* mobile title of current page */}
      <h3 className={styles.pageTitleActive}>{props.title}</h3>
      <ul className={state ? styles.navbarActive : styles.navbarInactive}>
        <li>
          <Link href="/categorie/portraits">portraits</Link>
        </li>
        <li>
          <Link href="/categorie/kids">kids</Link>
        </li>
        <li>
          <Link href="/categorie/preborn">preborn</Link>
        </li>
        <li>
          <Link href="/categorie/newborn">newborn</Link>
        </li>
        <li>
          <Link href="/categorie/food">food</Link>
        </li>
        <li>
          <Link href="/categorie/city">city</Link>
        </li>
        <li>
          <Link href="/categorie/landscape">landscape</Link>
        </li>
        <li>
          <Link href="/">home</Link>
        </li>
      </ul>
      <Burger data={{ changeActive: () => setState(!state) }} />
    </div>
  );
};

export default NavbarPages;
