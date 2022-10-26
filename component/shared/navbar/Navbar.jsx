import React from 'react'
import Link from 'next/link'
import NavItem from "./NavItem";
import LoginForm from "../../login/loginFrom";
import Image from "next/image";
import {LogOut, PieChart, User, UserPlus, Users} from "react-feather";





const MENU_LIST = [
    {
        logo: <PieChart/>,
        text: "Dashboard",
        href: "/"
    },{

        logo: <Users/>,
        text: "Employee",
        href: "/"
    },{

        logo: <User/>,
        text: "Profile",
        href: "/"
    }, {
        logo:<UserPlus/>,
        text:"Add Account",
        href:"/"
    }
]

const MENU_LIST_BTM = [
    {
        logo: "",
        text: "Hi SomeName!",
        href: "",
    },{

        logo: <LogOut/>,
        text: "Logout",
        href: "/"
    }
    ]
const Navbar = () => {
    return (
        <header>
            <nav className = "nav">
                <Link href={"/"}>
                    <a>
                        <div className="logo">
                            <Image src="/assets/images/RMS.png" alt="logo" width={250} height={55} />
                        </div>
                    </a>
                </Link>

                <div className="nav_menu-bar">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className="nav_menu-list">
                    {MENU_LIST.map((menu, idx) => {
                            return (
                                <div className="nav_card">
                                    <div key={menu.text}>
                                        <NavItem {...menu} />
                                    </div>
                                </div>
                            );
                        }
                    )
                    }
                    <div className="nav_card_btm">
                        {MENU_LIST_BTM.map((menu, idx) => {
                                return (
                                    <div className="nav_card">
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