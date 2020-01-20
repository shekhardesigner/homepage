/**
 * Component: Icons
 */

import React from 'react';
import css from './icons.module.css'

export default ({ name, size, color, inline }) => {
    const iconName = `gg${name}`;
    return <i className={`icon ${css[iconName]} icon-${size ? size : `r`} icon-${inline ? `i` : `b`}`} style={{color: color}}></i>
}