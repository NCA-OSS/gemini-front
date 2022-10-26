import Link from 'next/link'
import React from 'react'

const NavItem = ({logo, href, text, active}) => {
    return (
        <Link href={href}>

                <a className={`
            nav_link ${active ? "active": ""}
            `}> <div className='nav_items'>
                    <div>
                        {logo}
                    </div>
                    <div className='nav_txt'>
                        {text}
                    </div>
                </div>
                </a>


        </Link>
    )
}

export default NavItem