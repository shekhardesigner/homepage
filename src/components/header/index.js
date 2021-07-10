import React from "react";
import { useIntl, Link } from 'gatsby-plugin-intl';
import css from './header.module.scss';

export default ({children}) => {
    const intl = useIntl();

    return <header className={css.header}>
        <Link to="/" className={css.siteName}>{intl.formatMessage({ id: "name" })}</Link>
        {children}
    </header>
}