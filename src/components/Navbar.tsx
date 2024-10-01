"use client";
import styles from "../styles/Home.module.css";
import Burger from "./Burger";

// navbar from index page
const Navbar = () => {
  return (
    <div className={styles.entireMenu}>
      <div className={styles.title}>
        <h1>Cristian Elena</h1>
      </div>
      <div className={styles.brandTitle}>
        <h4>cristian-elena.ro</h4>
      </div>
      <Burger />
    </div>
  );
};

export default Navbar;
