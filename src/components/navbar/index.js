import React from 'react';
import { useIntl, Link } from 'gatsby-plugin-intl';
import css from './navbar.module.scss';
import Icons from '../icons';

export default () => {
    const intl = useIntl();

    return <nav className={css.nav}>
        <ul>
            <li className={css.navLink}>
                <Link activeClassName={css.active} to="/">
                    <Icons name="Home" size="m" />
                    <span className={css.linkText}>{intl.formatMessage({ id: "homeMobNav" })}</span>
                </Link>
            </li>
            <li className={css.navLink}>
                <Link activeClassName={css.active} to="/work">
                    <Icons name="Album" size="m" />
                    <span className={css.linkText}>{intl.formatMessage({ id: "workMobNav" })}</span>
                </Link>
            </li>
            <li className={css.navLink}>
                <Link activeClassName={css.active} to="/about">
                    <Icons name="Info" size="m" />
                    <span className={css.linkText}>{intl.formatMessage({ id: "aboutMobNav" })}</span>
                </Link>
            </li>
        </ul>
    </nav>
}