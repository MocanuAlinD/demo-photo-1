// import styles from '../styles/Home.module.css'
import styles from "@/styles/Home.module.css"
import Link from 'next/link'
import { AiOutlineShoppingCart,AiOutlineInfoCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <div className={styles.bottom_div}>
            <div className={styles.shop}>
                <AiOutlineInfoCircle className={styles.linkIcon}/>
                <Link legacyBehavior className={styles.lnk} href='#'><a>About</a></Link>
            </div>
            <div className={styles.shop}>
                <AiOutlineShoppingCart className={styles.linkIcon}/>
                <Link legacyBehavior className={styles.lnk} href='#'><a>T-Shirts</a></Link>
            </div>
        </div>
    );
}
 
export default Footer;