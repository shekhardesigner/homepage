import React from "react";
import { useIntl, Link } from 'gatsby-plugin-intl';
import css from './header.module.scss';

export default () => {
    const intl = useIntl();

    return <header className={css.header}>
        <Link to="/" className={css.page_title}>{intl.formatMessage({ id: "name" })}</Link>
    </header>
}