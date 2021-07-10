import React from 'react';
import { useIntl, Link } from 'gatsby-plugin-intl';
import { nav, navLink, active, linkText } from './navbar.module.scss';
import Icons from '../icons';

const NavBar = () => {
    const intl = useIntl();

    return <nav className={nav}>
        <ul>
            <li className={navLink}>
                <Link activeClassName={active} to="/">
                    <Icons name="Home" size="m" />
                    <span className={linkText}>{intl.formatMessage({ id: "homeMobNav" })}</span>
                </Link>
            </li>
            <li className={navLink}>
                <Link activeClassName={active} to="/work">
                    <Icons name="Briefcase" size="m" />
                    <span className={linkText}>{intl.formatMessage({ id: "workMobNav" })}</span>
                </Link>
            </li>
            <li className={navLink}>
                <Link activeClassName={active} to="/about">
                    <Icons name="Info" size="m" />
                    <span className={linkText}>{intl.formatMessage({ id: "aboutMobNav" })}</span>
                </Link>
            </li>
        </ul>
    </nav>
}

export default NavBar;