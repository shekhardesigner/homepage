import React from 'react';
import { Link } from "gatsby"
import css from './navbar.module.scss';
import Icons from '../icons';

export default () => <nav className={css.nav}>
    <ul>
        <li className={css.navLink}>
            <Link to="/">
                <Icons name="Home" size="m" />
                <span className={css.linkText}>Home</span>
            </Link>
        </li>
        <li className={css.navLink}>
            <Link to="/work">
                <Icons name="Album" size="m" />
                <span className={css.linkText}>Work</span>
            </Link>
        </li>
        <li className={css.navLink}>
            <Link to="/about">
                <Icons name="Info" size="m" />
                <span className={css.linkText}>About me</span>
            </Link>
        </li>
    </ul>
</nav>