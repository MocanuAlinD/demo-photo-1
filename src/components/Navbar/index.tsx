import Burger from "../Burger";
import DesktopMenu from "../DesktopMenu";
import styles from "./Navbar.module.css"


// navbar from index page
const Navbar = () => {
  return (
    <div className={styles.entireMenu}>
      <h1 className={styles.titleElena}>Cristian Elena</h1>
      <DesktopMenu />
      <Burger />
    </div>
  );
};

export default Navbar;
