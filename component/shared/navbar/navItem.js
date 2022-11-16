import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.scss';

const NavItem = ({ logo, href, text, active }) => {
    return (
        <Link href={href}>

            <a className={styles.nav_link}>
                <div className={styles.nav_items}>

                    <div className={styles.nav_icon} >
                        {logo}
                    </div>

                    <div className={styles.nav_txt}>
                        {text}
                    </div>
                </div>
            </a>


        </Link>
    )
}

export default NavItem