import React from "react";
import { Link } from 'gatsby';
import css from './header.module.css';

export default () => <header className={css.header}>
    <Link to="/" className={css.page_title}>Shekhar</Link>
</header>