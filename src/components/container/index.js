import React from 'react';
import css from './container.module.css';
import Navbar from '../navbar';

export default ({children}) => <>
        <Navbar />
        <div className={css.container}>
            {children}
        </div>
    </>
