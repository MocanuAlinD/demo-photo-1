import Burger from "../Burger";
import DesktopMenu from "../DesktopMenu";
import styles from "./NavbarPages.module.css";

// nav menu from specific categories. FIX to be only one.
const NavbarPages = ({ title }: { title: string }) => {
  return (
    <div className={styles.entireNavbar}>
      {/* mobile title of current page */}
      <h3 className={styles.mobileTitlePage}>{title}</h3>
      {/* DesktopMenu disabled for mobile */}
      <DesktopMenu />
      {/* Burger disabled for large screens */}
      <Burger />
    </div>
  );
};

export default NavbarPages;
