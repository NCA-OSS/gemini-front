import React from 'react';
import Link from 'next/link';
import NavItem from "./navItem";
import Image from "next/image";
import { LogOut, PieChart, User, UserPlus, Users } from "react-feather";
import styles from './navbar.module.scss';




const MENU_LIST = [
    {
        logo: <PieChart size={23} />,
        text: "Dashboard",
        href: "/dashboard"
    }, {

        logo: <Users size={23} />,
        text: "Employee",
        href: "/employee"
    }, {

        logo: <User size={23} />,
        text: "Profile",
        href: "/profile"
    }, {
        logo: <UserPlus size={23} />,
        text: "Add Account",
        href: "/addEmployee"
    }
]

const MENU_LIST_BTM = [
    {
        logo: <LogOut size={14} />,
        text: "Logout",
        href: "/"
    }
]
const Navbar = () => {
    return (
        <header className={styles.navheader}>
            <nav className={styles.nav}>
                <Link href={"/dashboard"}>
                    <a>
                        <div className={styles.logo}>
                            <Image src="/assets/images/2.png" alt="logo" width={200} height={45} />
                        </div>
                    </a>
                </Link>



                <div className={styles.nav_menu_list}>
                    {MENU_LIST.map((menu, idx) => {
                        return (
                            <div className={styles.nav_card}>
                                <div key={menu.text}>
                                    <NavItem {...menu} />
                                </div>
                            </div>
                        );
                    }
                    )
                    }

                    <div className={styles.nav_card_btm}>
                        <div className={styles.nav_welcome}>
                            <div className={styles.nav_txt}>
                                Hello Someone!
                            </div>
                        </div>
                        {MENU_LIST_BTM.map((menu, idx) => {
                            return (
                                <div className={styles.nav_card}>
                                    <div key={menu.text}>
                                        <NavItem {...menu} />
                                    </div>
                                </div>
                            );
                        }
                        )
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;