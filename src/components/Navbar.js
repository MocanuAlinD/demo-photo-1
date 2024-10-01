"use client";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Burger from "./Burger";


// navbar from index page
const Navbar = () => {
  const [state, setState] = useState(false);
  return (
    <div className={styles.entireMenu}>
      <div className={styles.title}>
        <h1>Cristian Elena</h1>
      </div>
      <div className={styles.brandTitle}>
        <h4>cristian-elena.ro</h4>
      </div>
      <div>
        <ul className={state ? styles.menuListInactive : styles.menuListActive}>
          <li>
            <Link href="categorie/portraits">portraits</Link>
          </li>
          <li>
            <Link href="categorie/kids">kids</Link>
          </li>
          <li>
            <Link href="categorie/preborn">preborn</Link>
          </li>
          <li>
            <Link href="categorie/newborn">newborn</Link>
          </li>
          <li>
            <Link href="categorie/food">food</Link>
          </li>
          <li>
            <Link href="categorie/city">city</Link>
          </li>
          <li>
            <Link href="categorie/landscape">landscape</Link>
          </li>
        </ul>
      </div>
      <Burger data={{ changeActive: () => setState(!state) }} />
    </div>
  );
};

export default Navbar;
