"use client"
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Burger from './Burger'


import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = { active: false }
    }
    changeActive(item) {
        this.setState({ active: item })
    }
    render() {
        return (
            <div className={styles.entireMenu}>
                <div className={styles.title}>
                    <h1>Cristian Elena</h1>
                </div>
                <div className={styles.brandTitle}>
                    <h4>cristian-elena.ro</h4>
                </div>
                <div>
                    <ul className={this.state.active ? styles.menuListInactive : styles.menuListActive}>
                        <li>
                            <Link href='categorie/portraits'>portraits</Link>
                        </li>
                        <li>
                            <Link href='categorie/kids'>kids</Link>
                        </li>
                        <li>
                            <Link href='categorie/preborn'>preborn</Link>
                        </li>
                        <li>
                            <Link href='categorie/newborn'>newborn</Link>
                        </li>
                        <li>
                            <Link href='categorie/food'>food</Link>
                        </li>
                        <li>
                            <Link href='categorie/city'>city</Link>
                        </li>
                        <li>
                            <Link href='categorie/landscape'>landscape</Link>
                        </li>
                    </ul>
                </div>
                <Burger data={{ active: this.state.active, changeActive: this.changeActive.bind(this) }}/>
            </div>
        );
    }
}

export default Navbar;













// const Navbar = () => {
//     return (
//         <div className={styles.entireMenu}>
//             <div className={styles.title}>
//                 <h1>Cristian Elena</h1>
//             </div>
//             <div className={styles.brandTitle}>
//                 <h4>cristian-elena.ro</h4>
//             </div>
//             <div className={styles.toggleButton}>
//                 <div className={styles.line1}></div>
//                 <div className={styles.line2}></div>
//                 <div className={styles.line3}></div>
//             </div>
//             <div>
//                 <ul className={styles.menuList}>
//                     <li>
//                         <Link href='./portraits'><a>portraits</a></Link>
//                     </li>
//                     <li>
//                         <Link href='./kids'><a>kids</a></Link>
//                     </li>
//                     <li>
//                         <Link href='./preborn'><a>preborn</a></Link>
//                     </li>
//                     <li>
//                         <Link href='./newborn'><a>newborn</a></Link>
//                     </li>
//                     <li>
//                         <Link href='./food'><a>food</a></Link>
//                     </li>
//                     <li>
//                         <Link href='./city'><a>city</a></Link>
//                     </li>
//                     <li>
//                         <Link href='./landscape'><a>landscape</a></Link>
//                     </li>
//                 </ul>
//                 <Burger />
//             </div>
//         </div>
//     );
// }
 
// export default Navbar;
