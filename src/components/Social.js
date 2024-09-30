import {FaFacebook, FaMobile} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {FiMail} from 'react-icons/fi'
import Link from 'next/link'
import style from './Social.module.css'

const Social = () => {
    return (
        <div className={style.social}>
            <div className={style.icon+' '+style.facebook}>
                <div className={style.tooltip}>Facebook</div>
                <Link legacyBehavior href="https://facebook.com/fotograf.elenamusat"><span><FaFacebook className={style.eachIcon}/></span></Link>
            </div>
            <div className={style.icon+' '+style.instagram}>
                <div className={style.tooltip}>Instagram</div>
                <Link legacyBehavior href="https://instagram.com/musatelena"><span><GrInstagram className={style.eachIcon}/></span></Link>
            </div>
            <div className={style.icon+' '+style.phone}>
                <div className={style.tooltip}>0727.156.830</div>
                <Link legacyBehavior href="tel:0727156830"><span><FaMobile className={style.eachIcon}/></span></Link>
            </div>
            <div className={style.icon+' '+style.mail}>
                <div className={style.tooltip}>elena_musat88@yahoo.com</div>
                <Link legacyBehavior href="mailto:elena_musat88@yahoo.com"><span><FiMail className={style.eachIcon}/></span></Link>
            </div>
        </div>
    );
}
export default Social;
