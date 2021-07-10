import React from "react";
import { useIntl, Link } from 'gatsby-plugin-intl';
import { header, siteName } from './header.module.scss';

const Header = ({children}) => {
    const intl = useIntl();

    return <header className={header}>
        <Link to="/" className={siteName}>{intl.formatMessage({ id: "name" })}</Link>
        {children}
    </header>
}

export default Header;